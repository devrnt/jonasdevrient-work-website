import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
// import dev from 'Static/profile-picture.png'
import dev from 'Static/illustrations/developer.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hallo daar!</h1>
				<h4>Ik ben Jonas en deze pagina bevat mijn projecten!</h4>
				<Button as={AnchorLink} href="#projects">
					Projecten
				</Button>
			</Details>
			<Thumbnail style={{textAlign: `right`}}>
				<img src={dev} alt="Ik ben Jonas en deze pagina bevat mijn projecten!" style={{width:`90%`}} />
				{/* <img src={dev} alt="Ik ben Jonas en deze pagina bevat mijn projecten!" 
					style={{
						borderRadius: `100px`,
						width:`200px`,
						height:`200px`
					}}
				/> */}
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
