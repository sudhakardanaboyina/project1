import React, { useState } from 'react';
import './Skills.css';
import SKILLS from '../Utils/data';
import SkillCard from './Skillcard/SkillCard';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';
const Skills = () => {
  const [selectedSkill, setselectedSkill]=useState(SKILLS[0]);
  const handleSelectSkill=(data)=>{
    setselectedSkill(data);
  }  
  return (
    <section className='skills-container'>
      <h5>Technical Summary</h5>
      <div className='skills-content'>
        <div className='skills'>
          {SKILLS.map((item,index) => {
            try {
              return (
                <SkillCard
                  key={index}
                  iconUrl={item.icon}
                  title={item.title}
                  isActive={selectedSkill.title ===item.title}
                  onClick={()=>{
                    handleSelectSkill(item);
                  }}
                />
              );
            } catch (err) {
              console.error('Error rendering SkillCard:', err);
              return null; // Or handle the error in another way
            }
          })}
        </div>
        <div className='skills-info'>
          <SkillsInfoCard
             heading={selectedSkill.title}
             skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
