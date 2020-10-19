const customBreakpoint = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`

export const breakpoints = {
  custom: customBreakpoint,
  sm: customBreakpoint(640),
  md: customBreakpoint(768),
  lg: customBreakpoint(1024),
  xl: customBreakpoint(1440),
}
