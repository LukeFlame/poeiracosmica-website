/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Fuse from 'fuse.js';
import formatNick from '../../../utils/formatNick';

// Styles of the component
// Responsive desktop/mobile
const SearchInputWrapper = styled.div`
  width: 30%;
  min-width: 188px;
  max-width: 320px;
  
  #input {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    flex: 1;
    z-index: 50;

    form {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        flex: 1;
        border: 1px solid ${({ theme }) => theme.colors.whiteprimary}97;
        border-right: 0;
        outline: none;
        border-radius: 5px 0 0 5px;
        width: 100%;
        height: 38px;
        background-color: rgba(0, 0, 0, 0);
        font-family: 'Blinker', sans-serif;
        font-weight: 400;
        font-size: 14px;
        padding-left: 15px;
        color: ${({ theme }) => theme.colors.whiteprimary};
        transition: .12s;
      }

      input::placeholder {
        color: ${({ theme }) => theme.colors.whiteprimary};
        text-overflow: ellipsis;
      }

      input:hover {
        background-color: ${({ theme }) => theme.colors.blackprimary}30;
      }

      input:hover + button {
        background-color: ${({ theme }) => theme.colors.blackprimary}30;
      }

      input:focus {
        background-color: ${({ theme }) => theme.colors.blackprimary};
        border: 1px solid ${({ theme }) => theme.colors.blackprimary} !important;
        border-right: 0 !important;
        border-radius: 5px 0 0 0;

        ::placeholder {
          color: ${({ theme }) => theme.colors.whiteprimary};
        }
      }

      input:focus + button {
        border: 1px solid ${({ theme }) => theme.colors.blackprimary} !important;
        border-left: 0 !important;
        background-color: ${({ theme }) => theme.colors.blackprimary};
        border-radius: 0 5px 0 0;
      }

      button {
        background: rgba(0, 0, 0, 0);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 5px 5px 0;
        border: 1px solid ${({ theme }) => theme.colors.whiteprimary}97;
        border-left: 0;
        height: 38px;
        width: 43px;
        cursor: pointer;
        transition: .2s;

        img.lupa {
          width: 24px;
          height: 24px;
          color: ${({ theme }) => theme.colors.whiteprimary};
        }

        :focus {
          outline: 0;
          border: 1px solid ${({ theme }) => theme.colors.blackprimary} !important;
          border-left: 0;
        }

        &:disabled{
          opacity: 1;
          cursor: default;
        }
      }
      
    }
    
    .results {
      position: absolute;
      z-index: 100;
      top: 100%;
      width: 100%;
      height: auto;
      background-color: ${({ theme }) => theme.colors.blackprimary};
      max-height: 300px;
      border-radius: 0 0 5px 5px;
      overflow-y: scroll;
      // -webkit-box-shadow: 0px 2px 5px 1px ${({ theme }) => theme.colors.blacksecundary};
      // -moz-box-shadow: 0px 2px 5px 1px ${({ theme }) => theme.colors.blacksecundary};
      // box-shadow: 0px 2px 5px 1px ${({ theme }) => theme.colors.blacksecundary};

      .no-results {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;

        border-top: 1px solid ${({ theme }) => theme.colors.blacksecundary};

        font-family: 'Blinker', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.whitesecundary}95;
        transition: .2s;
      }

      .result {
        border-top: 1px solid ${({ theme }) => theme.colors.blacksecundary};
        height: 50px;
        padding: 5px 0;
        display: flex;
        align-items: center;

        font-family: 'Blinker', sans-serif;
        font-weight: 400;
        font-size: 16px;
        padding: 0 24px 0 24px;
        color: ${({ theme }) => theme.colors.whitesecundary};

        transition: .1s;

        cursor: pointer;

        img {
          height: 40px;
          width: 40px;
          border-radius: 50%;
          margin-right: 12px;
        }

        .info {
          display: flex;
          align-items: center;
          justify-content: left;
          align-items: baseline;

          h1 {
            margin: 0;
            font-family: 'Comfortaa';
            font-weight: 600;
            font-size: 20px;
            color: ${({ theme }) => theme.colors.whitesecundary};
            transition: .2s;
          }

          h2 {
            margin: 0 0 0 8px;
            font-family: 'Comfortaa';
            font-weight: 400;
            font-size: 14px;
            color: ${({ theme }) => theme.colors.whitesecundary}85;
            transition: .2s;
          }
        }
      }

      .result:hover {
        background-color: ${({ theme }) => theme.colors.secundary};
        opacity: 1;
        transform: none;
      }
    }

    .results::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.blackprimary};
      border-radius: 0 0 5px 0;
    }
    .results::-webkit-scrollbar {
        width: 5px;
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 0 0 5px 0;
    }

    .results::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.blacksecundary};
        border-radius: 5px;
    }
  }

  @media(max-width: 1124px) {
    margin-left: 5%;

    #input .results .result {
      height: 45px;

      img {
        height: 30px;
        width: 30px;
      }

      .info h1 {
        font-size: 18px;
      }
    }
  }

  @media(max-width: 980px) {
    #input {
      form input::-webkit-input-placeholder {
        width: 100%;
      }
    }
  }

  @media(max-width: 500px) {
    #input .results .result {
      padding-left: 5%;
      img {
        height: 25px;
        width: 25px;
      }

      .info {
        h1 {
          font-size: 16px;
        }

        h2 {
          margin: 0 0 0 6px;
          font-size: 12px;
        }
      }
    }
  }

  @media(max-width: 375px) {
    #input .results .result {
      img {
        margin-right: 8px;
      }
      .info {
        h1 {
          font-size: 12px;
        }

        h2 {
          font-size: 8px;
        }
      } 
    }
  } 
`;

