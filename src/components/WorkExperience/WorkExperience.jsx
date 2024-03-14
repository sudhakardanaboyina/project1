import React from 'react';

import './WorkExperience.css';
import { WORK_EXPERIENCE } from '../Utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';

const WorkExperience = () => {

  
  return (
    <>
      <section className='experience-container'>
        <h5>Work Experience</h5>
        <div className='experience-content'>
          
          
            {WORK_EXPERIENCE.map((item) => (
              <ExperienceCard
                key={item.title}
                title={item.title}
                date={item.date}
                responsibilities={item.responsibilities}
              />
            ))}
         
        </div>
      </section>
    </>
  );
}

export default WorkExperience;
