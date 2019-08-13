import React from "react"
import { graphql } from 'gatsby';
import { Layout, Container } from 'Common'
import { IntroWrapper, Details } from "../components/landing/Intro/styles";
import { SEO } from "../components/common/SEO";

export default ({data}) => {
  const project = data.github.repositoryOwner.repository;
  let readmeHtml = '';
  if(data.githubReadme !== null){
    readmeHtml = data.githubReadme.childMarkdownRemark.html;
  }

  let dom = ``;
  // Wrap the require in check for window
  if (typeof window !== `undefined`) {
    dom = document.createElement('div');
    dom.innerHTML = readmeHtml;
    
    const images = dom.getElementsByTagName('img');
    for(let element of images){
      if(element.src.endsWith('.gif')){
        const srcEnd = element.src.split('/showcase/')[1];
        const beginUrl = `https://raw.github.com/devrnt/${project.name}/master/showcase/`;
        const updatedSrc = `${beginUrl}${srcEnd}`;
        element.src = updatedSrc;
      } 
  }
  }

  console.log(dom);

   
  const title = `${project.name[0].toUpperCase()}${project.name.replace('-', ' ').substring(1)} | Jonas De Vrient `

  return (
    <>
    <SEO
     title={title}
     description={project.description}
     />
    <Layout>
      <IntroWrapper as={Container}>
        <Details>
          <div dangerouslySetInnerHTML={{__html: dom.innerHTML}}></div>
        </Details>
      </IntroWrapper>
    </Layout>
    </>
  );
}

export const query = graphql`
  query ($name: String!) {
    github {
      repositoryOwner(login: "devrnt") {
        repository(name: $name) {
          id
          name
          description
          stargazers {
            totalCount
          }
          forkCount
        }
      }
    }
    githubReadme(title: {eq: $name}) {
      childMarkdownRemark {
        html
      }
    }
  }
`