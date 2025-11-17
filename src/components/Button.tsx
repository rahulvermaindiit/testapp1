import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import { useTheme } from '../theme';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: ButtonVariant;
};

const Button = ({
  title,
  onPress,
  loading,
  disabled,
  variant = 'primary',
}: ButtonProps) => {
  const { colors, spacing, radii } = useTheme();
  const styles = StyleSheet.create({
    base: {
      borderRadius: radii.md,
      paddingVertical: spacing.md,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      opacity: disabled ? 0.6 : 1,
      backgroundColor:
        variant === 'primary'
          ? colors.primary
          : variant === 'secondary'
          ? colors.surfaceAlt
          : 'transparent',
      borderWidth: variant === 'ghost' ? 1 : 0,
      borderColor: variant === 'ghost' ? colors.border : 'transparent',
    },
    text: {
      color:
        variant === 'secondary'
          ? colors.text
          : variant === 'ghost'
          ? colors.textMuted
          : colors.text,
      fontWeight: '600',
      fontSize: 16,
    },
    spinner: {
      marginRight: spacing.sm,
    },
  });

  return (
    <Pressable
      style={styles.base}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator style={styles.spinner} color={colors.text} />
      ) : null}
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;

