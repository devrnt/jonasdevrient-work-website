import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from '../../../images/profile-picture.jpg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail style={{textAlign:`center`}}>
				<img src={dev} style={{borderRadius: `100px`, width:`200px`, border:`2px solid #333399`}} alt="profiel foto van Jonas De Vrient" />
			</Thumbnail>
			<Details>
				<h1>En nu even persoonlijk...</h1>
				<p>
					Heeft u vragen over mijn projecten of wilt u contact met mij opnemen,
					 aarzel niet en vul het onderstaande formulier in.
				</p>
				<Button as={AnchorLink} href="#contact">
					Contact
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
