import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout, Container } from 'Common'
import { IntroWrapper, Details } from '../components/landing/Intro/styles'
import { SEO } from '../components/common/SEO'
import goBack from 'Static/svg/go-back.svg'
import github from 'Static/svg/github.svg'

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
                  color: `#333399`,
                  marginBottom: `0.15rem`,
                  fontSize: `0.95rem`,
                }}
              >
                View on GitHub
              </a>
            </div>
            <div dangerouslySetInnerHTML={{ __html: dom.innerHTML }}></div>
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
          stargazers {
            totalCount
          }
          forkCount
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
