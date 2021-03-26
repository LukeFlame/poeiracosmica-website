/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

// Header background style on pages
const PagesHeaderTop = styled.div`
  width: 100%;
  height: 76px;
  background-color: ${({ theme }) => theme.colors.blacksecundary};
  z-index: 8;
  filter: drop-shadow(0px 1px 16px rgba(2, 2, 14, 0.25));
  padding-left: 5%;
`;

// Page header style (title and background)
const PagesHeaderWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: left;
  flex-direction: column;

  background-image: url('/Background.png');
  background-position: center 20%;
  background-repeat: no-repeat;
  background-size: cover;

  div#title {
    width: 88%;
    max-width: 1170px;
    height: 210px;
  }

  h1 {
    display: flex;
    align-items: center;
    font-family: 'Comfortaa';
    font-size: 64px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.whitesecundary};

    -webkit-animation: 0s ease-out 0s 1 wait, 1.2s ease-out 0s 1 appear;
       -moz-animation: 0s ease-out 0s 1 wait, 1.2s ease-out 0s 1 appear;
        -ms-animation: 0s ease-out 0s 1 wait, 1.2s ease-out 0s 1 appear;
         -o-animation: 0s ease-out 0s 1 wait, 1.2s ease-out 0s 1 appear;
          animation: 0s ease-out 0s 1 wait, 1.2s ease-out 0s 1 appear;
  }

  @media(max-width: 1024px) {
    div#title {
      height: 190px;
    }
    h1 {
      font-size: 56px;
    }
  }

  @media(max-width: 860px) {
    div#title {
      height: 160px;
    }
    h1 {
      font-size: 48px;
    }
  }

  @media(max-width: 560px) {
    div#title {
      height: 110px;
    }
    h1 {
      font-size: 36px;
    }
  }
`;

function PagesHeader({ children }) {
  return (
    <>
      <PagesHeaderTop />
      <PagesHeaderWrapper>
        <div id="title">
          <h1>
            {children}
          </h1>
        </div>
      </PagesHeaderWrapper>
    </>
  );
}

export default PagesHeader;
