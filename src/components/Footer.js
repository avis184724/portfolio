import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <a href="mailto:your.email@example.com">이메일: your.email@example.com</a>
          <a href="tel:010-1234-5678">전화: 010-1234-5678</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="copyright">
          © 2024 포트폴리오. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer; 