/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
import React from 'react';
import { LogoJsonLd, NextSeo as Head } from 'next-seo';

import HomeMain from '../src/components/HomeMain';
import Header from '../src/components/Header';

// Homepage
// <Head> simulates the head tag of the html
// <LogoJsonLd> helps google identify the page
// Basically assembles the Header and the content of the page on HomeMain
export default function Home({ dataSearch, atomsCount, membersCount }) {
  return (
    <>
      <Head
        title="Poeira Cósmica: a comunidade de discord que atravessa galáxias"
        description="O Poeira Cósmica é um servidor de Discord com uma comunidade diversa que preza pela ciência, filosofia... e humor."
        canonical="https://poeiracosmica.com/"
        openGraph={{
          url: 'https://poeiracosmica.com/',
          title: 'Poeira Cósmica: a comunidade de discord que atravessa galáxias',
          description: 'O Poeira Cósmica é um servidor de Discord com uma comunidade diversa que preza pela ciência, filosofia... e humor.',
          images: [
            {
              url: 'https://poeiracosmica.com/images/PoeiraCosmica.jpg',
              width: 1366,
              height: 768,
              alt: 'Poeira Cósmica Banner Art',
            },
            {
              url: 'https://poeiracosmica.com/logo.gif',
              width: 100,
              height: 100,
              alt: 'Poeira Cósmica Logo Art',
            },
            {
              url: 'https://poeiracosmica.com/HomeLogo.png',
              width: 1920,
              height: 1080,
              alt: 'Poeira Cósmica Main Logo Art',
            },
          ],
        }}
        additionalMetaTags={[{
          property: 'dc:creator',
          content: 'LukeFl_',
        }, {
          name: 'application-name',
          content: 'Poeira Cósmica',
        }]}
      />
      <LogoJsonLd
        logo="https://poeiracosmica.com/HomeLogo.png"
        url="https://poeiracosmica.com"
      />
      <div>
        <Header data={dataSearch} />
        <HomeMain
          atoms={atomsCount}
          members={membersCount}
        />
      </div>
    </>
  );
}

// Calls database data to the search bar and the infos of page
// Totally static and updated every 15s
export async function getStaticProps() {
  const res = await fetch('https://poeiracosmica.com/api/data');
  const { data } = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      dataSearch: data.dataSearch,
      atomsCount: data.atomsCount,
      membersCount: data.membersCount,
    },
    revalidate: 30,
  };
}
