import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../theme';

type CardProps = PropsWithChildren<{
  padding?: 'sm' | 'md' | 'lg';
}>;

const Card = ({ children, padding = 'lg' }: CardProps) => {
  const { spacing, radii, colors, shadows } = useTheme();
  const internalStyles = StyleSheet.create({
    card: {
      backgroundColor: colors.surface,
      borderRadius: radii.lg,
      padding:
        padding === 'sm'
          ? spacing.sm
          : padding === 'md'
          ? spacing.md
          : spacing.lg,
      ...shadows.card,
    },
  });

  return <View style={internalStyles.card}>{children}</View>;
};

export default Card;

