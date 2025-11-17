import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { useTheme } from '../theme';
import Spacer from './Spacer';

type InputProps = TextInputProps & {
  label?: string;
  error?: string | null;
};

const Input = ({ label, error, style, ...rest }: InputProps) => {
  const { colors, spacing, radii, typography } = useTheme();
  const styles = StyleSheet.create({
    container: {
      marginBottom: spacing.md,
    },
    label: {
      color: colors.textMuted,
      fontWeight: typography.weightSemi,
      marginBottom: spacing.xs,
    },
    field: {
      borderRadius: radii.md,
      backgroundColor: colors.surfaceAlt,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.md,
      color: colors.text,
      borderWidth: 1,
      borderColor: error ? colors.danger : 'transparent',
    },
    error: {
      color: colors.danger,
      marginTop: spacing.xs,
      fontSize: typography.small,
    },
  });

  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        placeholderTextColor={colors.textMuted}
        style={[styles.field, style]}
        {...rest}
      />
      {error ? (
        <>
          <Spacer size="xs" />
          <Text style={styles.error}>{error}</Text>
        </>
      ) : null}
    </View>
  );
};

export default Input;

