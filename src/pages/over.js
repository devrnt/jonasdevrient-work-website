import React from 'react'
import { Layout, SEO } from 'Common'
import { Wrapper } from '../components/theme/Header/NavbarLinks/styles';
import { Container } from 'Common'
import goBack from '../../static/icons/go-back.svg';
import { Link } from 'gatsby'; 
import { IntroWrapper } from '../components/landing/Intro/styles';
import { Details } from '../components/theme/Footer/styles';

export default () => (
  <>
  <SEO title="Over | Jonas De Vrient" location="/over" />
  <Layout>
    <IntroWrapper as={Container}>
    <Details>

  <Link to="/">
			{/* Jonas De Vrient */}
			<img
				src={goBack} 
				alt="Ga terug"
				style={{
					width: `2.5rem`,
					height: `2.5rem`,
					marginBottom: `2.5rem`
				}} />
		</Link>
  
			<h1  style={{
        marginBottom: `3rem`
      }}>Info</h1>
      <h2 
    
      >Algemeen</h2>
      <p
             style={{lineHeight: `1.85rem`}}
      >
        Deze website bevat al mijn projecten. De eindgebruiker wordt aangeraden om over een Informatica achtergrond te beschikken, zodat de 
        technische verwijzingen tot zijn recht komen. 
        Deze website is initieel ontwikkeld om mijn gemaakte projecten op een redelijk technisch niveau ten toon te stellen.
      </p>
      <h2>Technisch</h2>
      <p
       style={{lineHeight: `1.85rem`}}
       >
        De volledige website is ontwikkeld in <strong>Gatsby</strong>
        <i> "a free and open source framework based on React that helps developers build blazing fast websites and apps".</i>
        <br/>De projecten worden automatisch bijgewerkt wanneer een van de Github projecten wordt gewijzigd.
        Dit zorgt ervoor dat de meest recente projecten steeds online staan gedocumenteerd. De website is een 
        open-source project, beschikbaar op <a href="https://github.com/devrnt/jonasdevrient-work-website" rel="noopener noreferrer">GitHub</a>.
        De website wordt automatisch onderhouden en gegenereerd door <a href="https://buddy.works" rel="noopener noreferrer">Buddy.works </a>
        een eerder gebruiksvriendelijke CI/CD.
        <br/>
        De website is gebasserd op een openbare Gatsby template die u kunt vinden op 
        <a href="https://github.com/smakosh/gatsby-portfolio-dev" rel="noopener noreferrer"> Github</a>.
      </p>
      <h2>Contact</h2>
      <p
             style={{lineHeight: `1.85rem`}}
      >Als u vragen heeft of opmerkingen, aarzel dan zeker niet om mij te contacteren via het email adres: 
      <a href="mailto:me@jonasdevrient.be" rel="noopener noreferrer"> me@jonasdevrient.be</a>
      </p>
      </Details>
    </IntroWrapper>  </Layout>
  </>
)
