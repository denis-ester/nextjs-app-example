import { DefaultTheme } from "styled-components"

export const extendDefaultTheme = (pageTheme:{}) => {
  return (theme:DefaultTheme) => {
    return Object.assign({}, theme, {pageTheme})
  }
}
