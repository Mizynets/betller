import React from 'react';
import styled from 'styled-components';

const Backdrop = ({ show, clicked }) => {
  return show ? <Wrapper onClick={clicked}> </Wrapper> : null;
};

export default Backdrop;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
  top: 0;
  left: 0;
`;
