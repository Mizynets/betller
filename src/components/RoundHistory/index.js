import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import SiteGuide from '../SiteGuide';

const Table = () => (
  <Wrapper>
    <SiteGuide numOfGuide={8} triaglePos='bottom'>
      <Row btn='wait' />
    </SiteGuide>
    <Row btn='finish' color='base' />
    <Row btn='wait' />
    <SiteGuide numOfGuide={9} triaglePos='bottom'>
      <Row btn='finish' color='base' />
    </SiteGuide>
    <Row btn='wait' />
  </Wrapper>
);

export default Table;

const Wrapper = styled.div``;
