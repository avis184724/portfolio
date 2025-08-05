import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            포트폴리오
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">홈</Link></li>
          <li><Link to="/about">자기소개</Link></li>
          <li><Link to="/awards">수상경력</Link></li>
          <li><Link to="/certificates">자격증</Link></li>
          <li><Link to="/projects">프로젝트</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 