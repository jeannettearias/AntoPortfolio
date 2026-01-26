import '../styles/App.scss';
import Header from './layout/Header';
import Landing from './landing/Landing';
import { useState } from 'react';

import heroData from '../data/heroData.json';
import SkillsData from '../data/skillsData.json';
import ExpData from '../data/GroupExp.json';
import StudyData from '../data/GroupStudy.json';
import ProjecsData from '../data/Projects.json';

function App() {

  // state to projects from JSON data
  const [activeProjects, setActiveProjects] = useState(ProjecsData.filter(project => project.active === true));

  // state to skills from JSON data
  const [activeCards, setActiveCards] = useState(SkillsData.filter(card => card.active === true));
  // State for experience from JSON data
  const [activeExp, setActiveExp] = useState(ExpData ? ExpData : []);

  // State for study from JSON data
  const [activeStudy, setActiveStudy] = useState(StudyData ? StudyData : []);


  return (
    <>
      <section className="body">
        <Header />

        <Landing
          heroData={heroData}

          SkillsData={activeCards}
          activeExp={activeExp}
          activeStudy={activeStudy}

          activeProjects={activeProjects}

        />

      </section>
    </>
  )
}

export default App;
