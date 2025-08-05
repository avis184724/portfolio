import React from 'react';

function Certificates() {
  const certificates = [
    {
      id: 1,
      name: "정보처리기능사",
      organization: "한국산업인력공단",
      date: "2025년 7월"
    },
    {
      id: 2,
      name: "정보기기운용기능사",
      organization: "한국산업인력공단",
      date: "2025년 5월"
    },
    {
      id: 3,
      name: "컴퓨터활용능력 2급",
      organization: "대한상공회의소",
      date: "2023년 6월"
    },
    {
      id: 4,
      name: "COS PRO 2급",
      organization: "YBM",
      date: "2025년 1월"
    }
  ];

  return (
    <div className="page">
      <div className="section">
        <h1>자격증</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
          전문성을 인정받은 다양한 자격증들입니다.
        </p>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {certificates.map((cert) => (
            <div key={cert.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ color: '#2c3e50', margin: 0 }}>{cert.name}</h3>
                <span style={{ 
                  backgroundColor: '#27ae60', 
                  color: 'white', 
                  padding: '0.3rem 0.8rem', 
                  borderRadius: '20px', 
                  fontSize: '0.9rem' 
                }}>
                  {cert.date}
                </span>
              </div>
              <p style={{ fontWeight: 'bold', color: '#34495e', marginBottom: '0.5rem' }}>
                {cert.organization}
              </p>
              <p style={{ color: '#666', margin: 0 }}>
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h2>💡 자격증 취득 소감</h2>
          <div className="card">
            <p>
              각 자격증을 취득하면서 해당 분야에 대한 깊이 있는 이해를 할 수 있었습니다. 
              특히 실무에서 바로 활용할 수 있는 지식들을 많이 얻을 수 있어서 
              매우 의미 있는 경험이었습니다.
            </p>
            <p style={{ marginTop: '1rem' }}>
              앞으로도 지속적으로 새로운 자격증을 취득하여 
              전문성을 높이고 경쟁력을 강화하고 싶습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates; 