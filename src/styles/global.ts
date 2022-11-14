import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    // ussing theme
    background:  ${props => props.theme.colors.background};
    font-size: 14px;
    color:  ${props => props.theme.colors.background};
    font-family: sans-serif;
  }
`;