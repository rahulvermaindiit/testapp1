import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../theme';

type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type SpacerProps = {
  size?: SpacerSize;
  horizontal?: boolean;
};

const Spacer = ({ size = 'md', horizontal }: SpacerProps) => {
  const { spacing } = useTheme();
  const dimension =
    size === 'xs'
      ? spacing.xs
      : size === 'sm'
      ? spacing.sm
      : size === 'md'
      ? spacing.md
      : size === 'lg'
      ? spacing.lg
      : spacing.xl;

  return (
    <View
      style={{
        width: horizontal ? dimension : undefined,
        height: horizontal ? undefined : dimension,
      }}
    />
  );
};

export default Spacer;

