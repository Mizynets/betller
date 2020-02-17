/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-confusing-arrow */
import React from 'react';
import styled from 'styled-components';
import { FaRegClock } from 'react-icons/fa';
import { MdInfoOutline } from 'react-icons/md';

import {
  green,
  black,
  fontParams,
  red,
  yellow,
  white,
  base,
  dWhite,
  baseLight,
} from '../../styles/utilities';
import { useRootContext } from '../../context';
import Tooltip from '../Tooltip';
import SiteGuide from '../SiteGuide';

// eslint-disable-next-line arrow-body-style
const Game = () => {
  const {
    state: { activeComponent },
  } = useRootContext();

  const active3 = (
    <FlexW60>
      <HighBtn>high</HighBtn>
      <SiteGuide numOfGuide={3} triaglePos='left'>
        <BtcInput
          type='number'
          defaultValue='0.0002 BTC'
          min='0.0001'
          max='1.1000'
          step='0.0001'
          placeholder='0.0002 BTC'
        />
      </SiteGuide>
      <LowBtn>low</LowBtn>
    </FlexW60>
  );

  const active4 = (
    <SiteGuide numOfGuide={4} triaglePos='bottom'>
      <div style={{ width: '100%' }}>
        <HighBtn>high</HighBtn>
        <LowBtn>low</LowBtn>
      </div>
    </SiteGuide>
  );

  const btcAction = (
    <Flex>
      <HighBtn>high</HighBtn>
      <BtcInput
        type='number'
        defaultValue='0.0002 BTC'
        min='0.0001'
        max='1.1000'
        step='0.0001'
        placeholder='0.0002 BTC'
      />
      <LowBtn>low</LowBtn>
    </Flex>
  );

  const btcActiveAction = activeComponent[3].active
    ? active3
    : activeComponent[4].active
    ? active4
    : btcAction;

  const basePlaceBet = (
    <>
      <FlexW20>
        <FlexColumn textAli='left'>
          <SiteGuide numOfGuide={11} triaglePos='left'>
            <div style={{ width: '100%', textAlign: 'left' }}>
              <Label>Base price at 10:09</Label>
              <PriceAndTime>8824.47</PriceAndTime>
            </div>
          </SiteGuide>
        </FlexColumn>
      </FlexW20>
      <FlexW60>
        <FlexColumn textAli='center'>
          <Label>Expected payout</Label>
          <ControlBtnGreen>2.55X</ControlBtnGreen>
        </FlexColumn>

        <BetBtn>place bet</BetBtn>

        <FlexColumn textAli='center'>
          <Label>Expected payout</Label>
          <ControlBtnRed>1.9X</ControlBtnRed>
        </FlexColumn>
      </FlexW60>
      <FlexW20>
        <FlexColumn textAli='right'>
          <SiteGuide numOfGuide={10} triaglePos='right'>
            <div style={{ width: '100%', textAlign: 'right' }}>
              <Label>Time left</Label>
              <PriceAndTime>00:36</PriceAndTime>
            </div>
          </SiteGuide>
        </FlexColumn>
      </FlexW20>
    </>
  );

  const active5 = (
    <>
      <FlexW20>
        <FlexColumn textAli='left'>
          <Label>Base price at 10:09</Label>
          <PriceAndTime>8824.47</PriceAndTime>
        </FlexColumn>
      </FlexW20>
      <SiteGuide numOfGuide={5} triaglePos='bottom'>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ marginRight: '160px' }}>
            <FlexColumn textAli='center'>
              <Label>Expected payout</Label>
              <ControlBtnGreen>2.55X</ControlBtnGreen>
            </FlexColumn>
          </div>

          <div>
            <FlexColumn textAli='center'>
              <Label>Expected payout</Label>
              <ControlBtnRed>1.9X</ControlBtnRed>
            </FlexColumn>
          </div>
        </div>
      </SiteGuide>

      <FlexW20>
        <FlexColumn textAli='right'>
          <Label>Time left</Label>
          <PriceAndTime>00:36</PriceAndTime>
        </FlexColumn>
      </FlexW20>
    </>
  );

  const active6 = (
    <>
      <FlexW20>
        <FlexColumn textAli='left'>
          <Label>Base price at 10:09</Label>
          <PriceAndTime>8824.47</PriceAndTime>
        </FlexColumn>
      </FlexW20>
      <SiteGuide numOfGuide={6} triaglePos='bottom'>
        <div style={{ width: '100%' }}>
          <BetBtn>place bet</BetBtn>
        </div>
      </SiteGuide>

      <FlexW20>
        <FlexColumn textAli='right'>
          <Label>Time left</Label>
          <PriceAndTime>00:36</PriceAndTime>
        </FlexColumn>
      </FlexW20>
    </>
  );

  const placeBet = activeComponent[5].active
    ? active5
    : activeComponent[6].active
    ? active6
    : basePlaceBet;
  return (
    <Wrapper>
      <Top>
        <Title>Game #135</Title>
        {btcActiveAction}
        <Time active={activeComponent[1].active}>
          <TooltipWrapper active={activeComponent[1].active}>
            <Tooltip triaglePos='right' />
          </TooltipWrapper>
          <RegClock />
          <TimeValue>10:10 - 10:20</TimeValue>
          <InfoOutline />
        </Time>
      </Top>
      <LineProgress> </LineProgress>
      <Bottom>{placeBet}</Bottom>
    </Wrapper>
  );
};

