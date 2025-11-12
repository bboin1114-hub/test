// 연습 3: 폼 처리
import { useState } from 'react'
import './Practice.css'

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`제출된 정보:\n이름: ${formData.name}\n이메일: ${formData.email}\n메시지: ${formData.message}`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="practice-container">
      <h2>연습 3: 폼 처리</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>이름:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>이메일:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>메시지:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <button type="submit">제출</button>
      </form>
    </div>
  )
}

export default Form

