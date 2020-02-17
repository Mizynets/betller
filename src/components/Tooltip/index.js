/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styled from 'styled-components';
import uid from 'uid';
import { useRootContext } from '../../context';
import t from '../../context/actionsTypes';
import {
  base,
  tWhite,
  fontParams,
  gray,
  green,
  darkBlue,
  dWhite,
  yellow,
} from '../../styles/utilities';

const Tooltip = ({
  title = 'time zone',
  description = 'Select your time zone here. It is important that you have your timezone correctly!',
  triaglePos,
}) => {
  const {
    state: { activeComponent },
    dispatch,
  } = useRootContext();

  const handleNext = () => {
    const cloneActiveArr = [...activeComponent];
    const indx = cloneActiveArr.findIndex((el) => el.active);
    cloneActiveArr[indx].active = false;
    cloneActiveArr[(indx + 1) % cloneActiveArr.length].active = true;
    dispatch({
      type: t.NEXT,
      payload: cloneActiveArr,
    });
  };

  const handlePrev = () => {
    const cloneActiveArr = [...activeComponent];
    const indx = cloneActiveArr.findIndex((el) => el.active);
    cloneActiveArr[indx].active = false;
    cloneActiveArr[
      (indx + cloneActiveArr.length - 1) % cloneActiveArr.length
    ].active = true;
    dispatch({
      type: t.PREV,
      payload: cloneActiveArr,
    });

    // if (indx !== 0) {
    //   cloneActiveArr[indx].active = false;
    //   cloneActiveArr[indx - 1].active = true;
    //   dispatch({
    //     type: t.PREV,
    //     payload: cloneActiveArr,
    //   });
    // }

    // cloneActiveArr[indx].active = false;
    // // cloneActiveArr[lastInd - 1].active = true;
    // dispatch({
    //   type: t.PREV,
    //   payload: cloneActiveArr,
    // });
  };

  const handleSkip = () => {
    const cloneActiveArr = [...activeComponent];
    const indx = cloneActiveArr.findIndex((el) => el.active);
    cloneActiveArr[indx].active = false;
    dispatch({
      type: t.SKIP,
      payload: false,
    });
  };

  return (
    <Div>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <RadioList>
        {activeComponent.map(({ active }) => (
          <RadioListItem key={uid()} active={active}>
            {' '}
          </RadioListItem>
        ))}
      </RadioList>
      <Flex>
        <SkipBtn onClick={handleSkip}>Skip</SkipBtn>
        <div>
          <PrevBtn onClick={handlePrev}>prev</PrevBtn>
          <NextBtn onClick={handleNext}>next</NextBtn>
        </div>
      </Flex>
      <TriagleRight triaglePos={triaglePos}> </TriagleRight>
      <TriagleTop triaglePos={triaglePos}> </TriagleTop>
      <TriagleLeft triaglePos={triaglePos}> </TriagleLeft>
      <TriagleBottom triaglePos={triaglePos}> </TriagleBottom>
    </Div>
  );
};

export default Tooltip;

const Div = styled.div`
  background: ${base};
  border-radius: 5px;
  color: ${tWhite};
  width: 400px;
  max-height: 240px;
  padding: 20px;
  position: relative;
`;

const Title = styled.h4`
  ${fontParams({ fszi: 14, fwe: 500 })};
  text-transform: uppercase;
  line-height: 20px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  ${fontParams({ fszi: 12 })};
  margin-bottom: 20px;
  line-height: 150%;
`;

const RadioList = styled.ul`
  display: flex;
  margin-bottom: 38px;
`;

const RadioListItem = styled.div`
  width: 8px;
  height: 8px;
  margin-right: 10px;
  border-radius: 50%;
  background: ${({ active }) => (active ? `${green}` : `${gray}`)};
  &:last-child {
    margin-right: 0;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ControllBtn = styled.button`
  outline: 'none';
  border-radius: 4px;
  color: ${darkBlue};
  height: 40px;
  width: 77px;
  text-align: center;
`;

const SkipBtn = styled(ControllBtn)`
  background: ${gray};
  color: ${dWhite};
  width: 69px;
`;

const NextBtn = styled(ControllBtn)`
  background: ${yellow};
  text-transform: uppercase;
`;

const PrevBtn = styled(ControllBtn)`
  background: ${dWhite};
  text-transform: uppercase;
  margin-right: 10px;
`;

const Triagle = styled.div`
  display: inline-block;
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
`;

const TriagleTop = styled(Triagle)`
  display: ${({ triaglePos }) =>
    triaglePos === 'top' ? 'inline-block' : 'none'};
  top: -15px;
  right: 50%;
  transform: translateX(50%);
  border-width: 0 10px 20px 10px;
  border-color: transparent transparent ${base} transparent;
`;

const TriagleRight = styled(Triagle)`
  display: ${({ triaglePos }) =>
    triaglePos === 'right' ? 'inline-block' : 'none'};
  top: 50%;
  right: -15px;
  transform: translateY(-50%);
  border-width: 10px 0 10px 20px;
  border-color: transparent transparent transparent ${base};
`;

const TriagleBottom = styled(Triagle)`
  display: ${({ triaglePos }) =>
    triaglePos === 'bottom' ? 'inline-block' : 'none'};
  bottom: -15px;
  right: 50%;
  transform: translateX(50%);
  border-width: 20px 10px 0 10px;
  border-color: ${base} transparent transparent transparent;
`;

const TriagleLeft = styled(Triagle)`
  display: ${({ triaglePos }) =>
    triaglePos === 'left' ? 'inline-block' : 'none'};
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  border-width: 10px 20px 10px 0;
  border-color: transparent ${base} transparent transparent;
`;
