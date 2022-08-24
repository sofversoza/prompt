import Promptlist from '../../components/prompt-list/Promptlist'
import { useFetch } from '../../hooks/useFetch'
import './Home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'

function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/prompts')
  
  return (
    <>
      {/* <Header /> */}
      <div className="home">
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {data && <Promptlist prompts={data} />}
        <Sidebar />
      </div>
    </>
  )
}

export default Home