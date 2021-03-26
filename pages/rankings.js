/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';

import { NextSeo as Head } from 'next-seo';
import { Transition } from 'react-transition-group';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import PagesMain from '../src/components/PagesMain';
import Widget from '../src/components/Widget';
import PagesHeader from '../src/components/PagesHeader';
import LateralComponentsPages from '../src/components/LateralComponentsPages';
import MenuOption from '../src/components/MenuOption';
import RankTitle from '../src/components/RankTitle';
import RankPosition from '../src/components/RankPosition';
import ScrollToTheTopButton from '../src/components/ScrollToTheTopButton';

// Rankings page
// <Head> simulates the head tag of the html
// Contains a menu that changes the contents of the Widget.Content and Widget.Tip
// Shows the top 25 of each ranking within the Widget.Content
function Rankings({
  dataExp, dataAtoms, dataVotes, dataSearch,
}) {
  // Uses state to determine which option is selected
  const [optionSelected, setOptionSelected] = React.useState('XP');
  const [inProp, setInProp] = React.useState(true);

  // Transition settings
  const defaultStyle = {
    transition: `opacity 230ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <>
      <Head
        title="Rankings | Poeira Cósmica"
        description="Aqui se encontram os membros destaque do Poeira Cósmica, classificados por maior nível e experiência, assim como átomos e votos."
        openGraph={{
          url: 'https://poeiracosmica.vercel.app/rankings',
          title: 'Rankings do Poeira Cósmica: As estrelas em destaque',
          description: 'Aqui se encontram os membros destaque do Poeira Cósmica, classificados por maior nível e experiência, assim como átomos e votos.',
          images: [
            {
              url: 'https://poeiracosmica.vercel.app/images/PoeiraCosmica.jpg',
              width: 1366,
              height: 768,
              alt: 'Poeira Cósmica Banner Art',
            },
            {
              url: 'https://poeiracosmica.vercel.app/logo.gif',
              width: 100,
              height: 100,
              alt: 'Poeira Cósmica Logo Art',
            },
            {
              url: 'https://poeiracosmica.vercel.app/HomeLogo.png',
              width: 1920,
              height: 1080,
              alt: 'Poeira Cósmica Main Logo Art',
            },
          ],
        }}
      />
      <ScrollToTheTopButton />
      <Header data={dataSearch} />
      <PagesHeader>Rankings</PagesHeader>
      <PagesMain>
        <LateralComponentsPages>
          <Widget.Menu>
            <MenuOption
              onClick={() => {
                if (optionSelected !== 'XP') {
                  setInProp(false);
                  setTimeout(() => {
                    setInProp(true);
                    setOptionSelected('XP');
                  }, 230);
                }
              }}
              className={optionSelected === 'XP' && 'selected'}

            >
              <img src={optionSelected === 'XP' ? '/icons/XpIcon-selected.svg' : '/icons/XpIcon.svg'} alt="XP Icon" />
              Experiência
            </MenuOption>
            <MenuOption
              onClick={() => {
                if (optionSelected !== 'ATOMS') {
                  setInProp(false);
                  setTimeout(() => {
                    setInProp(true);
                    setOptionSelected('ATOMS');
                  }, 230);
                }
              }}
              className={optionSelected === 'ATOMS' && 'selected'}
            >
              <img src={optionSelected === 'ATOMS' ? '/icons/AtomIcon-selected.svg' : '/icons/AtomIcon.svg'} alt="Atom Icon" />
              Átomos
            </MenuOption>
            <MenuOption
              onClick={() => {
                if (optionSelected !== 'VOTES') {
                  setInProp(false);
                  setTimeout(() => {
                    setInProp(true);
                    setOptionSelected('VOTES');
                  }, 230);
                }
              }}
              className={optionSelected === 'VOTES' && 'selected'}
            >
              <img src={optionSelected === 'VOTES' ? '/icons/VoteIcon-selected.svg' : '/icons/VoteIcon.svg'} alt="Vote Icon" />
              Votos
            </MenuOption>
          </Widget.Menu>
          <Widget.Tip>
            <Transition in={inProp} timeout={230} unmountOnExit>
              {state => (
                <div className="fade-transition" style={{
                  flexDirection: 'column',
                  display: 'flex',
                  alignItems: 'center',
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}>
                  {optionSelected === 'XP' && <img src="/icons/XpIcon.svg" alt="Info" />}
                  {optionSelected === 'ATOMS' && <img src="/icons/AtomIcon.svg" alt="Info" />}
                  {optionSelected === 'VOTES' && <img src="/icons/VoteIcon.svg" alt="Info" />}
                  <p className="info-text">
                    {optionSelected === 'XP' && 'Cada minuto conversando no bate papo rende 20 xp.'}
                    {optionSelected === 'ATOMS' && 'Cada minuto falando no bate papo rende 17 átomos.'}
                    {optionSelected === 'VOTES' && 'Cada voto premia com 4 mil átomos. No 50º voto recebe uma surpresa.'}
                  </p>
                  {optionSelected === 'XP' && (
                    <div id="content">
                      <div className="role-card">
                        <span>NÍVEL 5</span>
                        <div className="pseudocientista">💻・PseudoCientista</div>
                      </div>
                      <div className="role-card">
                        <span>NÍVEL 10</span>
                        <div className="cientistamirim">🔮・Cientista mirim</div>
                      </div>
                      <div className="role-card">
                        <span>NÍVEL 15</span>
                        <div className="prodigio">📡・Prodígio</div>
                      </div>
                      <div className="role-card">
                        <span>NÍVEL 20</span>
                        <div className="viajantedotempo">🚀・Viajante do tempo</div>
                      </div>
                      <div className="role-card">
                        <span>NÍVEL 30</span>
                        <div className="cientistacaotico">💥・Cientista caótico</div>
                      </div>
                      <div className="role-card">
                        <span>NÍVEL 40</span>
                        <div className="sapiensquantico">🔎・Sapiens Quântico</div>
                      </div>
                      <div className="role-card">
                        <span>NÍVEL 50</span>
                        <div className="demoniodelaplace">⚡・Demônio de Laplace</div>
                      </div>
                    </div>
                  )}
                  {optionSelected === 'ATOMS' && ''}
                  {optionSelected === 'VOTES' && (
                    <a href="https://top.gg/servers/463385509717082113/vote" target="__blank" className="vote-button">VOTAR</a>
                  )}
                </div>
              )}
            </Transition>
          </Widget.Tip>
        </LateralComponentsPages>
        <Widget.Content>
          <Transition in={inProp} timeout={230} unmountOnExit>
            {state => (
              <div className="fade-transition" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                ...defaultStyle,
                ...transitionStyles[state]
              }}>
                <RankTitle rank={optionSelected} />
                {optionSelected === 'XP' && dataExp.map((data, index) => <RankPosition key={data.userID} option="XP" data={data} pos={index + 1} />)}
                {optionSelected === 'ATOMS' && dataAtoms.map((data, index) => <RankPosition key={data.userID} option="ATOMS" data={data} pos={index + 1} />)}
                {optionSelected === 'VOTES' && dataVotes.map((data, index) => <RankPosition key={data.userID} option="VOTES" data={data} pos={index + 1} />)}
              </div>
            )}
          </Transition>
        </Widget.Content>
      </PagesMain>
      <Footer />
    </>
  );
}

// Calls database data to the rankings and search bar
// Totally static and updated every 15s
export async function getStaticProps() {
  const res = await fetch('https://poeiracosmica.vercel.app/api/data');
  const { data } = await res.json();

  const resSearch = await fetch(`https://poeiracosmica.vercel.app/api/search`);
  const allDataSearch = await resSearch.json();

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
      dataExp: data.dataExp,
      dataAtoms: data.dataAtoms,
      dataVotes: data.dataVotes,
      dataSearch: allDataSearch.data,
    },
    revalidate: 15,
  };
}
export default Rankings;
