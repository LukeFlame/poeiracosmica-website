import styled from 'styled-components';

// Styles of the component
// Generic content box
const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  height: auto;
  width: 271px;
  border: none;
  background-color: rgba(0,0,0,0);
  border-radius: 4px;
  overflow: hidden;
`;

// Page menu styles
Widget.Menu = styled.div`
  margin: 24px 0 24px 0;
  height: auto;
  width: 271px;
  border: none;
  background-color: rgba(0,0,0,0);
  border-radius: 4px;
  overflow: hidden;

  -webkit-animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
       -moz-animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
        -ms-animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
         -o-animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
          animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;

  @media(max-width: 1160px) {
    width: 220px;
  }

  @media(max-width: 1080px) {
    display: flex;
    width: 80%;
    row-gap: 2%;
    align-items: center;
    justify-content: center;
    padding: 0 5% 0 5%;

    .grid-options {
      display: grid;
      flex-direction: column;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      justify-items: center;
    }
  }

  @media(max-width: 550px) {
    padding: 0 5% 5% 5%;
    width: 100%;
    margin: 5% 0 2% 0;
    flex-direction: column;

    .grid-options {
      width: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
    }
  }
`;

// Page content styles
Widget.Content = styled.div`
  padding: 30px 70px 45px 70px;
  margin-top: 24px;
  margin-left: 20px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border: none;
  background-color: ${({ theme }) => theme.colors.secundary};
  box-shadow: 2px 2px 17px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;

  -webkit-animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
       -moz-animation:.5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
        -ms-animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
         -o-animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
          animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;

  .about-title-main {
    display: flex;
    width: 100%;
    text-align: left;
    font-family: 'Comfortaa';
    font-size: 36px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.whiteprimary};
  }

  .about-image-main {
    display: flex;
    height: 100%;
    max-height: 411px;
    width: 100%;
    max-width: 739px;
    justify-content: center;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.blacksecundary}90;
    border-radius: 5px;
  }

  .about-text-main {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    font-family: 'Solway', serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.whitesecundary};

    .fade-enter {
      opacity: 0;
      transform: translateX(-100%);
    }
    .fade-enter-active {
      opacity: 1;
      transform: translateX(0%);
    }
    .fade-exit .btn {
      opacity: 1;
      transform: translateX(0%);
    }
    .fade-exit-active .btn {
      opacity: 0;
      transform: translateX(100%);
    }
    .fade-enter-active .btn,
    .fade-exit-active .btn {
      transition: opacity 500ms, transform 500ms;
    }

    p {
      text-indent: 32px;
      margin-bottom: 0;
    }
  }

  .staff-members {
      width: 100%;
      display: flex;
      flex-direction: column;

      h1.title {
        margin: 40px 0 25px 0;
        font-family: 'Comfortaa';
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.whiteprimary};
      }

      .cards {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 30px 20px;
        
        .card {
          text-decoration: none;
          background-color: ${({ theme }) => theme.colors.blackprimary};
          height: 100px;
          border-radius: 5px;
          box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: center;
          padding: 20px 15px 20px 25px;
          transition: .2s;
          cursor: pointer;

          img.avatar {
            width: 57px;
            height: 57px;
            border-radius: 50%;
          }

          div.texts {
            display: flex;
            flex-direction: column;
            margin-left: 16px;

            h2.nick {
              margin: 0;
              width: max-content;
              font-family: 'Comfortaa';
              font-size: 24px;
              font-weight: 700;
              color: ${({ theme }) => theme.colors.whitesecundary};
            }

            h3.info {
              margin: 0;
              width: fit-content;
              font-family: 'Comfortaa';
              font-size: 14px;
              font-weight: 400;
              color: ${({ theme }) => theme.colors.primary};
            }
          }
        }

        .card:hover {
          transform: translatey(-10px);
          background-color: ${({ theme }) => theme.colors.blacksecundary}90;
        }
      }
  }

  @media(max-width: 1300px) {
    .staff-members .cards {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 25px 16px;

      .card {
        div.texts {
          h3.info {
            max-width: 120px;
          }
        }
      }
    }
  }

  @media(max-width: 850px) {
    width: 100%;
    margin: 0;
    padding-left: 0;
    padding-right: 0;

    .about-title-main {
      font-size: 28px;
      padding-left: 5%;
      padding-right: 5%;
    }

    .about-text-main {
      font-size: 15px;
      padding-left: 5%;
      padding-right: 5%;
    }

    .staff-members {
      padding-left: 5%;
      padding-right: 5%;
    }
  }

  @media(max-width: 660px) {
    padding-top: 0;
    padding-bottom: 26px;

    .about-title-main {
      font-size: 24px;
    }

    .staff-members {
      h1.title {
        font-size: 22px;
      }
    }

    .about-text-main {
      font-size: 14px;
    }
  }

  @media(max-width: 550px) {
    .about-title-main {
      font-size: 20px;
    }

    .staff-members {
      h1.title {
        font-size: 17px;
      }
    }

    .about-text-main {
      font-size: 13px;
    }

    .staff-members .cards {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      gap: 18px 12px;
    }
  }

  @media(max-width: 400px) {
    .about-title-main {
      font-size: 18px;
    }

    .staff-members {
      h1.title {
        font-size: 16px;
      }
    }

    .about-text-main {
      font-size: 12px;
    }
  }
