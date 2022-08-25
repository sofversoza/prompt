import Promptlist from '../../components/prompt-list/Promptlist'
import { useFetch } from '../../hooks/useFetch'
import './Home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import Navlinks from '../../components/nav/Navlinks'
import SidebarLinks from '../../components/nav/SidebarLinks'

function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/prompts')
  
  return (
    <>
      <Header />
      <Navlinks />
      <div className="home">
        <SidebarLinks />
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {data && <Promptlist prompts={data} />}
        <Sidebar />
      </div>
    </>
  )
}

export default Home