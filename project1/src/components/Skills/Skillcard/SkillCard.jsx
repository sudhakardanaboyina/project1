import React from 'react';
import './Skillcard.css';

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  // Destructuring props and assigning to new variables
  const newTitle = title;
  const newIconUrl = iconUrl;
  const newIsActive = isActive;
  const newOnClick = onClick;

  return (
    <div
      className={`skills-card ${newIsActive ? "active" : ""}`}
      onClick={newOnClick}
    >
      <div className='skill-icon'>
        <img src={newIconUrl} alt={newTitle}  style={{height:'30px' ,width:'30px'}}/>
      </div>
      <span>{newTitle}</span>
    </div>
  );
}

export default SkillCard;