export default Game;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${({ textAli }) => textAli};
`;

const FlexW20 = styled.div`
  width: 20%;
`;

const FlexW60 = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const RegClock = styled(FaRegClock)`
  color: ${dWhite};
  font-size: 17px;
`;

const InfoOutline = styled(MdInfoOutline)`
  color: ${green};
  font-size: 20px;
`;

const Flex = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: flex-end;
`;

const Wrapper = styled.div`
  padding: 0 5px;
  background: ${baseLight};
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0px 5px 0px;
  justify-content: space-between;
`;

const Title = styled.h5`
  ${fontParams({ fszi: 16, fwe: 500 })}
  color: ${white};
  text-align: left;
  width: 20%;

`;

const BtcInput = styled.input`
  width: 160px;
  height: 32px;
  border-radius: 3px;
  border: 1px solid '#3F455D';
  background: ${base};
  outline: none;
  border: none;
  text-align: center;
  padding-right: 20px;
  color: ${white};
  ::placeholder {
    color: ${white};
  }
`;
const Time = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: flex-end;
  box-shadow: ${({ active }) =>
    active ? '0px 0px 0px 15px rgba(37,42,66,1)' : 'none'};
  box-sizing: content-box;
  border-radius: ${({ active }) => (active ? '5px' : 'none')};
  z-index: ${({ active }) => (active ? '31' : '2')};
  position: relative;
`;

const TooltipWrapper = styled.div`
  position: absolute;
  display: ${({ active }) => (active === true ? 'block' : 'none')};
  z-index: 31;
  top: 50%;
  left: -480px;
  transform: translateY(-50%);
`;

const TimeValue = styled.span`
  ${fontParams({ fszi: 14 })};
  color: ${dWhite};
  padding: 15px 0;
  margin: 0 5px;
`;
const LineProgress = styled.div`
  height: 2px;
  background: linear-gradient(90deg, ${green} 35%, ${black} 0);
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 5px 0px 5px 0px;
`;

const Label = styled.span`
  ${fontParams({ fszi: 12 })};
  line-height: 16px;
  color: white;
  margin-bottom: 2px;
  width: 100%;
`;

const PriceAndTime = styled.p`
  ${fontParams({ fszi: 14 })};
  color: white;
  width: 100%;
`;

const ControlBtn = styled.button`
  ${fontParams({ fszi: 12 })};
  color: ${white};
  line-height: 24px;
  width: 100px;
  height: 24px;
  border-radius: 4px;
  text-align: center;
`;

const ControlBtnGreen = styled(ControlBtn)`
  border: 1px solid ${green};
`;
const ControlBtnRed = styled(ControlBtn)`
  border: 1px solid ${red};
`;

const BetBtn = styled.button`
  ${fontParams({ fszi: 16, fwe: 500 })};
  width: 160px;
  height: 64px;
  border: 1px solid ${yellow};
  box-shadow: 0px 0px 10px rgba(255, 188, 15, 0.35);
  border-radius: 3px;
  color: ${yellow};
  text-transform: uppercase;
  text-align: center;
  margin: 0 20px;
`;

const HighBtn = styled.button`
  ${fontParams({ fszi: 14, fwe: 500 })};
  line-height: 24px;
  width: 100px;
  height: 32px;
  background: ${green};
  border: 1px solid ${green};
  border-radius: 4px;
  color: ${white};
  text-transform: uppercase;
  text-align: center;
  margin-right: 20px;
`;

const LowBtn = styled(HighBtn)`
  border: 1px solid ${red};
  background: ${base};
  color: ${red};
  margin-left: 20px;
  margin-right: 0;
`;
