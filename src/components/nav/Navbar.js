import { Link } from 'react-router-dom'
import Search from '../search/Search'
import './Navbar.css'


function Navbar() {
	return (
		<div className='navbar'>
			<nav>
				<Link to='/' className='brand'>
					<h1>prompt</h1>
				</Link>
				{/* <Search /> */}
			</nav>
		</div>
	)
}

export default Navbar
