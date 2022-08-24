import Promptlist from '../../components/prompt-list/Promptlist'
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import './Home.css'

function Home() {
  // const [url, setUrl] = useState('http://localhost:3000/prompts')
  const { data, isPending, error } = useFetch('http://localhost:3000/prompts')
  
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <Promptlist prompts={data} />}
    </div>
  )
}

export default Home