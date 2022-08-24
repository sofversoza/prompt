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
          <h2>{prompt.title}</h2>
          <h3>{prompt.date}</h3>
          <div>{prompt.text.substring(0, 100)}...</div>
          <Link to={`/prompts/${prompt.id}`}>View prompt</Link>
        </div>
      ))}
    </div>
  )
}

export default Promptlist