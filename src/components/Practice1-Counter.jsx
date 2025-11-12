// 연습 1: useState를 사용한 카운터
import { useState } from 'react'
import './Practice.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="practice-container">
      <h2>연습 1: 카운터</h2>
      <p>현재 카운트: <strong>{count}</strong></p>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
        <button onClick={() => setCount(0)}>리셋</button>
      </div>
    </div>
  )
}

export default Counter

