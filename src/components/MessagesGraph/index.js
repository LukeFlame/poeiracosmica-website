/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Chart } from 'react-google-charts';

// Styles of the component
// Responsive desktop/mobile
const GraphArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 103%;
  padding: 15px 0px 0px 30px;

  .header {
      position: absolute;
      top: 15px;
      z-index: 10;
      width: 85%;
      display: flex;
      margin: 0 6.5% 0 0;
      justify-content: space-between;
      align-items: center;

      .title {
        margin: 0;
        font-family: 'Sulphur Point', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.whitesecundary};
      }

      .legend {
          display: flex;
          width: 20%;

          .color {
              width: 15px;
              height: 15px;
              min-width: 15px;
              background-color: ${({ theme }) => theme.colors.primary};
          }

          .text {
            margin: 0 0 0 10px;
            font-family: 'Sulphur Point', sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: ${({ theme }) => theme.colors.whitesecundary};
          }
      }
  }

  @media(max-width: 550px) {
    width: 105%;
    padding: 15px 0px 0px 5px;

    .header {
      .title {
        font-size: 16px;
      }

      .legend {
        display: none;
      }
    }
  }
`;

// See google graphics documentation here: https://developers.google.com/chart
// Receives message data from the user profile page
function MessagesGraph({ msgs }) {
  // Formats the date for better viewing
  function formatDate(template, date) {
    const specs = 'YYYY:MM:DD:HH:mm:ss'.split(':');
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);
    return date.toISOString().split(/[-:.TZ]/).reduce((temp, item, i) => temp.split(specs[i]).join(item), template);
  }

  return (
    <GraphArea>
      <div className="header">
        <h1 className="title">Atividade no Bate Papo</h1>
        <div className="legend">
          <div className="color" />
          <h2 className="text">Mensagens</h2>
        </div>
      </div>
      <Chart
        width="100%"
        height="100%"
        chartType="ColumnChart"
        loader={<div>Carregando gráfico</div>}
        data={[
          ['Dia', 'Mensagens', { role: 'style' }],
          [formatDate('DD/MM', Date.now() - 86400000 * 6 - 10800000), msgs.day7, '#265CBC'],
          [formatDate('DD/MM', Date.now() - 86400000 * 5 - 10800000), msgs.day6, '#265CBC'],
          [formatDate('DD/MM', Date.now() - 86400000 * 4 - 10800000), msgs.day5, '#265CBC'],
          [formatDate('DD/MM', Date.now() - 86400000 * 3 - 10800000), msgs.day4, '#265CBC'],
          [formatDate('DD/MM', Date.now() - 86400000 * 2 - 10800000), msgs.day3, '#265CBC'],
          [formatDate('DD/MM', Date.now() - 86400000 * 1 - 10800000), msgs.day2, '#265CBC'],
          [formatDate('DD/MM', Date.now() - 10800000), msgs.day1, '#265CBC'],
        ]}
        options={{
          fontName: 'Lato',
          backgroundColor: '#232E42',
          chartArea: { width: '85%', height: '65%' },
          hAxis: {
            minValue: 0,
            baselineColor: '#0D1526',
            textStyle: {
              color: '#98A6B9',
              fontName: 'Lato',
              fontSize: 10,
              bold: false,
              italic: false,
            },
          },
          vAxis: {
            minValue: 10,
            baselineColor: '#0D1526',
            gridlines: { color: '#0D1526', minSpacing: 50 },
            textStyle: {
              color: '#98A6B9',
              fontName: 'Lato',
              fontSize: 10,
              bold: false,
              italic: false,
            },
          },
          fontSize: 10,
          titleTextStyle: {
            color: '#D2D2D2',
            fontName: 'Sulphur Point',
            fontSize: 20,
            bold: false,
            italic: false,
          },
          legend: { position: 'none' },
          tooltip: {
            textStyle: {
              color: '#0D1526',
              fontName: 'Lato',
              fontSize: 10,
              bold: true,
              italic: false,
            },
          },
          trendlines: {
            1: {
              type: 'linear',
              color: 'red',
              lineWidth: 3,
              opacity: 0.3,
              showR2: true,
              visibleInLegend: true,
            },
          },
        }}
      />
    </GraphArea>
  );
}

export default MessagesGraph;
