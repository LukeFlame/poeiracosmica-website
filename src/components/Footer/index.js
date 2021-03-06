/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

// Styles of the component
// Responsive desktop/mobile
const FooterWrapper = styled.footer`
  background-color: #00000000;
  padding: 82px 0 52px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div#icons {
    width: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
  }

  img {
    width: 40px;
    height: 40px;
  }

  a {
    &:hover {
      opacity: .7;
    }
    span {
      text-decoration: none;
    }
  }

  @media(max-width: 1024px) {
    padding: 72px 0 48px 0;
  }

  @media(max-width: 850x) {
    padding: 64px 0 42px 0;
  }

  @media(max-width: 550x) {
    padding: 48px 0 32px 0;
  }
`;

// Simple footer with links to github and discord server
export default function Footer() {
  return (
    <FooterWrapper>
      <div id="icons">
        <a href="https://discord.gg/MKTrrE2">
          <img src="/icons/DiscordIconFooter.svg" alt="Discord Icon" />
        </a>
        <a href="https://www.tiktok.com/@poeiracomsica">
          <img src="/icons/TikTok.svg" alt="TikTok Icon" />
        </a>
        <a href="https://github.com/LukeFlame/poeiracosmica-website">
          <img src="/icons/GithubIconFooter.svg" alt="GitHub Icon" />
        </a>
      </div>
      <p>
        Copyright © 2021 Poeira Cósmica
      </p>
    </FooterWrapper>
  );
}
