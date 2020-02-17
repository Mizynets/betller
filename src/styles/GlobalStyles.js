import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import { base } from './utilities';

export function fontFace(
  name,
  src,
  fontWeight = 'normal',
  fontStyle = 'normal',
) {
  /* eslint-disable */
  return `
      @font-face{
          font-family: "${name}";
          src: url(${require('../assets/fonts/Roboto/' +
            src)}) format("truetype"),
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
}

const GlobalStyle = createGlobalStyle`
  ${fontFace('Roboto', 'Roboto-Regular.ttf', 400, 'normal')};
  ${fontFace('Roboto', 'Roboto-Medium.ttf', 500, 'normal')};
  ${reset}; 
    body {
        font-family: 'Roboto';
        background: ${base}
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    } 
`;

export default GlobalStyle;
