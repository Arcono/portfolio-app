import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProjectList from './components/ProjectList/ProjectList'
import Introduction from './components/Introduction/Introduction'
import SkillBadges from './components/SkillBadges/SkillBadges'
import ContactForm from './components/ContactForm/ContactForm'
import './Home.css'
 
const Home = () => {
    return (
       <div className='home-wrapper'>
           <Navbar/>
           <Introduction/>
           <ProjectList/>
           <SkillBadges/>
           <ContactForm/>
       </div>
    );
}
 
export default Home;

