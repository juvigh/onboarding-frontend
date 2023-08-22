const breakpoints = {
  small: '425px',
  medium: '768px',
  large: '1024px',
  desktop: '1200px',
};

export const device = {
  deviceSmall: `(min-width: ${breakpoints.small})`,
  deviceLarge: `(min-width: ${breakpoints.medium}) and (max-width: ${breakpoints.large})`,
  deviceDesktop: `(min-width: ${breakpoints.desktop})`,
};
