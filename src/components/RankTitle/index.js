/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

// Styles of the component
// Responsive desktop/mobile
const RankTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    div#content {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        font-size: 32px;
        font-family: 'Comfortaa';
    }

    #divisor {
        width: 100%;
        height: 0;
        border: 0.1px solid ${({ theme }) => theme.colors.whitesecundary};
        opacity: 0;
        border-radius: 50px;
        margin: 0 0 20px 0;
    }

    @media(max-width: 1080px) {
      div#content {
        flex-direction: row;
      }
    }

    @media(max-width: 850px) {
      div#content {
        padding-left: 5%;
        padding-right: 5%;

        h1 {
          font-size: 28px;
        }
      }
    }

    @media(max-width: 660px) {
      div#content {
        margin: 8px 0 0 0;
        h1 {
          font-size: 24px;
        }
      }

      #divisor {
        margin: 0;
      }
    }

    @media(max-width: 550px) {
      div#content {
        h1 {
          font-size: 20px;
        }
      }
    }

    @media(max-width: 400px) {
      div#content {
        h1 {
          font-size: 18px;
        }
      }
    }
`;

// Get rank data from the Rankings page
// Shows the title of the ranking
function RankTitle({ rank }) {
  return (
    <RankTitleWrapper>
      <div id="content">
        <h1>
          Top 25
          {rank === 'XP' && ' XP'}
          {rank === 'ATOMS' && ' Átomos'}
          {rank === 'VOTES' && ' Votos'}
        </h1>
      </div>
      <div id="divisor" />
    </RankTitleWrapper>
  );
}

export default RankTitle;
