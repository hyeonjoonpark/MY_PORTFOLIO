import React from 'react';
import { skillsData } from './data/skill';
import './App.css';

function App() {
  
  return (
    <>
      <div className="intro">
        <h1>끊임없이 고민하고 성장하는 개발자 박현준입니다</h1>
        <p>Java/Spring을 활용한 백엔드 개발을 전공으로 하고 있으며 Docker, Kubernetes와 같은 DevOps를 공부하고 있습니다</p>
      </div>
      <div className="skills">
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.img} alt={skill.name} className="skill-icon" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="projects">
        <h2>프로젝트</h2>
        <div className="project">
          <h3>AriPay</h3>
          <p>학교 매점 결제를 간편화하고 재고관리를 도와주는 ERP 서비스입니다</p>
          <a href="https://occount.bsm-aripay.kr/">My Portfolio Link</a>
        </div>
      </div>
    </>
  );
}

export default App;