`;

// Tip styles
Widget.Tip = styled.div`
  margin-top: 30px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.secundary};
  box-shadow: 1.5px 1.5px 17px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 35px 5px 35px 5px;

  -webkit-animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
       -moz-animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
        -ms-animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
         -o-animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
          animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;

  img {
    height: 64px;
    width: 64px;
  }

  p {
      width: 80%;
      font-family: 'Solway', serif;
      font-size: 16px;
      font-weight: 200;
    }

  div#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    div.role-card {
      margin-bottom: 7px;
      width: 70%;
      height: auto;

      span {
        font-family: 'Sulphur Point', sans-serif;
        font-size: 60%;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.whiteprimary};
        margin-left: 15px;
      }
      
      div {
        margin-top: 4px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        padding: 6px 0 6px 0;

        text-align: center;
        font-family: 'Sulphur Point', sans-serif;
        font-size: 13px;
        font-weight: 700;
      }

      .pseudocientista {
          border: 1px solid #CA4BC7;
          color: #CA4BC7
        }
      
      .cientistamirim {
        border: 1px solid #57C026;
        color: #57C026
      }

      .prodigio {
        border: 1px solid #1ABC9C;
        color: #1ABC9C
      }

      .viajantedotempo {
        border: 1px solid #1069C9;
        color: #1069C9
      }

      .cientistacaotico {
        border: 1px solid #7205FF;
        color: #7205FF
      }

      .sapiensquantico {
        border: 1px solid #CC1D1D;
        color: #CC1D1D
      }

      .demoniodelaplace {
        border: 1px solid #F1C40F;
        color: #F1C40F
      }
      
    }
  }

  a.vote-button {
      width: 60%;
      height: 40px;
      border: 3px solid ${({ theme }) => theme.colors.whitesecundary};
      filter: drop-shadow(1px 2px 2px rgba(0, 110, 239, 0.25));
      border-radius: 5px;
      margin-top: 12px;

      font-family: 'Comfortaa';
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 13px;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.whitesecundary};

      transition: .3s;
    }

    a.vote-button:hover {
    border: 3px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.blacksecundary};
    font-weight: 800;
    filter: drop-shadow(1px 2px 2px ${({ theme }) => theme.colors.secundary});
  }

  @media(max-width: 1160px) {
    padding: 35px 0;

    p {
      font-size: 14px;
    }
  }

  @media(max-width: 1080px) {
    display: none;
  }
