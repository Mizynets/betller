/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import moment from 'moment';

import {
  graphLine,
  graphPointer,
  white,
  base,
  dWhite,
  fontParams,
} from '../../styles/utilities';
import SiteGuide from '../SiteGuide';

const Graphics = () => {
  const state = {
    labels: [
      moment('10:10', 'HH:mm'),
      moment('10:15', 'HH:mm'),
      moment('10:20', 'HH:mm'),
      moment('10:25', 'HH:mm'),
      moment('10:30', 'HH:mm'),
      moment('10:35', 'HH:mm'),
      moment('10:40', 'HH:mm'),
      moment('10:45', 'HH:mm'),
      moment('10:50', 'HH:mm'),
      moment('10:55', 'HH:mm'),
      moment('11:00', 'HH:mm'),
      moment('11:05', 'HH:mm'),
      moment('11:10', 'HH:mm'),
      moment('11:15', 'HH:mm'),
      moment('11:20', 'HH:mm'),
    ],
    backgroundColor: `${base}`,
    datasets: [
      {
        // label: 'Bitcoin Rate to USD',
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: `${graphLine}`,
        borderWidth: 4,
        pointBorderColor: `${graphLine}`,
        pointBackgroundColor: `${graphLine}`,
        pointBorderWidth: 0,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: `${graphPointer}`,
        pointHoverBorderColor: `${white}`,
        pointHoverBorderWidth: 8,
        pointRadius: 1,
        data: [
          12650,
          12080,
          12250,
          12000,
          12550,
          12350,
          11100,
          11200,
          12290,
          11680,
          11700,
          11285,
          11690,
          11685,
          11850,
        ],
      },
    ],
  };

  const options = {
    title: {
      display: false,
      text: 'Bitcoin Rate to USD',
      fontSize: 20,
      fontColor: `${dWhite}`,
      fontFamily: 'Roboto',
    },
    legend: {
      display: false,
      position: 'right',
      labels: {
        fontColor: `${dWhite}`,
      },
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'minute',
            displayFormats: {
              minute: 'h:mm',
            },
            unitStepSize: 5,
          },
          ticks: {
            min: moment('10:10', 'HH:mm'),
            max: moment('11:20', 'HH:mm'),
            fontColor: `${dWhite}`,
            fontSize: 12,
            fontFamily: 'Roboto',
          },
          gridLines: {
            display: true,
            drawBorder: true,
            color: 'rgb(203,209,230, .1)',
            opacity: 0.1,
            zeroLineColor: 'rgb(203,209,230, .1)',
          },
        },
      ],
      yAxes: [
        {
          display: true,
          position: 'right',
          ticks: {
            callback: (value) => Number(value).toFixed(2),
            fontColor: `${dWhite}`,
            fontSize: 12,
            fontFamily: 'Roboto',
            stepSize: 510,
            min: 10980,
            max: 13100,
          },
          gridLines: {
            display: true,
            drawBorder: true,
            color: 'rgb(203,209,230, .1)',
            opacity: 0.1,
            zeroLineColor: 'rgb(203,209,230, .1)',
          },
        },
      ],
    },
  };

  return (
    <>
      <SiteGuide numOfGuide={0} triaglePos='top'>
        <Graphic>
          <Title>
            Bitcoin Rate <Span>to USD</Span>{' '}
          </Title>
          <Line data={state} options={options} />
        </Graphic>
      </SiteGuide>
    </>
  );
};

export default Graphics;

const Graphic = styled.div`
  background: ${base};
  height: auto;
`;

const Title = styled.h5`
  ${fontParams({ fszi: 16, fwe: 500 })}
  line-height: 24px;
  color: ${white};
  padding: 20px 20px;
`;

const Span = styled.span`
  ${fontParams({ fszi: 12 })}
  line-height: 16px;
  color: ${dWhite};
`;
