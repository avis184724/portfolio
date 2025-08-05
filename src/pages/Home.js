import React from 'react';

function Home() {
  return (
    <div className="page">
      <div className="section">
        <h1>안녕하세요! 👋</h1>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1rem' }}>
            저는 이재황입니다.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#888' }}>
            웹 개발과 정보 보안에 대해서 공부하고 있으며, 배우는 것에 열정을 가지고 있습니다.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          <div className="card">
            <h3>🎯 목표</h3>
            <p>4차 산업혁명에서 살아남기</p>
          </div>
          
          <div className="card">
            <h3>💻 기술 스택</h3>
            <p>React, JavaScript, HTML, CSS, Node.js 등</p>
          </div>
          
          <div className="card">
            <h3>📚 학습 중</h3>
            <p>현재 정보 보안에 관해 학습하고 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 