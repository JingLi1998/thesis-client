import { css } from "styled-components"
import { breakpoints } from "./index"

export const minimumHeight = css`
  min-height: calc(100vh - 4rem);

  ${breakpoints.md} {
    min-height: calc(100vh - 8.5rem);
  }
`

export const minimumTopMargin = css`
  margin-top: 4rem;

  ${breakpoints.md} {
    margin-top: 8.5rem;
  }
`
