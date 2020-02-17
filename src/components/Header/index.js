import React from 'react';
import styled from 'styled-components';
import { base } from '../../styles/utilities';

const Header = () => <Wrapper> </Wrapper>;

export default Header;

const Wrapper = styled.div`
  padding: 10px 10px 10px 60px;
  height: 60px;
  display: flex;
  align-items: center;
  background: ${base};
  border-bottom: 1px solid red;
`;
