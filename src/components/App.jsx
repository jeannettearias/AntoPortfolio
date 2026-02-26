import '../styles/App.scss';
import { useState } from 'react';
import Header from './layout/Header';
import Hero from './landing/Hero';
import Bar from './landing/Bar';
import Services from './landing/Services';
import AboutMe from './landing/Group-sections/AboutMe';
import GroupSections from './landing/Group-sections/GroupSections';
import Footer from './layout/Footer';

import heroJSON from '../data/heroData.json';
import servicesData from '../data/servicesData.json';
import ExpData from '../data/GroupExp.json';
import StudyData from '../data/GroupStudy.json';
import Projects from '../data/Projects.json';
import testimonyData from '../data/testimonyData.json';
import contactJSON from '../data/contactJSON.json';

function App() {

  // state to hero from JSON data
  const [heroData, setActiveHero] = useState(heroJSON ? heroJSON : []);

  // state to services from JSON data
  const [services, setServices] = useState(servicesData ? servicesData : []);

  // State for experience from JSON data
  const [expData, setExpData] = useState(ExpData ? ExpData : []);

  // State for study from JSON data
  const [studyData, setStudyData] = useState(StudyData ? StudyData : []);

  // state to projects from JSON data
  const [ProjectsData, setProjectsData] = useState(Projects ? Projects : []);

  // State for testimony from JSON data
  const [testimony, setTestimony] = useState(testimonyData ? testimonyData : []);

  // State for contact from JSON data
  const [contactData, setContactData] = useState(contactJSON ? contactJSON : []);

  return (

    <section className="body">
      <Header />

      <Hero heroData={heroData} />
      <Bar services={services} />
      <Services services={services} />

      <AboutMe />

      <GroupSections

        expData={expData}
        studyData={studyData}
        services={services}

        ProjectsData={ProjectsData}
        testimony={testimony}
      />
      <Footer
        contactData={contactData} />

    </section>
  )
}

export default App;
