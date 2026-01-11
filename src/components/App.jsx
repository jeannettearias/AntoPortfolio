import '../styles/App.scss';
import Header from './layout/Header';
import Landing from './landing/Landing';
import { useState } from 'react';

import heroData from '../data/heroData.json';
import SkillsData from '../data/skillsData.json';
import ExpData from '../data/GroupExp.json';
import StudyData from '../data/GroupStudy.json';
import ProjecsData from '../data/Projects.json';
import ContactData from '../data/contactData.json';
import ContactForm from '../data/contactForm.json';
import contactCountryData from '../data/contactCountry.json';


function App() {

  // state to projects from JSON data
  const [activeProjects, setActiveProjects] = useState(ProjecsData.filter(project => project.active === true));
  // state to hero from JSON data
  const [heroSectionData, setHeroSectionData] = useState([heroData]);
  // state to skills from JSON data
  const [activeCards, setActiveCards] = useState(SkillsData.filter(card => card.status === 'active'));
  // state to experience from JSON data
  const [expSectionData, setExpSectionData] = useState([ExpData]);
  // state to study from JSON data
  const [studySectionData, setStudySectionData] = useState([StudyData]);
  // state to contact us from JSON data
  const [contactCountryData, setContactCountryData] = useState([]);
  const [contactForm, setContactForm] = useState([ContactForm]);
  const [contactData, setContactData] = useState([ContactData]);


  return (
    <>
      <section className="Home">
        <Header />
      </section>

      <section className="body">
        <Landing
          heroData={heroSectionData}

          SkillsData={activeCards}
          ExpData={expSectionData}
          StudyData={studySectionData}

          activeProjects={activeProjects}

          contactData={contactData}
          contactCountryData={contactCountryData}
          contactForm={contactForm}
        />

      </section>
    </>
  )
}

export default App;
