import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'
import logo from '../../../../../static/logo (1).png'

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">
			{/* Jonas De Vrient */}
			<img
				src={logo} 
				style={{
					width: `45px`,
					height: `45px`,
					marginBottom: `0`
				}} />
		</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
