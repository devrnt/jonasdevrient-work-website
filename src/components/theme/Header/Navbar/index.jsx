import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'
import logo from '../../../../../static/logo.png'

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">
			{/* Jonas De Vrient */}
			<img
				src={logo} 
				alt="logo Jonas De Vrient"
				style={{
					width: `50px`,
					height: `50px`,
					marginBottom: `0`
				}} />
		</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
