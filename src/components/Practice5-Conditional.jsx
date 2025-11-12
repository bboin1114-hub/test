// 연습 5: 조건부 렌더링
import { useState } from 'react'
import './Practice.css'

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')
  const [theme, setTheme] = useState('light')

  return (
    <div className={`practice-container ${theme}`}>
      <h2>연습 5: 조건부 렌더링</h2>
      
      <div className="login-section">
        {isLoggedIn ? (
          <div>
            <p>환영합니다, <strong>{user}</strong>님!</p>
            <button onClick={() => setIsLoggedIn(false)}>로그아웃</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="이름을 입력하세요"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <button onClick={() => user && setIsLoggedIn(true)}>로그인</button>
          </div>
        )}
      </div>

      <div className="theme-section">
        <p>테마 선택:</p>
        <button onClick={() => setTheme('light')}>라이트</button>
        <button onClick={() => setTheme('dark')}>다크</button>
      </div>

      {theme === 'dark' && (
        <p className="theme-message">다크 모드가 활성화되었습니다! 🌙</p>
      )}
    </div>
  )
}

export default ConditionalRendering

