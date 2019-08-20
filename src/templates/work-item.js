import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout, Container } from 'Common'
import { IntroWrapper, Details } from '../components/landing/Intro/styles'
import { SEO } from '../components/common/SEO'
import goBack from 'Static/svg/go-back.svg'

export default ({ data }) => {
  const project = data.github.repositoryOwner.repository
  let readmeHtml = ''
  if (data.githubReadme !== null) {
    readmeHtml = data.githubReadme.childMarkdownRemark.html
  }

  let dom = ``
  // Wrap the require in check for window
  if (typeof window !== `undefined`) {
    dom = document.createElement('div')
    dom.innerHTML = readmeHtml

    const images = dom.getElementsByTagName('img')
    for (let element of images) {
      if (element.src.endsWith('.gif')) {
        const srcEnd = element.src.split('/showcase/')[1]
        const beginUrl = `https://raw.github.com/devrnt/${project.name}/master/showcase/`
        const updatedSrc = `${beginUrl}${srcEnd}`
        element.src = updatedSrc
      }
    }
  }

  const title = `${project.name[0].toUpperCase()}${project.name
    .replace('-', ' ')
    .substring(1)} | Jonas De Vrient `

  return (
    <>
      <SEO title={title} description={project.description} />
      <Layout>
        <IntroWrapper as={Container}>
          <Details>
            <div
              style={{
                display: `flex`,
                justifyContent: `space-between`,
                flexDirection: `column`,
              }}
            >
              <Link to="/#projects">
                {/* Jonas De Vrient */}
                <img
                  src={goBack}
                  alt="Ga terug"
                  style={{
                    width: `2.5rem`,
                    height: `2.5rem`,
                    marginBottom: `2.5rem`,
                  }}
                />
              </Link>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginBottom: `1rem`,
                }}
              >
               <span 
										style={{
												padding: `0.35rem 0.65rem`,
												borderRadius: `3px`,
												backgroundColor: `rgb(240, 237, 255)`,
												fontWeight:`400`,
												color:`#333393`,
												fontSize: `0.9rem`,
										}}>
               
                View on GitHub
                </span>
              </a>
              {project.homepageUrl}
            </div>
            <div style={{lineHeight:`25px`}} dangerouslySetInnerHTML={{ __html: dom.innerHTML }}></div>
          </Details>
        </IntroWrapper>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($name: String!) {
    github {
      repositoryOwner(login: "devrnt") {
        repository(name: $name) {
          id
          url
          name
          description
        }
      }
    }
    githubReadme(title: { eq: $name }) {
      childMarkdownRemark {
        html
      }
    }
  }
`
