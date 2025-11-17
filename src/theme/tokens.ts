export const colors = {
  background: '#0F172A',
  surface: '#111827',
  surfaceAlt: '#1F2937',
  primary: '#2563EB',
  primaryLight: '#60A5FA',
  secondary: '#7C3AED',
  text: '#F8FAFC',
  textMuted: '#94A3B8',
  border: '#1E293B',
  success: '#22C55E',
  danger: '#EF4444',
  cardShadow: '#000000',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const typography = {
  heading: 28,
  title: 22,
  subtitle: 16,
  body: 14,
  small: 12,
  weightBold: '700' as const,
  weightSemi: '600' as const,
  weightRegular: '400' as const,
};

export const radii = {
  sm: 8,
  md: 12,
  lg: 20,
  round: 999,
};

export const shadows = {
  card: {
    shadowColor: colors.cardShadow,
    shadowOpacity: 0.2,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
  },
};

export const themeTokens = {
  colors,
  spacing,
  typography,
  radii,
  shadows,
};

export type ThemeTokens = typeof themeTokens;

