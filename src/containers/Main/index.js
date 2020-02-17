import React from 'react';
import styled from 'styled-components';
import Graphics from '../../components/Graphics';
import { fontParams, white, base } from '../../styles/utilities';
import Game from '../../components/Game';
import Bets from '../../components/Bets';
import Table from '../../components/RoundHistory';
import TypographyMain from '../../components/TypographyMain';
import SiteGuide from '../../components/SiteGuide';

const Main = () => (
  <>
    <GraphWrapp>
      <Graphics />
    </GraphWrapp>
    <TypographyWrapp>
      <TypographyMain />
    </TypographyWrapp>
    <Game />
    <SiteGuide numOfGuide={7} triaglePos='bottom'>
      <BeatsList>
        <BeatsListItem>
          <Bets title='All Beats' subTitle='(high)' />
        </BeatsListItem>
        <BeatsListItem>
          <Bets title='Winnerof Round ID 4308' />
        </BeatsListItem>
        <BeatsListItem>
          <Bets title='All Bets' subTitle='(low)' />
        </BeatsListItem>
      </BeatsList>
    </SiteGuide>

    <TableWrapp>
      <TableTitle>Round History</TableTitle>
      <Table />
    </TableWrapp>
  </>
);

export default Main;

const GraphWrapp = styled.div`
  margin-bottom: 20px;
`;
const TypographyWrapp = styled.div`
  margin-bottom: 10px;
`;

const BeatsList = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${base};
  padding: 5px 0;
`;

const BeatsListItem = styled.div`
  width: 32%;
`;

const TableWrapp = styled.div`
  padding: 40px 0;
`;

const TableTitle = styled.h4`
  ${fontParams({ fszi: 14, fwe: 500 })};
  color: ${white};
  margin-bottom: 20px;
`;
