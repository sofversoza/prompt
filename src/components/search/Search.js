import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Search.css'

function Search() {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // navigates to search page using dynamic query param
    navigate(`/search?q=${term}`)
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input 
          placeholder='Search...'
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  )
}

export default Search