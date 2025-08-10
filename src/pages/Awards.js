import React, { useState } from 'react';

function Awards() {
  const awards = [
    {
      id: 1,
      title: "금상",
      organization: "충청북도 지방기능경기대회 사이버보안",
      date: "2025년 4월",
      image: "/images/award1.jpg"
    },
    {
      id: 2,
      title: "은상",
      organization: "충북정보올림피아드",
      date: "2025년 6월",
      image: "/images/award2.jpg"
    },
    {
      id: 3,
      title: "동상",
      organization: "충북컴퓨터꿈나무축제 피지컬 컴퓨팅",
      date: "2023년 6월",
      description: "학업 성적 우수로 우수학생상을 수상했습니다.",
      image: "/images/award3.jpg"
    }
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  return (
    <div className="page">
      <div className="section">
        <h1>수상 경력</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
          다양한 대회와 활동을 통해 인정받은 수상 경력들입니다.
        </p>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {awards.map((award) => (
            <div key={award.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ color: '#2c3e50', margin: 0 }}>{award.title}</h3>
                <span style={{
                  backgroundColor: '#3498db',
                  color: 'white',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}>
                  {award.date}
                </span>
              </div>
              <p style={{ fontWeight: 'bold', color: '#34495e', marginBottom: '0.5rem' }}>
                {award.organization}
              </p>
              <p style={{ color: '#666', margin: 0 }}>
                {award.description}
              </p>
              <button 
                onClick={() => openImage(award.image)}
                style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#27ae60',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#219150'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#27ae60'}
              >
                상장 보기
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h2>🏆 수상 소감</h2>
          <div className="card">
            <p>
              각각의 수상 경험은 저에게 큰 동기부여가 되었습니다. 
              특히 팀 프로젝트를 통해 협업의 중요성을 배웠고, 
              새로운 기술을 배우는 것의 즐거움을 깨달았습니다.
            </p>
            <p style={{ marginTop: '1rem' }}>
              앞으로도 더 많은 도전을 통해 성장하고, 
              의미 있는 결과물을 만들어가고 싶습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 이미지 모달 */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div style={{ position: 'relative', animation: 'zoomIn 0.3s ease' }}>
            <img src={selectedImage} alt="상장" style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: '10px' }} />
            <button 
              onClick={closeImage}
              style={{
                position: 'absolute', top: '-10px', right: '-10px',
                backgroundColor: 'white', border: 'none', borderRadius: '50%',
                width: '30px', height: '30px', fontSize: '18px',
                cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* 모달 애니메이션 CSS */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes zoomIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default Awards;
