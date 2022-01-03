import React from 'react';
import Header from '../../Shared/Header/Header';
import '../../Shared/Footer/Footer.css';
import Footer from '../../Shared/Footer/Footer';
// import '../HomePageBanner/HomePageBanner.css';
import HomePageBanner from '../HomePageBanner/HomePageBanner';
import HomePageAbout from '../HomePageAbout/HomePageAbout';
import HomePageComments from '../HomePageComments/HomePageComments';
import HomePageBooks from '../HomePageBooks/HomePageBooks';
import HomePageMembers from '../HomePageMembers/HomePageMembers';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <HomePageBanner></HomePageBanner>
      <HomePageAbout></HomePageAbout>
      <HomePageBooks></HomePageBooks>
      <HomePageMembers></HomePageMembers>
      <HomePageComments></HomePageComments>
      <Footer></Footer>
    </div>
  );
};

export default Home;