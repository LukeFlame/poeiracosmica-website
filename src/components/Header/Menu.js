/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

// Styles of the component
// Responsive desktop/mobile
const MenuWrapper = styled.div`
  .menu-container {
      button.menu {
        z-index: 100;
        background-color: rgba(0,0,0,0);
        border: 0;
        fill: ${({ theme }) => theme.colors.whiteprimary};
        cursor: pointer;
        width: 32px;
        height: 32px;
        display: none;
        align-items: center;
        justify-content: center;
        margin-left: 8px;
        outline: none;
        transition: .1s;

        svg {
          width: 32px;
          height: 32px;
        }
      }

      nav#menu {
        width: auto;
        display: flex;
        align-items: center;
        z-index: 30;

        ul {
          flex: 1;
          align-items: center;
          display: grid;
          list-style: none;
          grid-template-rows: 1fr;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 50px;
          height: 40px;
          justify-items: right;

          li {
            img {
              width: 40px;
              height: 40px;
            }
            a {
              font-size: 0;
            }
            :hover {
              transform: translateY(-1.5px);
            }
          }
        }
      }
  }

    button.menu:hover {
      fill: ${({ theme }) => theme.colors.whitesecundary};
    }

  @media(max-width: 830px) {
    .menu-container {
      display: flex;

      nav#menu {
        width: 180px;
        height: 0px;
        overflow: auto;
        position: absolute;
        top: 18px;
        right: 5%;
        border-radius: 5px;

        ul {
          align-items: center;
          display: flex;
          flex-direction: column;
          list-style: none;
          z-index: 50;
          width: 100%;
          padding: 40px 0 0 0;
          border-radius: 30px 5px 30px 5px;
          margin: 0;
          height: auto;
          gap: 0px;
          background-color: ${({ theme }) => theme.colors.blackprimary};
          transition: 125ms ease-in;

          li:first-child {
            border-top: 1px solid ${({ theme }) => theme.colors.blacksecundary};
          }

          li:last-child {
            border-bottom: none;
            border-radius: 0 0 30px 5px;
          }
          
          li {
            width: 100%;
            border-bottom: 1px solid ${({ theme }) => theme.colors.blacksecundary};
            img {
              width: 30px;
              height: 30px;
              margin-right: 8px;
            }

            a {
              padding: 0.6rem;
              width: 100%;
              height: 100%;
              text-decoration: none;
              margin: 0;
              color: ${({ theme }) => theme.colors.whiteprimary};
              font-family: 'Blinker', sans-serif;
              font-size: 22px;
              font-weight: 400;
            }
            a:hover {
              opacity: 1;
              transform: none;
            }
          }

          li:hover {
            opacity: 1;
            background-color: ${({ theme }) => theme.colors.secundary};
            transform: none;
          }
        }
      }

      nav#menu.visible {
        z-index: 50;
        height: min-content;
      }

      button.menu {
        display: flex;
      }
    }
  }
`;

// Receives data from Header
function Menu() {
  // State responsible for saying whether the menu (mobile) is open or not
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <MenuWrapper>
      <div className="menu-container">
        <button
          type="button"
          className="menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          onBlur={() => setTimeout(() => setIsMenuOpen(false), 120)}
        >
          {!isMenuOpen && (
            <svg viewBox="0 0 100 80" width="30" height="30">
              <rect width="100" height="15" />
              <rect y="30" width="100" height="15" />
              <rect y="60" width="100" height="15" />
            </svg>
          )}

          {isMenuOpen && <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" /></svg>}
        </button>
        <nav id="menu" className={isMenuOpen ? 'visible' : ''}>
          <ul>
          <li className="link">
              <Link href="https://discord.gg/MKTrrE2">
                <a target="__blank">
                  <img src="/icons/Discord.svg" alt="Discord" title="Discord" />
                  Discord
                </a>
              </Link>
            </li>
            <li className="link">
              <Link href="https://www.tiktok.com/@poeiracomsica">
                <a target="__blank">
                  <img src="/icons/TikTok.svg" alt="TikTok" title="TikTok" />
                  TikTok
                </a>
              </Link>
            </li>
            <li className="link">
              <Link href="/rankings">
                <a>
                  <img src="/icons/Rankings.svg" alt="Rankings" title="Rankings" />
                  Rankings
                </a>
              </Link>
            </li>
            <li className="link">
              <Link href="/sobre">
                <a>
                  <img src="/icons/Ajuda.svg" alt="About" title="Sobre" />
                  Sobre
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </MenuWrapper>
  );
}

export default Menu;
