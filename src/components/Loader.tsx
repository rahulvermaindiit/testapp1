import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme';

type LoaderProps = {
  message?: string;
  fullScreen?: boolean;
};

const Loader = ({ message = 'Loading...', fullScreen }: LoaderProps) => {
  const { colors, spacing } = useTheme();

  return (
    <View style={[styles.container, fullScreen && styles.fullScreen]}>
      <ActivityIndicator color={colors.primaryLight} size="large" />
      <Text style={[styles.message, { color: colors.textMuted, marginTop: spacing.md }]}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullScreen: {
    flex: 1,
  },
  message: {
    fontSize: 14,
  },
});

export default Loader;

