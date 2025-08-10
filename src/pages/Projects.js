import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "포트폴리오 웹사이트",
      period: "2025년 7-8월",
      description: "React를 사용하여 만든 개인 포트폴리오 웹사이트입니다. 반응형 디자인과 모던한 UI를 적용했습니다.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      role: "개발자",
      github: "https://github.com/avis184724/portfolio",
      demo: "https://portfolio-4ftq.vercel.app/"
    },
    {
      id: 2,
      title: "파이썬 백엔드",
      period: "2023년 10월 - 12월",
      description: "Python과 Flask를 이용하여 로그인 할 수 있는 간단한 백엔드 시스템을 구현해봤습니다.",
      technologies: ["Python", "Flask", "Postman"],
      role: "백엔드 개발",
      github: "https://github.com/avis184724/Python_Backend"
    },
    {
      id: 3,
      title: "SNS 커뮤니티 사이트",
      period: "2025년 3월 - 5월",
      description: "로그인, 채팅, todo리스트 등의 기능을 사용할 수 있는 웹사이트를 개발했습니다. ",
      technologies: ["Flutter"],
      role: "개발자",
      github: "https://github.com/avis184724/flutter_project",
    },
    {
      id: 4,
      title: "위키 사이트",
      period: "2024년 11월 - 12월",
      description: "MongoDB Atlas와 React, Express를 사용하여 간단한 위키 사이트를 만들었습니다",
      technologies: ["MongoDB Atlas", "React", "Express"],
      role: "개발자",
      github: "https://github.com/avis184724/wiki_frontend"
    },
    {
      id: 5,
      title: "리액트 기초",
      period: "2024년 3월 - 6월",
      description: "리액트의 기본적인 기능을 사용했던 프로젝트입니다.",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      role: "개발자",
      github: "https://github.com/avis184724/react-study"
    }
  ];

  return (
    <div className="page">
      <div className="section">
        <h1>프로젝트</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
          다양한 기술을 활용하여 개발한 프로젝트들입니다.
        </p>
        
        <div style={{ display: 'grid', gap: '2rem' }}>
          {projects.map((project) => (
            <div key={project.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ color: '#2c3e50', margin: 0 }}>{project.title}</h3>
                <span style={{ 
                  backgroundColor: '#e74c3c', 
                  color: 'white', 
                  padding: '0.3rem 0.8rem', 
                  borderRadius: '20px', 
                  fontSize: '0.9rem' 
                }}>
                  {project.period}
                </span>
              </div>
              
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                {project.description}
              </p>
              
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontWeight: 'bold', color: '#34495e', marginBottom: '0.5rem' }}>
                  역할: {project.role}
                </p>
                <p style={{ fontWeight: 'bold', color: '#34495e', marginBottom: '0.5rem' }}>
                  사용 기술:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} style={{
                      backgroundColor: '#3498db',
                      color: 'white',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '15px',
                      fontSize: '0.8rem'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  GitHub
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#27ae60',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h2>🚀 개발 철학</h2>
          <div className="card">
            <p>
              사용자 중심의 개발을 지향합니다. 깔끔한 코드와 직관적인 UI/UX를 통해 
              사용자에게 최고의 경험을 제공하는 것을 목표로 합니다.
            </p>
            <p style={{ marginTop: '1rem' }}>
              새로운 기술을 배우는 것을 즐기며, 지속적으로 개선하고 발전하는 
              개발자가 되고 싶습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects; 