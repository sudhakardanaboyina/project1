import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Hireme from './components/Hireme/Hireme';

const App = () => {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <div id="home"><Hero/></div>
        <div id="skills"><Skills/></div>
        <div id="workexperience"><WorkExperience/></div>
        <div id="contactme"><ContactMe/></div>
        <div id="hireme"><Hireme/></div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
