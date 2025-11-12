# React 연습 프로젝트

이 프로젝트는 React의 기본 개념들을 연습할 수 있는 예제 컴포넌트들을 포함하고 있습니다.

## 📁 파일 구조

```
src/
├── App.jsx                      # 메인 앱 컴포넌트
├── App.css                      # 앱 스타일
├── main.jsx                     # React 진입점
├── index.css                    # 전역 스타일
└── components/
    ├── Practice1-Counter.jsx    # useState 연습: 카운터
    ├── Practice2-TodoList.jsx   # useState 연습: 할일 목록
    ├── Practice3-Form.jsx       # 폼 처리 연습
    ├── Practice4-UseEffect.jsx  # useEffect 연습
    ├── Practice5-Conditional.jsx # 조건부 렌더링 연습
    └── Practice.css             # 연습 컴포넌트 공통 스타일
```

## 🎯 연습 항목

### 1. 카운터 (Practice1-Counter.jsx)
- **개념**: `useState` 훅 사용
- **기능**: 카운트 증가/감소/리셋
- **학습 포인트**: 상태 관리의 기본

### 2. 할일 목록 (Practice2-TodoList.jsx)
- **개념**: `useState`로 배열 관리
- **기능**: 할일 추가, 완료 표시, 삭제
- **학습 포인트**: 배열 상태 업데이트, 불변성 유지

### 3. 폼 처리 (Practice3-Form.jsx)
- **개념**: 폼 입력 처리, 제어 컴포넌트
- **기능**: 입력 필드 관리, 폼 제출
- **학습 포인트**: 이벤트 핸들링, 폼 데이터 관리

### 4. useEffect (Practice4-UseEffect.jsx)
- **개념**: `useEffect` 훅 사용
- **기능**: 실시간 시계, 문서 제목 변경
- **학습 포인트**: 사이드 이펙트 처리, cleanup 함수

### 5. 조건부 렌더링 (Practice5-Conditional.jsx)
- **개념**: 조건부 렌더링, 조건부 스타일
- **기능**: 로그인 상태 표시, 테마 변경
- **학습 포인트**: 조건부 UI, 상태에 따른 스타일 변경

## 🚀 사용 방법

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **개발 서버 실행**
   ```bash
   npm run dev
   ```

3. **브라우저에서 확인**
   - 기본 주소: `http://localhost:5173`
   - 상단 네비게이션에서 원하는 연습 항목 선택

## 📝 학습 방법

1. 각 연습 컴포넌트의 코드를 읽어보세요
2. 코드를 수정하여 다양한 기능을 추가해보세요
3. 각 컴포넌트는 독립적으로 작동하므로 자유롭게 수정 가능합니다
4. 새로운 연습 컴포넌트를 추가하여 더 많은 개념을 학습할 수 있습니다

## 💡 다음 단계

- **커스텀 훅 만들기**: 반복되는 로직을 커스텀 훅으로 추출
- **컨텍스트 API**: `useContext`를 사용한 전역 상태 관리
- **useReducer**: 복잡한 상태 로직을 `useReducer`로 관리
- **컴포넌트 간 통신**: 부모-자식 컴포넌트 간 데이터 전달
- **리스트와 키**: 동적 리스트 렌더링 최적화

## 📚 참고 자료

- [React 공식 문서](https://react.dev/)
- [React Hooks 가이드](https://react.dev/reference/react)
- [Vite 문서](https://vitejs.dev/)

---

**참고**: 이 프로젝트는 `webnamecard.html`과 별개로 작동하는 React 앱입니다.

