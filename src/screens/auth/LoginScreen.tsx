import React, { useMemo, useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Spacer from '../../components/Spacer';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import { useTheme } from '../../theme';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { loginUser } from '../../redux/slices/authSlice';
import { isEmail, minLength, isRequired } from '../../utils/validators';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state: RootState) => state.auth);
  const { colors, spacing, typography } = useTheme();

  const [email, setEmail] = useState('demo@company.com');
  const [password, setPassword] = useState('password123');
  const [touched, setTouched] = useState(false);

  const errors = useMemo(() => {
    const list: { email?: string; password?: string } = {};
    if (!isRequired(email) || !isEmail(email)) {
      list.email = 'Enter a valid email';
    }
    if (!minLength(password, 6)) {
      list.password = 'Password must be at least 6 characters';
    }
    return list;
  }, [email, password]);

  const handleLogin = () => {
    setTouched(true);
    if (Object.keys(errors).length) {
      return;
    }
    dispatch(loginUser({ email: email.trim(), password }));
  };

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: colors.background,
    },
    heroWrapper: {
      height: 260,
      borderBottomLeftRadius: spacing.xl,
      borderBottomRightRadius: spacing.xl,
      overflow: 'hidden',
      marginBottom: -spacing.xl,
    },
    heroOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.45)',
      padding: spacing.lg,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      paddingHorizontal: spacing.lg,
      paddingBottom: spacing.xl,
    },
    title: {
      fontSize: typography.heading,
      fontWeight: typography.weightBold,
      color: colors.text,
    },
    helperText: {
      color: colors.textMuted,
      marginTop: spacing.sm,
    },
    subtitle: {
      marginTop: spacing.sm,
      color: colors.textMuted,
      fontSize: typography.subtitle,
    },
    errorText: {
      color: colors.danger,
      textAlign: 'center',
      marginTop: spacing.sm,
    },
  });

  const isLoading = authState.status === 'loading';

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.heroWrapper}>
          <ImageBackground
            source={{ uri: HERO_IMAGE }}
            resizeMode="cover"
            style={{ flex: 1 }}
          >
            <View style={styles.heroOverlay}>
              <Text style={styles.title}>Welcome back</Text>
              <Text style={styles.subtitle}>
                Enter the demo credentials to explore the dashboard.
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.content}>
          <Card>
            <Input
              label="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="demo@company.com"
              value={email}
              onChangeText={setEmail}
              editable={!isLoading}
              error={touched ? errors.email : undefined}
            />

          <Input
              label="Password"
              secureTextEntry
              autoCapitalize="none"
              placeholder="password123"
              value={password}
              onChangeText={setPassword}
              editable={!isLoading}
              error={touched ? errors.password : undefined}
            />

            <Text style={styles.helperText}>
              Demo access: demo@company.com / password123
            </Text>

            {authState.error ? (
              <Text style={styles.errorText}>{authState.error}</Text>
            ) : null}

            <Spacer size="lg" />
            <Button
              title="Log In"
              onPress={handleLogin}
              loading={isLoading}
              disabled={isLoading}
            />
          </Card>

          <Spacer size="xl" />
          {isLoading ? <Loader message="Loading demo experience..." /> : null}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;


