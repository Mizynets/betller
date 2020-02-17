import styled from 'styled-components';
import { base } from './Colors';

export const GuideWrapper = styled.div`
  background: ${base};
  box-sizing: content-box;
  border-radius: ${({ active }) => (active ? '5px' : 'none')};
  box-shadow: ${({ active }) =>
    active ? '0px 0px 0px 20px rgba(37,42,66,1)' : 'none'};
  position: relative;
  z-index: ${({ active }) => (active ? '31' : '2')};
`;
