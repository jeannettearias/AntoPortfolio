import '../styles/App.scss';
import Header from './layout/Header';
import Landing from './landing/Landing';
import { useState } from 'react';

import heroData from '../data/heroData.json';
import servicesData from '../data/servicesData.json';
import ExpData from '../data/GroupExp.json';
import StudyData from '../data/GroupStudy.json';
import ProjecsData from '../data/Projects.json';
import testimonyData from '../data/testimonyData.json';
import contactData from '../data/contactData.json';

function App() {

  // state to projects from JSON data
  const [activeProjects, setActiveProjects] = useState(ProjecsData.filter(project => project.active === true));

  // state to skills from JSON data
  const [activeCards, setActiveCards] = useState(servicesData.filter(card => card.active === true));

  // State for experience from JSON data
  const [activeExp, setActiveExp] = useState(ExpData ? ExpData : []);

  // State for study from JSON data
  const [activeStudy, setActiveStudy] = useState(StudyData ? StudyData : []);

  // State for testimony from JSON data
  const [activeTestimony, setActiveTestimony] = useState(testimonyData ? testimonyData : []);

  // State for contact from JSON data
  const [activeContact, setActiveContact] = useState(contactData ? contactData : []);

  return (
    <>
      <section className="body">
        <Header />

        <Landing
          heroData={heroData}

          services={activeCards}
          activeExp={activeExp}
          activeStudy={activeStudy}

          activeProjects={activeProjects}

          activeTestimony={activeTestimony}

          activeContact={activeContact}

        />

      </section>
    </>
  )
}

export default App;
