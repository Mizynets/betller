import React from 'react';
import styled from 'styled-components';
import uid from 'uid';
import { AiOutlineRise, AiOutlineFall } from 'react-icons/ai';
import {
  base,
  white,
  fontParams,
  dWhite,
  baseLight,
  red,
  green,
  scrollMove,
  scrollStatic,
} from '../../styles/utilities';

const Bets = ({ title, subTitle }) => {
  const names = [
    {
      name: 'brownbear646',
      value: 0.05,
    },
    {
      name: 'whiteswan331',
      value: 1.05,
    },
    {
      name: 'beautifulbutterfly101',
      value: 2.05,
    },
    {
      name: 'redkoala509',
      value: 0.25,
    },
    {
      name: 'ticklishostrich764',
      value: 0.15,
    },
    {
      name: 'redladybug753',
      value: 0.1,
    },
    {
      name: 'bigbear444',
      value: 1.15,
    },
    {
      name: 'crazyfish228',
      value: 2.05,
    },
  ];
  return (
    <Wrapper>
      <Title>
        {title} <SubTitle>{subTitle}</SubTitle>
      </Title>
      <List>
        {names.map((person, indx) => {
          const { name, value } = person;
          if (indx % 2 === 0) {
            return (
              <ListItem key={uid()}>
                <Span>{name}</Span>
                <ListItemValue color='red'>
                  <span>{value}</span>
                  <OutlineFall />
                </ListItemValue>
              </ListItem>
            );
          }
          return (
            <ListItem bg='base' key={uid()}>
              <Span>{name}</Span>
              <ListItemValue>
                <span>{value}</span>
                <OutlineRise />
              </ListItemValue>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
};

export default Bets;

const OutlineRise = styled(AiOutlineRise)`
  font-size: 20px;
  margin-left: 5px;
`;

const OutlineFall = styled(AiOutlineFall)`
  font-size: 20px;
  margin-left: 5px;
`;

const Wrapper = styled.div`
  background: ${base};
`;

const Title = styled.h5`
  ${fontParams({ fszi: 16 })};
  color: ${white};
  padding: 10px 20px;
`;

const SubTitle = styled.span`
  ${fontParams({ fszi: 12 })};
  color: ${dWhite};
  text-transform: uppercase;
`;

const List = styled.ul`
  height: 200px;
  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${scrollStatic};
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: ${scrollStatic};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${scrollMove};
  }
`;

const ListItem = styled.li`
  padding: 8px 20px;
  color: ${white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ bg }) => (bg === 'base' ? `${base}` : `${baseLight}`)};
`;

const Span = styled.span`
  ${fontParams({ fszi: 14 })}
`;

const ListItemValue = styled.span`
  ${fontParams({ fszi: 14, fwe: 500 })};
  color: ${({ color }) => (color === 'red' ? `${red}` : `${green}`)};
  display: flex;
  align-items: center;
`;
