/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArticleJsonLd, NextSeo as Head } from 'next-seo';
import { Transition } from 'react-transition-group';
import PagesMain from '../src/components/PagesMain';
import PagesHeader from '../src/components/PagesHeader';
import Widget from '../src/components/Widget';
import MenuOption from '../src/components/MenuOption';
import LateralComponentsPages from '../src/components/LateralComponentsPages';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import ScrollToTheTopButton from '../src/components/ScrollToTheTopButton';
import formatNick from '../utils/formatNick';

// About page
// <Head> simulates the head tag of the html
// <ArticleJsonLd> helps google identify the page
// Contains a menu that changes the contents of the Widget.Content
// Shows a title, image and text for each option
function About({ dataStaff, dataSearch }) {
  // Uses state to determine which option is selected
  const [optionSelected, setOptionSelected] = React.useState('ABOUT');
  const [image, setImage] = React.useState('ABOUT');
  const [inProp, setInProp] = React.useState(true);

  // Get the title of the article
  function getTitle() {
    switch (optionSelected) {
      case 'ABOUT': return 'Sobre a comunidade';
      case 'BOTSITE': return 'Bots e site do Poeira';
      case 'ECONOMY': return 'Economia e loja';
      case 'STAFF': return 'Funcionários';
      default: break;
    }
  }

  // Get the image of the article
  function getImage() {
    switch (image) {
      case 'ABOUT': return '/images/PoeiraCosmica.jpg';
      case 'BOTSITE': return '/images/Voyager.jpg';
      case 'ECONOMY': return '/images/Loja.jpg';
      case 'STAFF': return '/images/Staff.jpg';
      case 'NONE': return '/images/Blank.png';
      default: break;
    }
  }

  // Get the text of the article
  function getText() {
    switch (optionSelected) {
      case 'ABOUT': return (
        <>
          <p>Tudo começou em julho de 2018, quando o youtuber tropia criou a comunidade para interagir melhor com os inscritos de seu canal. Passou se os tempos, o youtuber preferiu manter seu foco em tributos mais essenciais, decidindo assim que seria mais viável passar a liderança para a equipe oficial de administração e moderação do servidor. E assim, em dezembro de 2020, passou a posse para a equipe de administração, e assim nasceu o Poeira Cósmica.</p>
          <p>Com uma equipe administrativa empenhada e membros singulares, o Poeira Cósmica busca acima de tudo, acolher os mais diversos indivíduos, sejam aqueles que só querem uma conversa de madrugada, que postam histórias contagiantes, ou os que tem ideias fantasticamente brilhantes.</p>
          <p>Possuímos eventos periódicos com desafios ou participações em áreas distintas, seja na escrita, na arte, na criatividade, no conhecimento, entre outros. Forte aliada aos eventos realizados na rede, a economia própria fornece incentivos e regalias aos membros que mais contribuem com o servidor com sua engenhosidade e brilhantismo.</p>
        </>
      );
      case 'BOTSITE': return (
        <>
          <p>Na busca incessante de automatizar algumas funções e melhorar o desempenho de eventos, auxílio na moderação e diversas outras, a staff desenvolveu soluções com o robô Voyager 1, desenvolvido pelo administrador LukeFL_, e com a beneficiência de toda a equipe. O Voyager 1 contém sistemas de economia que permitem aos membros apostar, pagar, lucrar e gastar átomos com cosméticos e benefícios, tudo mesclado com o sistema de experiência e nivelamento, tendo perfil e notificações totalmente customizadas, além de diversas outras funções como sugestões, verificação de novatos, vips, votos e criador de embeds automáticos.</p>
          <p>O site do Poeira Cósmica foi uma ideia posterior que surgiu para uma melhor visualização das informações gerais do servidor, como rankings, perfis e pesquisa de perfis individuais dos membros presentes no servidor.</p>
          <p>Os eventos geralmente contam com bots próprios e customizados para auxiliar, principalmente os enigmas que seguem um roteiro singular e geralmente necessitam de uma organização maior e de espécie autônoma.</p>
          <p>Novas funções e novidades estão sendo desenvolvidas ativamente, sempre visando melhorar e acrescentar à comunidade. Sugestões são sempre bem vindas, utilize o canal de sugestões no servidor de Discord para nos apoiar com ideias fantásticas.</p>
        </>
      );
      case 'ECONOMY': return (
        <>
          <p>Um diferencial do Poeira Cósmica é sua economia única, totalmente desenvolvida para ser autônoma, mantida e moderada pela equipe administrativa e moderativa. Nossa vistosa moeda de troca se denomina átomo. Com ele, os membros podem ostentar fortunas ou torrar na loja do servidor com cósmeticos, personalizações, vips, multiplicadores de xp, entre outros. Há diversas formas de conseguir átomos, sendo as principais: conversar no bate papo, trabalhar, apostar, votar, profissões e eventos.</p>
          <p>Preços e produtos com exatidão, você pode conferir digitando /loja no canal de comandos do servidor. Os preços podem mudar para se adequar à inflação.</p>
        </>
      );
      case 'STAFF': return (
        <>
          <p>A equipe do Poeira Cósmica é composta por administradores e moderadores constantemente empenhados a melhorarem a comunidade. Cada funcionário possuí uma função respectiva, e sempre suficiente para manter a ordem e estabilidade de tudo.</p>
          <p>Caso possua interesse em fazer parte de nossa equipe, você antes deve se mostrar presente no chat, contribuir positivamente para o servidor com sugestões, denúncias, atividade nos canais de texto e/ou voz. A equipe administrativa está sempre de olhos abertos para novos recrutas.</p>
        </>
      );
      default: break;
    }
  }

  // Transition settings
  const defaultStyle = {
    transition: `opacity 250ms ease-in-out`,
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
        title="Sobre | Poeira Cósmica"
        description="Aqui é contada a história do servidor de Discord, Poeira Cósmica, assim como é explicado a economia, os recursos tecnológicos e a equipe staff."
        openGraph={{
          url: 'https://poeiracosmica.vercel.app/sobre',
          title: 'Sobre o Poeira Cósmica: Entenda como surgiu e os diferenciais',
          description: 'Aqui é contada a história do servidor de Discord, Poeira Cósmica, assim como é explicado a economia, os recursos tecnológicos e a equipe staff.',
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
      <ArticleJsonLd
        url="https://poeiracosmica.vercel.app/sobre"
        title="Sobre o Poeira Cósmica"
        images={[
          'https://poeiracosmica.vercel.app/images/PoeiraCosmica.jpg',
          'https://poeiracosmica.vercel.app/images/Loja.jpg',
          'https://poeiracosmica.vercel.app/images/Staff.jpg',
          'https://poeiracosmica.vercel.app/images/Voyager.jpg',
        ]}
        authorName={['LukeFl_', 'viirussz']}
        publisherName="Poeira Cósmica"
        publisherLogo="https://poeiracosmica.vercel.app/HomeLogo.png"
        description="Aqui é contada a história do servidor de Discord, Poeira Cósmica, assim como é explicado a economia, os recursos tecnológicos e a equipe staff."
      />
      <ScrollToTheTopButton />
      <Header data={dataSearch} />
      <PagesHeader>
        Sobre
      </PagesHeader>
      <PagesMain>
        <LateralComponentsPages>
          <Widget.Menu>
            <div className="grid-options">
              <MenuOption
                onClick={() => {
                  if (optionSelected !== 'ABOUT') {
                    setInProp(false);
                    setImage('NONE')
                    setTimeout(() => {
                      setInProp(true);
                      setOptionSelected('ABOUT');
                      setImage('ABOUT')
                    }, 250);
                  }
                }}
                className={optionSelected === 'ABOUT' && 'selected'}
              >
                <img src={optionSelected === 'ABOUT' ? '/icons/PlanetIcon-selected.svg' : '/icons/PlanetIcon.svg'} alt="XP Icon" />
                Comunidade
              </MenuOption>
              <MenuOption
                onClick={() => {
                  if (optionSelected !== 'BOTSITE') {
                    setInProp(false);
                    setImage('NONE')
                    setTimeout(() => {
                      setInProp(true);
                      setOptionSelected('BOTSITE');
                      setImage('BOTSITE')
                    }, 250);
                  }
                }}
                className={optionSelected === 'BOTSITE' && 'selected'}
              >
                <img src={optionSelected === 'BOTSITE' ? '/icons/RobotIcon-selected.svg' : '/icons/RobotIcon.svg'} alt="Atom Icon" />
                Bot e site
              </MenuOption>
              <MenuOption
                onClick={() => {
                  if (optionSelected !== 'ECONOMY') {
                    setInProp(false);
                    setImage('NONE')
                    setTimeout(() => {
                      setInProp(true);
                      setOptionSelected('ECONOMY');
                      setImage('ECONOMY')
                    }, 250);
                }
                }}
                className={optionSelected === 'ECONOMY' && 'selected'}
              >
                <img src={optionSelected === 'ECONOMY' ? '/icons/CoinIcon-selected.svg' : '/icons/CoinIcon.svg'} alt="Vote Icon" />
                Economia
              </MenuOption>
              <MenuOption
                onClick={() => {
                  if (optionSelected !== 'STAFF') {
                    setInProp(false);
                    setImage('NONE')
                    setTimeout(() => {
                      setInProp(true);
                      setOptionSelected('STAFF');
                      setImage('STAFF')
                    }, 250);
                  }
                }}
                className={optionSelected === 'STAFF' && 'selected'}
              >
                <img src={optionSelected === 'STAFF' ? '/icons/StaffIcon-selected.svg' : '/icons/StaffIcon.svg'} alt="Vote Icon" />
                Staff
              </MenuOption>
            </div>
          </Widget.Menu>
        </LateralComponentsPages>
        <Widget.Content>
          <Transition in={inProp} timeout={250} unmountOnExit>
            {state => (
              <div className="fade-transition" style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}>
                <h1 className="about-title-main">
                  {getTitle()}
                </h1>
                <div className="about-image-main">
                   <Image
                    priority
                    src={getImage()}
                    width={739}
                    height={411}
                    quality={image !== 'NULL' ? 100 : 1}
                  />
                </div>
                <p className="about-text-main">
                  {getText()}
                </p>
                {optionSelected === 'STAFF' && (
                  <div className="staff-members">
                    <h1 className="title">Equipe atual</h1>
                    <div className="cards">
                      <Link href={`/user/${dataStaff[0].userID}`}>
                        <a className="card">
                          <img src={dataStaff[0].avatar} alt="" className="avatar" />
                          <div className="texts">
                            <h2 className="nick">{formatNick(dataStaff[0].nickname, 8)}</h2>
                            <h3 className="info">Administrador desde 2019</h3>
                          </div>
                        </a>
                      </Link>
                      <Link href={`/user/${dataStaff[1].userID}`}>
                        <a className="card">
                          <img src={dataStaff[1].avatar} alt="" className="avatar" />
                          <div className="texts">
                            <h2 className="nick">{formatNick(dataStaff[1].nickname, 8)}</h2>
                            <h3 className="info">Administrador desde 2020</h3>
                          </div>
                        </a>
                      </Link>
                      <Link href={`/user/${dataStaff[2].userID}`}>
                        <a className="card">
                          <img src={dataStaff[2].avatar} alt="" className="avatar" />
                          <div className="texts">
                            <h2 className="nick">{formatNick(dataStaff[2].nickname, 8)}</h2>
                            <h3 className="info">Moderador desde 2020</h3>
                          </div>
                        </a>
                      </Link>
                      <Link href={`/user/${dataStaff[3].userID}`}>
                        <a className="card">
                          <img src={dataStaff[3].avatar} alt="" className="avatar" />
                          <div className="texts">
                            <h2 className="nick">{formatNick(dataStaff[3].nickname, 8)}</h2>
                            <h3 className="info">Moderador desde 2020</h3>
                          </div>
                        </a>
                      </Link>
                      <Link href={`/user/${dataStaff[4].userID}`}>
                        <a className="card">
                          <img src={dataStaff[4].avatar} alt="" className="avatar" />
                          <div className="texts">
                            <h2 className="nick">{formatNick(dataStaff[4].nickname, 8)}</h2>
                            <h3 className="info">Moderador desde 2021</h3>
                          </div>
                        </a>
                      </Link>
                      <Link href={`/user/${dataStaff[5].userID}`}>
                        <a className="card">
                          <img src={dataStaff[5].avatar} alt="" className="avatar" />
                          <div className="texts">
                            <h2 className="nick">{formatNick(dataStaff[5].nickname, 8)}</h2>
                            <h3 className="info">Conselheiro desde 2021</h3>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </Transition>
        </Widget.Content>
      </PagesMain>

      <Footer />
    </>
  );
}

// Calls database data to the staff info in staff option and search bar
// Totally static and updated every 15s
export async function getStaticProps() { // hugo luke calabi davi kipper luz
  const res = await fetch('https://poeiracosmica.vercel.app/api/users/345624603256684555,258041633789050881,600781695255576586,401368001602912276,521842730171629569,584925271975788554');
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
      dataStaff: data.usersData,
      dataSearch: allDataSearch.data,
    },
    revalidate: 15,
  };
}
export default About;
