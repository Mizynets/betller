import React from 'react';
import styled from 'styled-components';
import { fontParams, white, base } from '../../styles/utilities';
import SiteGuide from '../SiteGuide';

const TypographyMain = () => (
  <SiteGuide numOfGuide={2} triaglePos='left'>
    <Typography>
      At 12:35, will the Bitcoin price be higher or lower than Base price?
    </Typography>
  </SiteGuide>
);

export default TypographyMain;

const Typography = styled.p`
  ${fontParams({ fsz: 16 })}
  text-align: center;
  color: ${white};
  z-index: 33;
  background: ${base};
`;
