/* eslint-disable max-len */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
import Link from 'next/link';
import formatNick from '../../../utils/formatNick';
import formatNumber from '../../../utils/formatNumber';

// Styles of the component
// Responsive desktop/mobile
const RankPositionWrapper = styled.a`
  width: 110%;
  height: 55px;
  display: flex;
  cursor: pointer;
  padding: 40px 0 40px 0;
  justify-content: center;
  border-radius: 10px;

  :first-child {
    padding: 0 0 40px 0;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.blackprimary}90;
  }

  div#content {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    div#left {
      width: auto;
      height: 100%;
      display: inline-flex;
      align-items: center;

      div#position {
        height: 30px;
        width: 30px;
        border-radius: 50px;
        background-color: #a08b22;

        display: flex;
        align-items: center;
        justify-content: center;

        font-family: 'Assistant', sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.whitesecundary};
      }

      img.avatar {
        width: 55px;
        height: 55px;
        border-radius: 50px;

        margin-left: 19px;
        border: 1px solid ${({ theme }) => theme.colors.whitesecundary}15;
      }

      div.limit-nick {
        margin-left: 26px;
        display: block;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;

        h1.nickname {
          font-family: 'Sulphur Point', sans-serif;
          display: inline;
          align-items: center;
          font-size: 30px;
          font-weight: 700;
          color: ${({ theme }) => theme.colors.whitesecundary};
        }
      }
    }

    div#right {
      width: auto;
      height: 100%;
       display: flex;
      align-items: center;

      div#data {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 25px;
      }
      div#level {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 33px;
        position: relative;
        margin-left: 45px;

        .progress-bar {
          position: absolute;
          width: 550px;
          height: 550px;
          color: ${({ theme }) => theme.colors.primary};
        }
      }

      h2.title-data {
        margin: 0 0 2px 0;
        font-family: 'Assistant', sans-serif;
        font-size: 12px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.whiteprimary};
      }

      h2.content-data {
        margin: 0;
        font-family: 'Assistant', sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.whitesecundary};
      }
    }
  }

  @media(max-width: 1200px) {
    div#content div#left h1.nickname {
      font-size: 24px;
    }
  }

  @media(max-width: 1080px) {
      div#content {
        flex-direction: row;
      }
    }

  @media(max-width: 850px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  @media(max-width: 660px) {
    padding: 35px 5% 35px 5%;
    div#content {
      div#left {
        div#position {
          height: 25px;
          width: 25px;
        }

        img.avatar {
          width: 42px;
          height: 42px;
          margin-left: 14px;
        }

        div.limit-nick {
          margin-left: 18px;
          h1.nickname {
            font-size: 22px;
          }
        }
      }

      div#right {
        div#level {
          margin-left: 20px;
        }
      }
    }
  }

  @media(max-width: 560px) {
    div#content {
      div#left {
        img.avatar {
          margin-left: 12px;
        }

        div.limit-nick {
          margin-left: 12px;
          max-width: 210px;
          h1.nickname {
            font-size: 16px;
          }
        }
      }

      div#right {
        div#level {
          margin-left: 20px;
        }
      }
    }
  }

  @media(max-width: 400px) {
    div#content {
      div#left {
        div#position {
          height: 20px;
          width: 20px;
          font-size: 12px;
        }
        img.avatar {
          margin-left: 8px;
          width: 30px;
          height: 30px;
        }
        div.limit-nick {
          max-width: 100px;
          margin-left: 10px;
          h1.nickname {
            font-size: 16px;
          }
        }
      }

      div#right {
        div#data {
          h2.title-data {
            font-size: 10px;
          }

          h2.content-data {
            font-size: 14px;
          }
        }
        
        div#level {
          margin-left: 12px;
          margin-right: 2px;

          h2.title-data {
            font-size: 10px;
          }

          h2.content-data {
            font-size: 14px;
          }
        }
      }
    }
  }
`;

// Styles of divisor (a little line)
RankPositionWrapper.Divisor = styled.div`
    width: 90%;
    max-width: 670px;
    height: 0;
    border: 1px solid ${({ theme }) => theme.colors.blackprimary};
    border-radius: 50px;
    margin: 0;
`;

// Get all data from the Rankings page
export default function RankPosition({ data, option, pos }) {
  // Differentiates the top 3 with colors that simulate the podium
  function colorPosition(position) {
    if (position === 1) return '#C0B020';
    if (position === 2) return '#7A7A7A';
    if (position === 3) return '#A0562C';
    return '#464646';
  }

  // Calculates xp percentage
  function progressLevelUp(xp, level) {
    let allNextLevel = 0;
    for (let lvl = 0; lvl <= parseInt(level) + 1; lvl++) {
      allNextLevel += 500 * lvl;
    }

    let allPreviousLevel = 0;
    for (let lvl = 0; lvl <= parseInt(level); lvl++) {
      allPreviousLevel += (500 * lvl);
    }

    const percentualXP = Math.floor((xp - allPreviousLevel) / ((allNextLevel - allPreviousLevel) / 100));
    return percentualXP;
  }

  // Assembles the entire component of each position in the ranking
  return (
    <>
      <Link href={`/user/${data.userID}`}>
        <RankPositionWrapper>
          <div id="content">
            <div id="left">
              <div id="position" style={{ backgroundColor: colorPosition(pos) }}>{(pos)}</div>
              <img className="avatar" src={data.avatar} alt="user avatar" />
              <div className="limit-nick">
                <h1 className="nickname">
                  {formatNick(data.nickname.length < 2 ? data.usertag.split('#')[0] || data.userID : data.nickname, 19)}
                </h1>
              </div>
            </div>
            <div id="right">
              <div id="data">
                <h2 className="title-data">
                  {option === 'XP' && 'Experiência'}
                  {option === 'ATOMS' && 'Átomos'}
                  {option === 'VOTES' && 'Votos'}
                </h2>
                <h2 className="content-data">
                  {option === 'XP' && formatNumber(data.xp)}
                  {option === 'ATOMS' && formatNumber(data.atoms)}
                  {option === 'VOTES' && formatNumber(data.votes)}
                </h2>
              </div>
              {option === 'XP' && (
                <div id="level">
                  <h2 className="title-data">Nível</h2>
                  <h2 className="content-data">{data.level}</h2>
                  <CircularProgress variant="determinate" size={55} color="inherit" thickness={2} value={progressLevelUp(data.xp, data.level)} className="progress-bar" />
                </div>
              )}
            </div>
          </div>
        </RankPositionWrapper>

      </Link>
      {pos < 25 && <RankPositionWrapper.Divisor />}
    </>
  );
}