`;

// User page content style
Widget.UserContainer = styled.div`
  margin-top: 102px;
  width: 100%;
  max-width: 1030px;
  height: 100%;
  display: grid;
  gap: 27px;
  row-gap: 37px;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 
    "xp-level xp-level xp-level atoms-store atoms-store atoms-store atoms-store votes votes votes"
    "messages messages messages messages messages messages medails medails medails medails"
    "vips-boosters vips-boosters vips-boosters vips-boosters vips-boosters vips-boosters vips-boosters vips-boosters vips-boosters vips-boosters";

    -webkit-animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
       -moz-animation:.5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
        -ms-animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
         -o-animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
          animation: .5s ease-out 0s 1 wait, 1.2s ease-out .5s 1 appear;
  .xp-level {
    grid-area: xp-level;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px 35px 30px;

    .circle-level {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 140px;
      width: 140px;
      border-radius: 50%;
      background: linear-gradient(28.79deg, #003C73 -24.22%, #265CBC 60.52%, #003C73 147.03%);

      .title-level {
        margin: 0;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 300;
      }

      h2.title-data {
        margin: 8px 0 15px 0;
        font-family: 'Lato', sans-serif;
        font-size: 50px;
        font-weight: 700;
      }
    }

    .xp-bar {
      display: flex;
      flex-direction: column;
      width: 100%;

      .info-xp-bar {
        display: flex;
        flex-direction: column;
        align-items: left;

        .xp-title {
          margin: 0 0 2px 12px;
          font-family: 'Lato', sans-serif;
          font-size: 16px;
          font-weight: 400;
        }
        
        .xp-data {
          margin: 0 0 3px 12px;
          font-family: 'Lato', sans-serif;
          font-size: 12px;
          font-weight: 300;

          span {
            font-weight: 400;
          }
        }
      }

      .progress-bar {
        width: 100%;
        height: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background-color: ${({ theme }) => `${theme.colors.whiteprimary}40`};
        border-radius: 65px;
        z-index: 8;

        h3 {
          color: ${({ theme }) => theme.colors.whitesecundary};
          font-size: 12px;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          z-index: 10;
        }

        .progress {
          background: linear-gradient(28.79deg, #003C73 -24.22%, #265CBC 60.52%, #003C73 147.03%);
          border-radius: 65px;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 50%;
          z-index: 9;
        }
      }
    }
  }

  .atoms-store {
    grid-area: atoms-store;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;

    .atoms {
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: left;

      .atoms-title {
        margin: 0 0 11px 0;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.whitesecundary};
      }

      .atoms-data-container {
        width: 100%;
        height: 87px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        background-color: ${({ theme }) => `${theme.colors.blacksecundary}50`};
        border-radius: 4px;
        padding: 0 7% 0 0;

        .atoms-data {
          margin: 0 0 0 18px;
          font-family: 'Lato', sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: ${({ theme }) => theme.colors.whitesecundary};
        }
      }
    }

    .last-orders {
      width: 100%;
      display: flex;
      flex-direction: column;

      .last-orders-title {
        margin: 0 0 11px 0;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.whitesecundary};
      }

      .last-orders-data {
        width: 100%;
        height: 52px;
        display: flex;
        flex-direction: column;
        border-left: 2px solid ${({ theme }) => theme.colors.primary};

        .reg {
          margin: 0;
          font-family: 'Lato', sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: ${({ theme }) => theme.colors.whitesecundary};
        }
      }
    }
  }

  .votes {
    grid-area: votes;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .votes-data {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 172px;

      .votes-data-total {
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 92%;
        width: 50%;

        .votes-data-total-title {
          margin: 0;
          font-family: 'Lato', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: ${({ theme }) => theme.colors.whitesecundary};
        }

        .votes-data-total-data {
          margin: 0;
          font-family: 'Lato', sans-serif;
          font-size: 55px;
          font-weight: 700;
          color: ${({ theme }) => theme.colors.whitesecundary};
        }
      }
    }
  }

  .messages {
    grid-area: messages;
  }

  .medails {
    grid-area: medails;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;

    .title {
      text-align: center;
      margin: 0 0 25px 0;
      font-family: 'Sulphur Point', sans-serif;
      font-size: 24px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.whitesecundary};
      width: 208px;
      height: 40px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }

    .medails-data {
      width: 95%;
      height: 60%;
      display: grid;
      justify-items: center;
      align-items: center;
      gap: auto;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;

      .medail {
        margin: auto;
        width: 50px;
        height: 50px;
      }

      .noMedail {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: none;
        border: 1px solid ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .vips-boosters {
    grid-area: vips-boosters;
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 30px 25px;

    .booster-xp,
    .booster-atoms,
    .vip {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .data {
        margin-top: 24px;
        display: flex;
        justify-content: space-around;
        width: 100%;

        .active-plan,
        .time-rem {
          display: flex;
          flex-direction: column;
          text-align: center;

          .active-plan-title,
          .time-rem-title {
            margin: 0 0 10px 0;
            font-family: 'Lato', sans-serif;
            font-size: 12px;
            font-weight: 400;
            color: ${({ theme }) => theme.colors.whitesecundary};
          }

          .active-plan-data,
          .time-rem-data {
            margin: 0;
            font-family: 'Lato', sans-serif;
            font-size: 25px;
            font-weight: 400;
            color: ${({ theme }) => theme.colors.whitesecundary};
          }

          .active-plan-data {
            font-weight: 700;
          }
        }
      }
    }

    .booster-xp {
      border-right: 0.5px solid ${({ theme }) => theme.colors.primary};
    }

    .vip {
      border-left: 0.5px solid ${({ theme }) => theme.colors.primary};
      border-right: 0.5px solid ${({ theme }) => theme.colors.primary};
    }

    .booster-atoms {
      border-left: 0.5px solid ${({ theme }) => theme.colors.primary};
    }
  }

  @media(max-width: 1024px) {
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
      "xp-level xp-level xp-level xp-level atoms-store atoms-store atoms-store atoms-store atoms-store atoms-store"
      "medails medails medails medails medails medails votes votes votes votes"
      "messages messages messages messages messages messages messages messages messages messages"
      "vips-boosters vips-boosters vips-boosters vips-boosters vips-boosters vips-boosters vips-boosters vips-boosters vips-boosters vips-boosters";
    gap: 18px;
    row-gap: 24px;
  }

  @media(max-width: 850px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  @media(max-width: 650px) {
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-template-areas: 
      "xp-level"
      "atoms-store"
      "votes"
      "medails"
      "messages"
      "vips-boosters";
    gap: 5px;
    row-gap: 12px;

    .vips-boosters {
      height: auto;
      width: 100%;
      display: grid;
      align-items: center;
      justify-content: center;
      justify-items: center;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      padding: 20px 15px;

      .booster-xp {
        width: 70%;
        padding: 20px 0 20px 0;
        border: 0;
        border-bottom: 0.5px solid ${({ theme }) => theme.colors.primary};
      }

      .vip {
        width: 70%;
        padding: 20px 0 20px 0;
        border: 0;
        border-top: 0.5px solid ${({ theme }) => theme.colors.primary};
        border-bottom: 0.5px solid ${({ theme }) => theme.colors.primary};
      }

      .booster-atoms {
        width: 70%;
        padding: 20px 0 20px 0;
        border: 0;
        border-top: 0.5px solid ${({ theme }) => theme.colors.primary};
      }
    }
  }

  @media(max-width: 550px) {
    margin-top: 80px;
    padding-left: 0;
    padding-right: 0;

    .medails {
      padding: 30px 10px;
    }
  }

  @media(max-width: 450px) {
    margin-top: 60px;
  }
`;

// Style of the contents of each box on the user page
Widget.UserBox = styled.div`
  width: 100%;
  height: 300px;
  border: none;
  background-color: ${({ theme }) => theme.colors.secundary};
  box-shadow: 2px 2px 15px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;
`;

export default Widget;
