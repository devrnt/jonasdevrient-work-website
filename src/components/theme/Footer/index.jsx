import React from 'react'
import { Container } from 'Common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>Jonas De Vrient</h2>
				<span>
					© All rights are reserved | {new Date().getFullYear()} | Gemaakt met {' '}
					<span aria-label="love" role="img">
						❤️
					</span>{' '}
					door {' '}
					<a
						href="https://smakosh.com/?ref=portfolio-dev"
						rel="noopener noreferrer"
						target="_blank"
					>
						Jonas De Vrient 
					</a>
					{' '} te Kruisem
				</span>
			</Details>
			<Links>
				{social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${icon}`}
					>
						<img width="20" src={icon} alt={name} style={{margin: `0 0.3rem`}} />
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
)
