/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import db from '../db.json';
import 'nprogress/nprogress.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    -webkit-overflow-scrolling:touch;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    background-color: ${({ theme }) => theme.colors.blacksecundary};
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html {
    overflow-y: scroll;
  }
  html, body {
    min-height: 100vh;
    overflow-x: hidden;

    @keyframes appear {
      from { 
        opacity: 0;
        transform: translateY(20px);
      }
      to   { 
        opacity: 1;
        transform: translateY(0px);
      }
    }

    /* Firefox < 16 */
    @-moz-keyframes appear {
      from { 
        opacity: 0;
        transform: translateY(20px);
      }
      to   { 
        opacity: 1;
        transform: translateY(0px);
      }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes appear {
      from { 
        opacity: 0;
        transform: translateY(20px);
      }
      to   { 
        opacity: 1;
        transform: translateY(0px);
      }
    }

    /* Internet Explorer */
    @-ms-keyframes appear {
      from { 
        opacity: 0;
        transform: translateY(20px);
      }
      to   { 
        opacity: 1;
        transform: translateY(0px);
      }
    }

    /* Opera < 12.1 */
    @-o-keyframes appear {
      from { 
        opacity: 0;
        transform: translateY(20px);
      }
      to   { 
        opacity: 1;
        transform: translateY(0px);
      }
    }

    @keyframes wait {
      from { 
        opacity: 0;
      }
      to { 
        opacity: 0;
      }
    }
  }
  html::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.blacksecundary};
  }
  html::-webkit-scrollbar {
      width: 6px;
      background: ${({ theme }) => theme.colors.blackprimary};
  }
  html::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.whiteprimary};
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const theme = db.theme;

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Blinker:wght@100;200;300;400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Solway:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Sulphur+Point:wght@300;400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        <title>Poeira Cósmica</title>
        <meta name="title" content="Poeira Cósmica | Servidor de Discord" />
        <meta name="description" content="Poeira Cósmica é um servidor de Discord com uma comunidade diversa que preza pela ciência, filosofia... e humor." />

        <meta name="a.validate.01" content="d78a2b2e1424e54096f7cff7384fe0534346" />
        <script data-ad-client="ca-pub-5541508909226142" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/pple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content={db.theme.colors.primary} />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" content={db.theme.colors.primary} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Poeira Cósmica" />
        <meta property="og:url" content="https://poeiracosmica.com" />
        <meta property="og:title" content="Poeira Cósmica | Servidor de Discord" />
        <meta property="og:description" content="Poeira Cósmica é um servidor de Discord com uma comunidade diversa que preza pela ciência, filosofia... e humor." />
        <meta property="og:image" content="https://cdn.discordapp.com/banners/463385509717082113/16f2efddc858458f073fbe51b48a75fb.png?size=2048" />
      
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://poeiracosmica.com',
            site_name: 'Poeira Cósmica',
          }}
          twitter={{
            handle: '@lukefl_',
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
