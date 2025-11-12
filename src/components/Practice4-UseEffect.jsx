// 연습 4: useEffect 사용
import { useState, useEffect } from 'react'
import './Practice.css'

function UseEffectExample() {
  const [time, setTime] = useState(new Date())
  const [count, setCount] = useState(0)

  // 컴포넌트가 마운트될 때와 매초마다 실행
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    // cleanup 함수
    return () => clearInterval(timer)
  }, [])

  // count가 변경될 때마다 실행
  useEffect(() => {
    document.title = `카운트: ${count}`
  }, [count])

  return (
    <div className="practice-container">
      <h2>연습 4: useEffect</h2>
      <div className="time-display">
        <p>현재 시간: <strong>{time.toLocaleTimeString()}</strong></p>
      </div>
      <div className="counter-display">
        <p>카운트: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <p className="hint">카운트가 변경되면 페이지 제목도 변경됩니다!</p>
      </div>
    </div>
  )
}

export default UseEffectExample

