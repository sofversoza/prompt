import { Link } from 'react-router-dom'
import Search from '../search/Search'
import './Navbar.css'


function Navbar() {
	return (
		<div className='navbar'>
			<nav>
				<Link to='/' className='brand'>
					<h1>prompt.</h1>
				</Link>
				<Link to='/' className='right-links'>
					<h1>GET INSPIRED</h1>
				</Link>
				<Link to='/' className='right-links'>
					<h1>ABOUT</h1>
				</Link>
				<Link to='/' className='right-links'>
					<h1>CONTACT</h1>
				</Link>
				<Link to='/' className='right-links'>
					<h1>SIGN OUT</h1>
				</Link>
			</nav>
		</div>
	)
}

export default Navbar