// Receives data from Header
function SearchInput({ data, page }) {
  // State that controls what is typed in the search bar
  const [nameSearch, setNameSearch] = React.useState('');
  // State that controls whether the input is in focus or not, later closing the case closed
  const [isInputFocus, setisInputFocus] = React.useState(false);
  // State that controls the results according to what was typed
  const [resultsSearch, setresultsSearch] = React.useState([]);

  // List of false data to simulate the lack of results
  const FakeList = [
    {
      id: '',
      avatar: '',
      nickname: '',
      tag: '',
    },
  ];

  // Options used in the search. Precision and search parameters.
  const SearchOptions = {
    threshold: 0.4,
    keys: [
      'userID',
      'nickname',
      'usertag',
    ],
  };

  // Here Fuse checks whether the data is available, if not, it shows the fake list.
  const fuse = new Fuse(!data ? FakeList : data, SearchOptions);

  const router = useRouter();

  // Whenever the value of the input changes, it updates the results
  React.useEffect(() => {
    setresultsSearch(fuse.search(nameSearch));
  }, [nameSearch]);

  // When submitting, select the first result and go to his profile
  const searchUser = (event) => {
    event.preventDefault();

    router.push(`/user/${fuse.search(nameSearch)[0].item.userID}`);
  };

  // Shows results by returning a list of 'Links'. Max 8 results.
  function showResults() {
    return resultsSearch.map((result, index) => {
      if (index <= 8) {
        return (
          <Link href={`/user/${result.item.userID}`}>
            <a className="result">
              <img src={result.item.avatar} alt={result.item.nickname} />
              <div className="info">
                <h1>{formatNick(result.item.nickname.length < 2 ? result.item.usertag.split('#')[0] || result.item.userID : result.item.nickname, 11)}</h1>
                <h2>
                  {result.item.usertag && (`#${result.item.usertag.split('#')[1]}`)}
                </h2>
              </div>
            </a>
          </Link>
        );
      }
    });
  }

  return (
    <SearchInputWrapper>
      <div id="input">
        <form action="submit" onSubmit={searchUser}>
          <input
            style={{ 
              border: `${page === '/' && '1px solid #D2D2D2'}`,
              borderRight: '0px',
            }}
            type="text"
            autoComplete="off"
            onChange={(i) => setNameSearch(i.target.value)}
            onFocus={() => setisInputFocus(true)}
            onBlur={() => {
              setTimeout(() => setisInputFocus(false), 120);
            }}
            placeholder="Pesquise membros"
            name="searchmembers"
          />
          <button disabled={nameSearch.length === 0} type="submit" style={{ 
              border: `${page === '/' && '1px solid #D2D2D2'}`,
              borderLeft: '0px',
            }}>
            <img src="/icons/lupa.svg" alt="Lupa" className="lupa" />
          </button>
        </form>
        <div className="results">
          {(resultsSearch.length === 0 && isInputFocus) && (<div className="no-results">Sem resultados</div>)}
          {(resultsSearch.length !== 0 && isInputFocus) && showResults()}
        </div>
      </div>
    </SearchInputWrapper>
  );
}

export default SearchInput;
