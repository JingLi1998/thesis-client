import {} from "styled-components"
import { theme } from "./src/styles/index"

declare module "styled-components" {
  type Theme = typeof theme
  export interface DefaultTheme extends Theme {
    colors: {
      [key: string]: string
    }
  }
}
