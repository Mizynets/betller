import { css } from 'styled-components';

export const fontParams = ({ fszi = 16, fwe = 300 } = {}) => css`
  font-family: Roboto;
  font-style: normal;
  font-weight: ${fwe};
  font-size: ${fszi + 'px'};
`;
