import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/nav/Navbar'
import Home from './pages/home/Home'
import Search from './components/search/Search'
import Prompt from './pages/prompt/Prompt'


function App() {
	
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/search' element={<Search />} />
				<Route path='/books/:id' element={<Prompt />} />
			</Routes>
		</div>
	)
}

export default App
