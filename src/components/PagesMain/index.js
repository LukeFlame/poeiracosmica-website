/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

// Styles of the component
// Responsive desktop/mobile
const PagesMainWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  min-height: 700px;
  z-index: 10;
  background: linear-gradient(180deg, #1E2637 0%, #0D1526 100%);
  align-items: center;
  justify-content: center;
  padding: 24px 5% 0;

  div#content {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1170px;
    height: 100%;

    div#top-content {
      position: absolute;
      display: flex;
      width: 100%;
      max-width: 1030px;
      height: 200px;
      top: -125px;
      z-index: 1;

      -webkit-animation: 0s ease-out 0s 1 wait, 1.2s ease-out 0s 1 appear;
       -moz-animation:0s ease-out 0s 1 wait, 1.2s ease-out 0s 1 appear;
        -ms-animation: 0s ease-out 0s 1 wait, 1.2s ease-out 0s 1 appear;
         -o-animation: 0s ease-out 0s 1 wait, 1.2s ease-out 0s 1 appear;
          animation: 0s ease-out 0s 1 wait, 1.2s ease-out 0s 1 appear;

      #avatar-image {
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid ${({ theme }) => theme.colors.primary}50;
      }

      div#infos {
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        width: 700px;
        margin: 18px 0 0 30px;

        .nickname {
          opacity: 0.92;
          width: 100%;
          height: 120px;
          display: flex;
          align-items: center;
          margin: 0;
          font-family: 'Sulphur Point', sans-serif;
          font-size: 72px;
          font-weight: bold;
          color: ${({ theme }) => theme.colors.whitesecundary};
          overflow: hidden;
        }

        .since {
          margin: 0;
          position: absolute;
          bottom: 20px;
          font-family: 'Sulphur Point', sans-serif;
          font-size: 18px;
          font-weight: 200;
          color: ${({ theme }) => theme.colors.whiteprimary};
          border-left: 3px solid ${({ theme }) => theme.colors.whiteprimary}70;
          padding-left: 8px;
          border-radius: 2px 0 0 2px;
        }
      }
    }
  }

  @media(max-width: 1080px) {
    div#content {
      flex-direction: column;

      div#top-content {
        top: -115px;

        #avatar-image {
            width: 180px;
            height: 180px;
            min-width: 180px;
            min-height: 180px;
          }

        div#infos {
          .nickname {
            font-size: 56px;
          }

          .since {
            font-size: 17px;
            bottom: 30px;
          }
        }
      }
    }
  }

  @media(max-width: 850px) {
    padding: 0;
    div#content {
      div#top-content {
        padding-left: 5%;
        padding-right: 5%;
        height: 140px;
        top: -84px;

        #avatar-image {
            width: 140px;
            height: 140px;
            min-width: 140px;
            min-height: 140px;
          }

        div#infos {
          .nickname {
            font-size: 38px;
          }

          .since {
            font-size: 15px;
            bottom: 10px;
          }
        }
      }
    }
  }

  @media(max-width: 650px) {
    div#content {
      div#top-content {
        height: 100px;
        top: -65px;

        #avatar-image {
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }

        div#infos {
          .nickname {
            font-size: 34px;
          }

          .since {
            font-size: 14px;
            bottom: 0px;
          }
        }
      }
    }
  }

  @media(max-width: 550px) {
    div#content {
      div#top-content {
        height: 80px;
        top: -50px;

        #avatar-image {
            width: 80px;
            height: 80px;
            min-width: 80px;
            min-height: 80px;
          }

        div#infos {
          margin: 18px 0 0 20px;
          .nickname {
            font-size: 28px;
          }

          .since {
            font-size: 12px;
            bottom: 0px;
          }
        }
      }
    }
  }

  @media(max-width: 450px) {
    div#content {
      div#top-content {
        height: 70px;
        top: -45px;

        #avatar-image {
            width: 70px;
            height: 70px;
            min-width: 70px;
            min-height: 70px;
          }

        div#infos {
          margin: 18px 0 0 14px;
          .nickname {
            font-size: 24px;
          }

          .since {
            font-size: 11px;
            bottom: -3px;
          }
        }
      }
    }
  }
`;

// Organizes all page content
// Children is all the content that is within the component
export default function PagesMain({ children }) {
  return (
    <PagesMainWrapper>
      <div id="content">
        {children}
      </div>
    </PagesMainWrapper>
  );
}
