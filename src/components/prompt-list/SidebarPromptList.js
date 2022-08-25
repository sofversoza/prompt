import { Link } from 'react-router-dom'
import './SidebarPromptList.css'

export default function SidebarPromptList({ prompts }) {
  if (prompts.length === 0) {
    return <div className="error">No prompts to load</div>
  }
  
  return (
    <div className="sidebar-prompt">
      {prompts.map(p => (
        <div key={p.id} className="sidebar-card">
          <p>User Name</p>
          <Link to={`/prompts/${prompt.id}`}>{p.title}</Link>
        </div>
      ))}
    </div>
  )
}
