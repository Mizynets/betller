/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styled from 'styled-components';
import Tooltip from '../Tooltip';
import { useRootContext } from '../../context';

const SiteGuide = ({
  children,
  title,
  description,
  triaglePos,
  numOfGuide = 0,
}) => {
  const {
    state: { activeComponent },
  } = useRootContext();

  const tooltipPosition = (position, active) => {
    switch (position) {
      case 'top': {
        return (
          <TooltipWrapperBottom active={active}>
            <Tooltip
              title={title}
              description={description}
              triaglePos={triaglePos}
            />
          </TooltipWrapperBottom>
        );
      }
      case 'right': {
        return (
          <TooltipWrapperLeft active={active}>
            <Tooltip
              title={title}
              description={description}
              triaglePos={triaglePos}
            />
          </TooltipWrapperLeft>
        );
      }
      case 'left': {
        return (
          <TooltipWrapperRight active={active}>
            <Tooltip
              title={title}
              description={description}
              triaglePos={triaglePos}
            />
          </TooltipWrapperRight>
        );
      }
      case 'bottom': {
        return (
          <TooltipWrapperTop active={active}>
            <Tooltip
              title={title}
              description={description}
              triaglePos={triaglePos}
            />
          </TooltipWrapperTop>
        );
      }
      default: {
        return (
          <TooltipWrapperTop active={active}>
            <Tooltip
              title={title}
              description={description}
              triaglePos={triaglePos}
            />
          </TooltipWrapperTop>
        );
      }
    }
  };

  return (
    <GuideWrapper active={activeComponent[numOfGuide].active}>
      {tooltipPosition(triaglePos, activeComponent[numOfGuide].active)}
      {children}
    </GuideWrapper>
  );
};

export default SiteGuide;

const GuideWrapper = styled.div`
  background: inherit;
  /* text-align: center; */
  width: inherit;
  box-sizing: content-box;
  border-radius: ${({ active }) => (active ? '1px' : 'none')};
  box-shadow: ${({ active }) =>
    active ? '0px 0px 0px 15px rgba(37,42,66,1)' : 'none'};
  position: relative;
  z-index: ${({ active }) => (active ? '31' : '2')};
`;

const TooltipWrapper = styled.div`
  position: absolute;
  display: ${({ active }) => (active === true ? 'block' : 'none')};
  z-index: 31;
`;

const TooltipWrapperBottom = styled(TooltipWrapper)`
  bottom: -260px;
  right: 0;
`;

const TooltipWrapperTop = styled(TooltipWrapper)`
  top: -260px;
  right: 50%;
  transform: translateX(50%);
`;

const TooltipWrapperRight = styled(TooltipWrapper)`
  top: 50%;
  right: -480px;
  transform: translateY(-50%);
`;

const TooltipWrapperLeft = styled(TooltipWrapper)`
  top: 50%;
  left: -480px;
  transform: translateY(-50%);
`;
