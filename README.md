# 포트폴리오 웹사이트

React를 사용하여 만든 개인 포트폴리오 웹사이트입니다.

## 기능

- **홈**: 간단한 자기소개와 목표
- **자기소개**: 상세한 개인 정보와 기술 스택
- **수상경력**: 다양한 대회와 활동에서의 수상 내역
- **자격증**: 취득한 자격증과 향후 계획
- **프로젝트**: 개발한 프로젝트들의 상세 정보
- **연락처**: 푸터에 연락처 정보

## 기술 스택

- React 18
- React Router DOM
- CSS3
- HTML5

## 설치 및 실행

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm start
```

3. 빌드:
```bash
npm run build
```

## 수정해야 할 부분

### 1. 개인 정보 수정
- `src/pages/Home.js`: 이름, 직업, 관심 분야
- `src/pages/About.js`: 상세 개인 정보
- `src/components/Footer.js`: 연락처 정보

### 2. 수상 경력 추가
- `src/pages/Awards.js`: 실제 수상 내역으로 수정

### 3. 자격증 정보 수정
- `src/pages/Certificates.js`: 실제 자격증 정보로 수정

### 4. 프로젝트 정보 수정
- `src/pages/Projects.js`: 실제 프로젝트 정보로 수정

### 5. 스타일 커스터마이징
- `src/App.css`: 색상, 폰트, 레이아웃 수정

## 배포

GitHub Pages, Vercel, Netlify 등에 배포할 수 있습니다.

## 라이선스

MIT License 