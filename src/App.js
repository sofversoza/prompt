import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/nav/Navbar'
import Home from './pages/home/Home'
import Search from './components/search/Search'
import Prompt from './pages/prompt/Prompt'
import LandingPage from './pages/landing-page/LandingPage'


function App() {
	
	return (
		// <>
		// 	<LandingPage />
		// </>
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/search' element={<Search />} />
				<Route path='/prompts/:id' element={<Prompt />} />
			</Routes>
		</div>
	)
}

export default App
