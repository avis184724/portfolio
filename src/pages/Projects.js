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
      github: "https://github.com/avis184724/Python_Backend",
      demo: "https://your-portfolio.com"
    },
    {
      id: 2,
      title: "쇼핑몰 웹사이트",
      period: "2023년 10월 - 12월",
      description: "사용자가 상품을 검색하고 주문할 수 있는 온라인 쇼핑몰입니다. 결제 시스템과 관리자 페이지를 포함합니다.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      role: "프론트엔드 개발",
      github: "https://github.com/yourusername/shopping-mall",
      demo: "https://shopping-mall-demo.com"
    },
    {
      id: 3,
      title: "할일 관리 앱",
      period: "2023년 8월 - 9월",
      description: "사용자가 할일을 추가, 수정, 삭제할 수 있는 간단한 할일 관리 애플리케이션입니다.",
      technologies: ["React", "LocalStorage", "CSS"],
      role: "개발자",
      github: "https://github.com/yourusername/todo-app",
      demo: "https://todo-app-demo.com"
    },
    {
      id: 4,
      title: "날씨 정보 앱",
      period: "2023년 6월 - 7월",
      description: "OpenWeatherMap API를 사용하여 현재 날씨와 예보를 보여주는 웹 애플리케이션입니다.",
      technologies: ["JavaScript", "HTML", "CSS", "API"],
      role: "개발자",
      github: "https://github.com/yourusername/weather-app",
      demo: "https://weather-app-demo.com"
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