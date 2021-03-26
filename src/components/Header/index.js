/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import SearchInput from './SearchInput';
import Menu from './Menu';

// Styles of the component
// Responsive desktop/mobile
const HeaderWrapper = styled.header`
  display: flex;
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 76px;
  justify-content: center;

  div#content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 76px;
    padding: 0 6%;
    transition: .2s;
  }
  a,
  .linklogo {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: .2s;
    :hover {
      transform: translateY(-1.5px);
    }

    .logogif {
      border-radius: 50px;
    }
    
    cursor: pointer;
    h1 {
        color: ${({ theme }) => theme.colors.whitesecundary};
        font-family: 'Blinker', sans-serif;
        font-size: 22px;
        font-weight: 400;
        width: fit-content;

        margin: 0 0 0 20px;
    }
    &:hover {
      opacity: .8;
    }
  }

  @media(max-width: 1124px) {
    #content .linklogo h1 {
      font-size: 18px;
    }
  }

  @media(max-width: 980px) {
    #content .linklogo h1 {
      display: none;
    }

  }
`;

// Receives data from pages
function Header({ data }) {
  const router = useRouter();
  return (
    <HeaderWrapper>
      <div id="content">
        <Link href="/">
          <a className="linklogo">
            <Image
              priority
              className="logogif"
              src="/logo.gif"
              alt="Logo Poeira Cósmica"
              width={50}
              height={50}
              title="Início | Poeira Cósmica"
            />
            <h1>Poeira Cósmica</h1>
          </a>
        </Link>
        <SearchInput data={data} page={router.pathname} />
        <Menu />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
