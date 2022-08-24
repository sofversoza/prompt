import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Prompt.css'

function Prompt() {
  const { id } = useParams()
  const url = 'http://localhost:3000/prompts/' + id
  const { error, isPending, data: prompt } = useFetch(url)

  return (
    <div className="prompt">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {prompt && (
        <>
          <h2>{prompt.title}</h2>
          <h3>{prompt.date}</h3>
          <p>{prompt.text}</p>
          <h3>
            Tags:&nbsp;
            {prompt.tags.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </h3>
        </>
      )}
    </div>
  )
}

export default Prompt