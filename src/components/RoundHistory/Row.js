import React from 'react';
import styled from 'styled-components';
import { AiOutlineRise, AiOutlineFall } from 'react-icons/ai';
import { FaRegClock } from 'react-icons/fa';
import { IoIosFlag } from 'react-icons/io';
import {
  fontParams,
  green,
  baseLight,
  red,
  yellow,
  base,
  darkBlue,
  white,
} from '../../styles/utilities';

const Row = ({ color, btn }) => (
  <Wrapper color={color}>
    <Left>
      <Col>BTC #135</Col>
      <Col>10:10 - 10:30</Col>
      <Col>10000.450</Col>
    </Left>

    <Right>
      <Col>
        <GrowUpIcon />
        <GreenText>13.45</GreenText>
        <GrowDownIcon />
        <RedText>21.45</RedText>
      </Col>
      <MarginRight>
        <Col>
          <GreenText>13.45</GreenText>
          <RedText>21.45</RedText>
        </Col>
      </MarginRight>

      <WaitingBtn btn={btn}>
        <RegClockIcon />
        <WaitBtnText>Waiting 2:15</WaitBtnText>
      </WaitingBtn>
      <FinishedBtn btn={btn}>
        <FlagIcon />
        <FinishBtnText>Finished</FinishBtnText>
      </FinishedBtn>
    </Right>
  </Wrapper>
);

export default Row;

const Wrapper = styled.div`
  background: ${base};

  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ color }) => (color === 'base' ? `${base}` : `${baseLight}`)};
  height: 60px;
  margin-bottom: 15px;
  padding: 18px 30px 18px 20px;
  &:last-child {
    margin-bottom: 15px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  /* flex-basis: 33px; */
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  /* flex-basis: calc(100% - 330px); */
  height: 100%;
`;

const Col = styled.div`
  ${fontParams({ fszi: 14 })}
  display: flex;
  align-items: center;
  color: white;
  margin-right: 35px;
  line-height: 24px;
  &:last-child {
    margin-right: 0px;
  }
`;

const GreenText = styled.div`
  color: ${green};
  margin-right: 5px;
`;

const RedText = styled.div`
  color: ${red};
`;

const GrowUpIcon = styled(AiOutlineRise)`
  path {
    color: ${green};
  }
  margin-right: 5px;
`;

const MarginRight = styled.div`
  margin-right: 64px;
`;

const WaitingBtn = styled.button`
  width: 147px;
  height: 32px;
  outline: none;
  border: none;
  background: ${yellow};
  border-radius: 3px;
  padding: 6px 20px;
  display: ${({ btn }) => (btn === 'wait' ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

const FinishedBtn = styled(WaitingBtn)`
  background: ${green};
  color: ${white};
  display: ${({ btn }) => (btn === 'finish' ? 'flex' : 'none')};
`;

const FlagIcon = styled(IoIosFlag)`
  color: ${white};
  margin-right: 5px;
  font-size: 20px;
`;
const WaitBtnText = styled.span`
  ${fontParams({ fszi: 14, fwe: 400 })};
  color: ${darkBlue};
`;

const FinishBtnText = styled.span`
  ${fontParams({ fszi: 14, fwe: 400 })};
  color: ${white};
`;

const RegClockIcon = styled(FaRegClock)`
  color: ${darkBlue};
  font-size: 20px;
  margin-right: 5px;
`;

const GrowDownIcon = styled(AiOutlineFall)`
  path {
    color: ${red};
  }
  margin-right: 5px;
`;
