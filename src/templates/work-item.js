import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout, Container } from 'Common'
import styled from 'styled-components';
import { IntroWrapper, Details } from '../components/landing/Intro/styles'
import { SEO } from '../components/common/SEO'
import goBack from 'Static/svg/go-back.svg'

const GoBackArrow = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 2.5rem;
`
const GitHubButton = styled.a`
  padding: 0.35rem 0.65rem;
  border-radius: 3px;
  background-color: rgb(240, 237, 255);
  font-weight: 400;
  color: #333393;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  width: fit-content;
`

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
                <GoBackArrow
                  src={goBack}
                  alt="Ga terug"
                />
              </Link>
              <GitHubButton
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </GitHubButton>
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
