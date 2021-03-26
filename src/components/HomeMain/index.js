/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import formatNumber from '../../../utils/formatNumber';

// Styles of the component, including background
// Responsive desktop/mobile
const HomeMainStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  justify-content: center;
  z-index: 10;

  background-image: url('/Background.png');
  background-position: center 45%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  div#home {
    overflow: hidden;
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 5%;
    flex-direction: column;
    padding: 0 6%;

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;

      .homelogo {
        margin-top: 2%;
        width: 500px;
        height: auto;
        cursor: pointer;
        -webkit-transition: -webkit-transform .2s ease-in-out;
        transition: .2s ease-in-out;

        -webkit-animation: 1.5s ease-out 0s 1 wait, 1s ease-out 1.5s 1 appear;
        -moz-animation: 1.5s ease-out 0s 1 wait, 1s ease-out 1.5s 1 appear;
          -ms-animation: 1.5s ease-out 0s 1 wait, 1s ease-out 1.5s 1 appear;
          -o-animation: 1.5s ease-out 0s 1 wait, 1s ease-out 1.5s 1 appear;
              animation: 1.5s ease-out 0s 1 wait, 1s ease-out 1.5s 1 appear;
        
        img:hover {
          transform: scale(1.12) rotate(4deg);
        }
      }

      h1 {
        width: fit-content;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 36px;
        color: ${({ theme }) => theme.colors.whitesecundary};
        text-shadow: 0px -1px 5px rgba(0, 0, 0, 0.58);
        margin: 4% 0 0 0;

        -webkit-animation: .8s ease-out 0s 1 wait, 1s ease-out .8s 1 appear;
        -moz-animation: .8s ease-out 0s 1 wait, 1s ease-out .8s 1 appear;
          -ms-animation: .8s ease-out 0s 1 wait, 1s ease-out .8s 1 appear;
          -o-animation: .8s ease-out 0s 1 wait, 1s ease-out .8s 1 appear;
            animation: .8s ease-out 0s 1 wait, 1s ease-out .8s 1 appear;
      }
    }

    .homedata {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 0 0 2% 0;

      -webkit-animation: .5s ease-out 0s 1 wait, 1s ease-out .5s 1 appear;
       -moz-animation: .5s ease-out 0s 1 wait, 1s ease-out .5s 1 appear;
        -ms-animation: .5s ease-out 0s 1 wait, 1s ease-out .5s 1 appear;
         -o-animation: .5s ease-out 0s 1 wait, 1s ease-out .5s 1 appear;
          animation: .5s ease-out 0s 1 wait, 1s ease-out .5s 1 appear;

      .databox {
        height: 100%;
        width: 170px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 0 36px;
        padding: 12px 0;
        opacity: 0.8;
        transition: .2s;
        cursor: default;
        background-color: ${({ theme }) => theme.colors.blackprimary}90;
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary}00;
        border-radius: 7px;

        .title {
          margin: 0;
          width: fit-content;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 12px;
          color: ${({ theme }) => theme.colors.whiteprimary};
        }

        .data {
          margin: 0;
          width: fit-content;
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 22px;
          color: ${({ theme }) => theme.colors.whitesecundary};
        }

        :hover {
          opacity: 1;
          border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
          background-color: ${({ theme }) => theme.colors.blackprimary}90;
        }
      }
    }
  }

  @media(max-width: 1920px) {
    div#home {
      main {
        .homelogo {
          width: 750px;
        }

        h1 {
          font-size: 48px;
        }
      }
    }
  }

  @media(max-width: 1600px) {
    div#home {
      main {
        .homelogo {
          width: 520px;
        }

        h1 {
          font-size: 36px;
        }
      }
    }
  }

  @media(max-width: 1280px) {
    div#home {
      main {
        .homelogo {
          width: 480px;
        }

        h1 {
          font-size: 28px;
        }
      }
    }
  }

  @media(max-width: 1024px) {
    background-position: center 40%;
    div#home {
      margin-top: 9%;

      main {
        .homelogo {
          width: 390px;
        }

        h1 {
          margin: 5% 0 0 0;
          font-size: 25px;
        }
      }

      .homedata {
        .databox {
          width: 160px;
          margin: 0 18px;

          .title {
            font-size: 11px;
          }

          .data {
            font-size: 20px;
          }

        }
      }
    }
  }

  @media(max-width: 768px) {
    background-position: center 35%;
    div#home {
      margin-top: 13%;

      main {
        .homelogo {
          width: 300px;
        }

        h1 {
          margin: 5% 0 0 0;
          font-size: 22px;
        }
      }
    }
  }

  @media(max-width: 600px) {
    div#home {
      margin-top: 17%;

      main {
        .homelogo {
          width: 300px;
        }

        h1 {
          font-size: 18px;
        }
      }

      .homedata {
        .databox {
          width: 140px;
          margin: 0 10px;

          .title {
            font-size: 10px;
          }

          .data {
            font-size: 18px;
          }
        }
      }
    }
  }

  @media(max-width: 550px) {
    div#home {
      margin-top: 22%;

      main {
        h1 {
          margin-top: 16%;
          font-size: 18px;
        }
      }

      .homedata {
          display: flex;
          justify-content: space-between;
          max-width: 340px;
          margin-bottom: 2%;
        .databox {
          width: auto;
          min-width: 65px;
          padding: 8px 5px 5px 8px;

          .title {
            font-size: 8px;
          }

          .data {
            font-size: 14px;
          }
        }
      }
    }
  }

  @media(max-width: 425px) {
    div#home {
      margin-top: 32%;

      main {
        .homelogo {
          width: 280px;
        }

        h1 {
          font-size: 16px;
        }
      }

      .homedata {
        .databox {
          width: auto;
          margin: 0 16px;

          .title {
            font-size: 8px;
          }

          .data {
            font-size: 14px;
          }
        }
      }
    }
  }

  @media(max-width: 375px) {
    div#home {
      margin-top: 27%;

      main {
        h1 {
          margin-top: 8%;
          max-width: 70%;
          text-align: center;
        }
      }
    }
  }

  @media(max-width: 1024px) and (min-height: 900px) {
    div#home {
      margin-top: 27%;

      main {
        .homelogo {
          width: 600px;
        }
        
        h1 {
          margin-top: 10%;
          font-size: 34px;
        }
      }
    }
  }

  @media(max-width: 768px) and (min-height: 900px) {
    div#home {
      margin-top: 27%;

      main {
        .homelogo {
          width: 500px;
        }
        
        h1 {
          margin-top: 10%;
          font-size: 28px;
        }
      }
    }
  }

  @media(max-width: 380px) and (max-height: 900px) {
    div#home {
      margin-top: 37%;

      main {
        h1 {
          margin-top: 12%
        }
      }
    }
  }
  
`;

// All content on the home page:
// - Main logo with link to the discord server;
// - Beautiful sentence;
// - Brief statistics about the server
export default function HomeMain({ atoms, members }) {
  return (
    <HomeMainStyle>
      <div id="home">
        <main>
          <a
            href="https://discord.gg/MKTrrE2"
            className="homelogo"
            target="_blank"
          >
            <img src="/HomeLogo.png" alt="Poeira Cósmica" className="homelogo" title="Poeira Cósmica" />
          </a>

          <h1>
            A comunidade que atravessa galáxias.
          </h1>
        </main>
        <div className="homedata">
          <div className="databox">
            <h2 className="title">MENSAGENS</h2>
            <h3 className="data">5,1 mi+</h3>
          </div>

          <div className="databox">
            <h2 className="title">MEMBROS</h2>
            <h3 className="data">{formatNumber(members)}</h3>
          </div>

          <div className="databox">
            <h2 className="title">ÁTOMOS</h2>
            <h3 className="data">{formatNumber(atoms)}</h3>
          </div>
        </div>
      </div>
    </HomeMainStyle>
  );
}
