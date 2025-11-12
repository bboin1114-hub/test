import { useState } from 'react'
import './App.css'
import Counter from './components/Practice1-Counter'
import TodoList from './components/Practice2-TodoList'
import Form from './components/Practice3-Form'
import UseEffectExample from './components/Practice4-UseEffect'
import ConditionalRendering from './components/Practice5-Conditional'

function App() {
  const [currentPractice, setCurrentPractice] = useState(1)

  const practices = [
    { id: 1, name: '카운터', component: <Counter /> },
    { id: 2, name: '할일 목록', component: <TodoList /> },
    { id: 3, name: '폼 처리', component: <Form /> },
    { id: 4, name: 'useEffect', component: <UseEffectExample /> },
    { id: 5, name: '조건부 렌더링', component: <ConditionalRendering /> },
  ]

  const currentComponent = practices.find(p => p.id === currentPractice)?.component

  return (
    <div className="app">
      <h1>React 연습 프로젝트</h1>
      
      <div className="navigation">
        <p>연습 항목을 선택하세요:</p>
        <div className="practice-buttons">
          {practices.map(practice => (
            <button
              key={practice.id}
              onClick={() => setCurrentPractice(practice.id)}
              className={currentPractice === practice.id ? 'active' : ''}
            >
              {practice.id}. {practice.name}
            </button>
          ))}
        </div>
      </div>

      <div className="practice-area">
        {currentComponent}
      </div>

      <footer className="footer">
        <p>현재 연습: {practices.find(p => p.id === currentPractice)?.name}</p>
        <p>연습 파일: src/components/Practice{currentPractice}-*.jsx</p>
      </footer>
    </div>
  )
}

export default App
