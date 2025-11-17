import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from '../redux/hooks';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import Loader from '../components/Loader';
import { useTheme } from '../theme';

const RootNavigator = () => {
  const { colors } = useTheme();
  const { token, initialized } = useAppSelector((state) => state.auth);

  if (!initialized) {
    return (
      <Loader
        fullScreen
        message="Preparing your experience..."
      />
    );
  }

  const navigationTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: colors.primary,
      background: colors.background,
      card: colors.surface,
      text: colors.text,
      border: colors.border,
      notification: colors.primaryLight,
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      {token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;

