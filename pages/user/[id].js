/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ms from 'parse-ms';

import PagesMain from '../../src/components/PagesMain';
import PagesHeader from '../../src/components/PagesHeader';
import Widget from '../../src/components/Widget';
import Footer from '../../src/components/Footer';
import MessagesGraph from '../../src/components/MessagesGraph';
import Header from '../../src/components/Header';
import ScrollToTheTopButton from '../../src/components/ScrollToTheTopButton';
import formatNick from '../../utils/formatNick';

// User page
// <Head> simulates the head tag of the html
// Contains a header with avatar, nickname and when it entered the server
// It also contains boxes with user information, all coming from the database
function User({ memberData, dataSearch, medailsUser }) {
  // According to the user's medals,
  // this function creates an image with a formatted title or a 'noMedail' div
  function getMedails(medails) {
    return (
      <div className="medails-data">
        {medails[0] ? <Image src={medails[0].link} layout="fixed" width={50} height={50} className="medail" title={medails[0].name[0].toUpperCase() + medails[0].name.substr(1)} /> : <div className="noMedail" />}
        {medails[1] ? <Image src={medails[1].link} layout="fixed" width={50} height={50} className="medail" title={medails[1].name[0].toUpperCase() + medails[1].name.substr(1)} /> : <div className="noMedail" />}
        {medails[2] ? <Image src={medails[2].link} layout="fixed" width={50} height={50} className="medail" title={medails[2].name[0].toUpperCase() + medails[2].name.substr(1)} /> : <div className="noMedail" />}
        {medails[3] ? <Image src={medails[3].link} layout="fixed" width={50} height={50} className="medail" title={medails[3].name[0].toUpperCase() + medails[3].name.substr(1)} /> : <div className="noMedail" />}
        {medails[4] ? <Image src={medails[4].link} layout="fixed" width={50} height={50} className="medail" title={medails[4].name[0].toUpperCase() + medails[4].name.substr(1)} /> : <div className="noMedail" />}
        {medails[5] ? <Image src={medails[5].link} layout="fixed" width={50} height={50} className="medail" title={medails[5].name[0].toUpperCase() + medails[5].name.substr(1)} /> : <div className="noMedail" />}
        {medails[6] ? <Image src={medails[6].link} layout="fixed" width={50} height={50} className="medail" title={medails[6].name[0].toUpperCase() + medails[6].name.substr(1)} /> : <div className="noMedail" />}
        {medails[7] ? <Image src={medails[7].link} layout="fixed" width={50} height={50} className="medail" title={medails[7].name[0].toUpperCase() + medails[7].name.substr(1)} /> : <div className="noMedail" />}
      </div>
    );
  }

  // Formats dates for better viewing
  function formatDate(template, date) {
    const specs = 'YYYY:MM:DD:HH:mm:ss'.split(':');
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);
    return date.toISOString().split(/[-:.TZ]/).reduce((temp, item, i) => temp.split(specs[i]).join(item), template);
  }

  // Formats atoms for better visualization
  function formatAtoms(atoms) {
    let res = atoms.toLocaleString('pt-br', { maximumFractionDigits: 1 });

    if (atoms > 9999 && atoms < 999999) {
      res = `${(Math.ceil(atoms) / 1000).toLocaleString('pt-br', { maximumFractionDigits: 1 })}K`;
    } else if (atoms >= 999999) {
      res = `${(Math.ceil(atoms) / 1000000).toLocaleString('pt-br', { maximumFractionDigits: 1 })}Mi`;
    }

    return res;
  }

  // Get the current experience equivalent to the current level
  function currentExp(xp, level) {
    let xpLevel = 0;

    for (let lvl = 0; lvl <= parseInt(level); lvl++) {
      xpLevel += 500 * lvl;
    }

    return xp - xpLevel;
  }

  // Get the experience needed to level up
  function expToNextLevel(level) {
    let xp = 0;
    let xpNextLevel = 0;

    for (let lvl = 0; lvl <= parseInt(level) + 1; lvl++) {
      xpNextLevel += 500 * lvl;
    }

    for (let lvl = 0; lvl <= parseInt(level); lvl++) {
      xp += 500 * lvl;
    }

    return xpNextLevel - xp;
  }

  // Get the percentage of experience for the level
  function expPercentage(xp, level) {
    let xpPreviousLevel = 0;
    let xpNextLevel = 0;

    for (let lvl = 0; lvl <= parseInt(level) + 1; lvl++) {
      xpNextLevel += 500 * lvl;
    }

    for (let lvl = 0; lvl <= parseInt(level); lvl++) {
      xpPreviousLevel += 500 * lvl;
    }

    return Math.floor((xp - xpPreviousLevel) / ((xpNextLevel - xpPreviousLevel) / 100));
  }

  // Renames the vip plan or multiplier for better viewing
  function getPlanName(plan) {
    switch (plan) {
      case 'none':
        return '-';
      case 'vip1':
        return 'VIP';
      case 'vip2':
        return 'VIP+';
      case 'vip3':
        return 'BOOSTER';
      case '2xp':
        return '2x';
      case '3xp':
        return '3x';
      case '2atomo':
        return '2x';
      case '3atomo':
        return '3x';
      default:
        break;
    }
  }

  // Calculates the remaining time of the vip or multiplier plans
  function getTimeRemain(initialTime, duration) {
    if (initialTime === 'none') return '-';

    const timeset = ms(duration - (Date.now() - initialTime));
    return `${timeset.days}d ${timeset.hours}h`;
  }

  return (
    <>
      <Head>
        <title>
          {formatNick(memberData.nickname.length < 2 ? memberData.usertag.split('#')[0] || memberData.userID : memberData.nickname, 12)}
          {' '}
          | Poeira Cósmica
        </title>
      </Head>
      <ScrollToTheTopButton />
      <Header data={dataSearch} />
      <PagesHeader />
      <PagesMain>
        <div id="top-content">
          <div id="avatar-image">
            <Image
              priority
              className="avatar-image"
              width={200}
              height={200}
              layout="intrinsic"
              title={memberData.nickname}
              src={memberData.avatar}
            />
          </div>
          <div id="infos">
            <h1 className="nickname">
              {formatNick(memberData.nickname.length < 2 ? memberData.usertag.split('#')[0] || memberData.userID : memberData.nickname, 18)}
            </h1>
            <h3 className="since">
              {memberData.since !== 'Não se encontra no servidor' ? `No servidor desde ${formatDate('DD/MM/YYYY, às HH:mm', memberData.since)}` : memberData.since}
            </h3>
          </div>
        </div>
        <Widget.UserContainer>
          <Widget.UserBox className="xp-level">
            <div className="circle-level">
              <h3 className="title-level">NÍVEL</h3>
              <h2 className="title-data">{memberData.level}</h2>
            </div>
            <div className="xp-bar">
              <div className="info-xp-bar">
                <h2 className="xp-title">XP</h2>
                <h3 className="xp-data">
                  {currentExp(memberData.xp, memberData.level)}
                  <span>
                    /
                    {expToNextLevel(memberData.level)}
                  </span>
                </h3>
              </div>
              <div className="progress-bar">
                <h3 className="percent">
                  {expPercentage(memberData.xp, memberData.level)}
                  %
                </h3>
                <div className="progress" style={{ width: `${expPercentage(memberData.xp, memberData.level)}%` }} />
              </div>
            </div>
          </Widget.UserBox>
          <Widget.UserBox className="atoms-store">
            <div className="atoms">
              <h2 className="atoms-title">ÁTOMOS</h2>
              <div className="atoms-data-container">
                <h1 className="atoms-data">{formatAtoms(memberData.atoms)}</h1>
                <Image
                  src="/icons/BigAtom.svg"
                  width={120}
                  height={120}
                  className="atom-image"
                />
              </div>
            </div>
            <div className="last-orders">
              <h2 className="last-orders-title">ÚLTIMAS COMPRAS</h2>
              <div className="last-orders-data">
                {memberData.lastProducts[0]
                  ? memberData.lastProducts.map((product) => (
                    <p key={product.index} className="reg">
                      ・
                      {product}
                    </p>
                  ))
                  : (
                    <p className="reg">
                      ・
                      <i>Nenhuma compra</i>
                    </p>
                  )}
              </div>
            </div>
          </Widget.UserBox>
          <Widget.UserBox className="votes">
            <Image
              src="/icons/VoteIconBig.svg"
              width={150}
              height={150}
            />
            <div className="votes-data">
              <div className="votes-data-total">
                <h2 className="votes-data-total-title">TOTAL</h2>
                <h1 className="votes-data-total-data">{memberData.votes}</h1>
              </div>
            </div>
          </Widget.UserBox>
          <Widget.UserBox className="messages">
            <MessagesGraph msgs={memberData.messages} />
          </Widget.UserBox>
          <Widget.UserBox className="medails">
            <h1 className="title">MEDALHAS</h1>
            {getMedails(medailsUser)}
          </Widget.UserBox>
          <Widget.UserBox className="vips-boosters">
            <div className="booster-xp">
              <Image src="/icons/BoosterXpIcon.svg" width={120} height={120} title="Multiplicador de XP" />
              <div className="data">
                <div className="active-plan">
                  <h2 className="active-plan-title">PLANO ATIVO</h2>
                  <h1 className="active-plan-data">{getPlanName(memberData.boost.xp.plan)}</h1>
                </div>
                <div className="time-rem">
                  <h2 className="time-rem-title">TEMPO RESTANTE</h2>
                  <h1 className="time-rem-data">
                    {getTimeRemain(memberData.boost.xp.time, memberData.boost.xp.duration)}
                  </h1>
                </div>
              </div>
            </div>
            <div className="vip">
              <Image src="/icons/VipIcon.svg" width={120} height={120} title="VIP" />
              <div className="data">
                <div className="active-plan">
                  <h2 className="active-plan-title">PLANO ATIVO</h2>
                  <h1 className="active-plan-data">{getPlanName(memberData.vip.plan)}</h1>
                </div>
                <div className="time-rem">
                  <h2 className="time-rem-title">TEMPO RESTANTE</h2>
                  <h1 className="time-rem-data">
                    {getTimeRemain(memberData.vip.time, memberData.vip.duration)}
                  </h1>
                </div>
              </div>
            </div>
            <div className="booster-atoms">
              <Image src="/icons/BoosterAtomsIcon.svg" width={120} height={120} title="Multiplicador de Átomos" />
              <div className="data">
                <div className="active-plan">
                  <h2 className="active-plan-title">PLANO ATIVO</h2>
                  <h1 className="active-plan-data">{getPlanName(memberData.boost.atom.plan)}</h1>
                </div>
                <div className="time-rem">
                  <h2 className="time-rem-title">TEMPO RESTANTE</h2>
                  <h1 className="time-rem-data">
                    {getTimeRemain(memberData.boost.atom.time, memberData.boost.atom.duration)}
                  </h1>
                </div>
              </div>
            </div>
          </Widget.UserBox>
        </Widget.UserContainer>
      </PagesMain>
      <Footer />
    </>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(`https://poeiracosmica.com/api/data`);
//   const { data } = await res.json();

//   const paths = data.dataSearch.map(user => ({
//     params: { id: user.userID },
//   }))

//   return { paths, fallback: false };
// }

// According to the id entered in the parameters, it searches the data in the database
// It is not static, it updates whenever the page is reloaded
export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`https://poeiracosmica.com/api/user/${id}`);
  const { data } = await res.json();

  const resSearch = await fetch(`https://poeiracosmica.com/api/search`);
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
      memberData: data.userData,
      medailsUser: data.medailsUser,
      dataSearch: allDataSearch.data,
    },
  };
}

export default User;
