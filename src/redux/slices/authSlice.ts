import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { storage } from '../../utils/storage';
import { delay } from '../../utils/helpers';

const AUTH_TOKEN_KEY = '@auth/token';
const AUTH_USER_KEY = '@auth/user';

type AuthUser = {
  email: string;
};

type AuthState = {
  token: string | null;
  user: AuthUser | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  initialized: boolean;
};

const initialState: AuthState = {
  token: null,
  user: null,
  status: 'idle',
  error: null,
  initialized: false,
};

type LoginPayload = {
  email: string;
  password: string;
};

const DUMMY_EMAIL = 'demo@company.com';
const DUMMY_PASSWORD = 'password123';
const DUMMY_TOKEN = 'demo-token';

export const loginUser = createAsyncThunk<
  { token: string; user: AuthUser },
  LoginPayload,
  { rejectValue: string }
>('auth/loginUser', async ({ email, password }, { rejectWithValue }) => {
  await delay(600);

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPassword = password.trim();

  if (
    normalizedEmail !== DUMMY_EMAIL ||
    normalizedPassword !== DUMMY_PASSWORD
  ) {
    return rejectWithValue('Invalid demo credentials.');
  }

  const token = DUMMY_TOKEN;
  const user = { email: DUMMY_EMAIL };

  await storage.set(AUTH_TOKEN_KEY, token);
  await storage.set(AUTH_USER_KEY, user);

  return { token, user };
});

export const restoreSession = createAsyncThunk(
  'auth/restoreSession',
  async () => {
    const token = await storage.get<string>(AUTH_TOKEN_KEY);
    const user = await storage.get<AuthUser>(AUTH_USER_KEY);

    if (!token) {
      return { token: null, user: null };
    }

    return { token, user };
  },
);

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  await storage.remove(AUTH_TOKEN_KEY);
  await storage.remove(AUTH_USER_KEY);
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? 'Unable to login';
      })
      .addCase(restoreSession.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(restoreSession.fulfilled, (state, action) => {
        state.status = 'idle';
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.initialized = true;
      })
      .addCase(restoreSession.rejected, (state) => {
        state.status = 'failed';
        state.initialized = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;
        state.user = null;
        state.status = 'idle';
        state.error = null;
      });
  },
});

export default authSlice.reducer;

