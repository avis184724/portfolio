import React from 'react';

function About() {
  return (
    <div className="page">
      <div className="section">
        <h1>자기소개</h1>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2>👤 기본 정보</h2>
          <div className="card">
            <p><strong>이름:</strong> 이재황</p>
            <p><strong>생년월일:</strong> 2007년 9월 19일</p>
            <p><strong>학교:</strong> 충주상업고등학교 스마트IT과</p>
            <p><strong>관심 분야:</strong> 웹 개발, 정보보안</p>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2>🎯 목표</h2>
          <div className="card">
            <p>빠르고 분주하게 변화해 가는 디지털 세상에서 살아남기 위해 열심히 공부하고 노력하며
              더 나은 사람이 되어가고 싶습니다.</p>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2>💻 기술 스택</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div className="card">
              <h3>Frontend</h3>
              <p>React, JavaScript, HTML, CSS, Bootstrap</p>
            </div>
            <div className="card">
              <h3>Backend</h3>
              <p>Node.js, Python</p>
            </div>
            <div className="card">
              <h3>Database</h3>
              <p>MySQL, MongoDB, supabase</p>
            </div>
            <div className="card">
              <h3>Cyber Security</h3>
              <p>VMware, Packet tracer</p>
            </div>
            <div className="card">
              <h3>Tools</h3>
              <p>Git, VS Code, Figma</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2>📚 학습 중인 기술</h2>
          <div className="card">
            <p>현재 사이버 보안을 학습하고 있으며, 
            웹 해킹이나, 리버싱, 리눅스에 대한 깊이 있는 이해를 위해 노력하고 있습니다.</p>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2>🌟 강점</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div className="card">
              <h3>문제 인지 능력</h3>
              <p>복잡한 문제를 빠르게 이해하고 분석하여 해결할 수 있는 방법이나 대안 등을 떠올리는 능력</p>
            </div>
            <div className="card">
              <h3>팀워크</h3>
              <p>다양한 배경의 사람들과 협업하여 좋은 결과를 만들어내는 능력</p>
            </div>
            <div className="card">
              <h3>도전 정신</h3>
              <p>실패하더라도 다시 도전하며 포기하지 않고 끝까지 도전하는 능력</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 