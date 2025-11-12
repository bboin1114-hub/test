# 🧾 PRD: 1페이지 개인 포트폴리오 랜딩 웹사이트

## 📌 프로젝트 개요
이 프로젝트는 **React (Vite 기반)** 과 **Tailwind CSS**를 사용하여 제작하는  
1페이지(single-page) 형태의 개인 포트폴리오 랜딩 웹사이트입니다.  

목표는 하나의 페이지에서 **자기소개 → 프로젝트 → 연락처**로 이어지는  
명확하고 깔끔한 흐름을 제공하는 것입니다.

---

## 🧱 기술 스택

| 구분 | 기술 | 목적 |
|------|------|------|
| 프론트엔드 | React (Vite) | 빠른 SPA 구성 |
| 스타일링 | Tailwind CSS | 반응형 및 일관된 디자인 |
| 애니메이션 | Framer Motion | 부드러운 등장 및 스크롤 애니메이션 |
| 아이콘 | Lucide Icons / Heroicons | 경량 벡터 아이콘 사용 |
| 배포 | Vercel | 무료 HTTPS 및 자동 배포 |
| 연락처 폼 | Formspree | 백엔드 없이 이메일 전송 가능 |

---

## 📁 프로젝트 구조

portfolio/
├── src/
│ ├── components/
│ │ ├── Hero.jsx
│ │ ├── About.jsx
│ │ ├── Projects.jsx
│ │ ├── Contact.jsx
│ │ └── Footer.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── public/
│ └── favicon.ico
├── package.json
└── vite.config.js


각 섹션은 개별 컴포넌트로 구성되며, `App.jsx`에서 순차적으로 불러와 연결됩니다.

---

## 🧩 섹션 구성

### 1️⃣ Hero (인트로 섹션)
- 이름, 직업, 짧은 자기소개 문구 포함  
- 방문자에게 첫인상을 전달하고, 프로젝트 섹션으로 이동하는 버튼 배치

### 2️⃣ About (소개 섹션)
- 간단한 자기소개 및 주요 기술 스택 요약  
- 프로필 이미지 및 간결한 경력 또는 강점 소개

### 3️⃣ Projects (프로젝트 섹션)
- 대표 프로젝트 2~3개 소개  
- 프로젝트명, 설명, 관련 링크(GitHub, Demo 등)

### 4️⃣ Contact (연락 섹션)
- 이메일 또는 연락 폼 제공  
- GitHub, LinkedIn 등 소셜 링크 포함

### 5️⃣ Footer (푸터)
- 간단한 저작권 문구 및 사이트 제작 정보  
- 예: “© 2025 홍길동 — Built with React & Vite”

---

## 🧭 페이지 흐름

- 모든 섹션은 **단일 페이지 내 스크롤 이동**으로 연결  
- 별도의 메뉴 없이 부드러운 스크롤로 전환  
- 각 섹션은 고유한 앵커(`#hero`, `#about`, `#projects` 등)를 가짐

---

## 🎨 디자인 가이드

| 항목 | 내용 |
|------|------|
| 테마 | 다크 그라데이션 (예: 검정~보라 계열) |
| 폰트 | 산세리프 계열 (Inter, Poppins 등) |
| 기본 색상 | 인디고(보라톤) 포인트 컬러 |
| 버튼 스타일 | 둥근 모서리, hover 시 강조 효과 |
| 애니메이션 | 부드러운 등장 및 스크롤 이동 중심 |

---

## 📱 반응형 구성

| 기기 | 반응형 설계 |
|------|--------------|
| 모바일 (≤640px) | 세로 스택 구조, 텍스트 중심 |
| 태블릿 | 중앙 정렬, 폰트 크기 확대 |
| 데스크톱 | 전체 화면 배경, 부드러운 스크롤 애니메이션 |

---

## 🚀 배포

- 빌드 후 **Vercel**을 통해 무료로 배포  
- 자동 HTTPS 적용 및 Git 연동  
- 결과 예시: `https://yourname.vercel.app`

---

## ✅ 완료 기준 (Acceptance Criteria)

| 항목 | 설명 |
|------|------|
| ✅ 모든 섹션이 한 페이지 내에서 자연스럽게 연결 | |
| ✅ 모바일 및 데스크톱에서 모두 정상 표시 | |
| ✅ 기본 스크롤 및 애니메이션 작동 | |
| ✅ Contact 섹션에서 메일 또는 링크 클릭 가능 | |
| ✅ 배포된 사이트가 Vercel에서 정상 작동 | |

---

**작성자:** Minho  
**버전:** v1.0  
**작성일:** 2025-11  
**용도:**

---

## 🎨 Tailwind 테마 설정 (다크 그라데이션 스타일)

### 🌈 컬러 팔레트

| 구분 | 색상 코드 | 용도 |
|------|------------|------|
| 배경 (Background) | `#0F172A` → `#1E1B4B` | 상단~하단 그라데이션 배경 |
| 메인 포인트 (Primary) | `#6366F1` (Indigo 500) | 버튼, 링크, 강조 텍스트 |
| 서브 포인트 (Accent) | `#A78BFA` (Purple 400) | 섹션 구분선, hover 효과 |
| 텍스트 (기본) | `#F3F4F6` (Gray 100) | 일반 텍스트 |
| 텍스트 (보조) | `#9CA3AF` (Gray 400) | 설명, 서브 텍스트 |
| 버튼 (Hover) | `#4F46E5` (Indigo 600) | 마우스 오버 시 강조 |

---

### ✨ 스타일 가이드

- **폰트**: `"Inter", "Poppins", sans-serif`  
- **레이아웃 폭**: `max-w-5xl` (중앙 정렬)  
- **모서리 곡선**: `rounded-2xl`  
- **그림자 효과**: `shadow-lg`, `shadow-indigo-900/40`  
- **애니메이션**: fade-in / slide-up / hover-scale (Framer Motion 기준)

---

### 🧭 Tailwind 기본 설정 예시 (참고용)

```js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#0F172A",
          light: "#1E1B4B",
        },
        primary: "#6366F1",
        accent: "#A78BFA",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
