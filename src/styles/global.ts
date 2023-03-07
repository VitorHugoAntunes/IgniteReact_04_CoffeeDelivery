import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${(props) => props.theme.colors['base-background']};
    }

    body {
      padding: 0 10rem;
    }
`
