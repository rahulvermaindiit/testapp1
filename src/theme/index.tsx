import React, { PropsWithChildren, createContext, useContext } from 'react';
import { ThemeTokens, themeTokens } from './tokens';

const ThemeContext = createContext<ThemeTokens>(themeTokens);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeContext.Provider value={themeTokens}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export * from './tokens';

