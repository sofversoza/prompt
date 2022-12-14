import { Link } from 'react-router-dom'
import './Promptlist.css'

function Promptlist({ prompts }) {
  if (prompts.length === 0) {
    return <div className="error">No prompts to load</div>
  }

  return (
    <div className="prompt-list">
      {prompts.map((prompt) => (
        <div key={prompt.id} className="card">
          <div className="user-date">
            <h3>Sofia Versoza&nbsp;</h3>
            <h3>— {prompt.date}</h3>
          </div>
          <h2>{prompt.title}</h2>
          <div className="text-box">{prompt.text.substring(0, 200)}...</div>
          <Link to={`/prompts/${prompt.id}`}>open</Link>
        </div>
      ))}
    </div>
  )
}

export default Promptlist