import React from 'react';
import styled from 'styled-components';
import Backdrop from '../common/Backdrop';
import { useRootContext } from '../../context';

const Layout = ({ children }) => {
  const { state, dispatch } = useRootContext();
  return (
    <Wrapper>
      <Backdrop show={state.isShow}> </Backdrop>
      {children}
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div``;
