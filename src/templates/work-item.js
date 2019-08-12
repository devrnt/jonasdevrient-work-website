import React from "react"
import { graphql } from 'gatsby';
import { Layout, Container } from 'Common'
import { IntroWrapper, Details } from "../components/landing/Intro/styles";

export default ({data}) => {
  const project = data.github.repositoryOwner.repository;
  const readmeHtml = data.githubReadme.childMarkdownRemark.html;
  const dom = new DOMParser().parseFromString(readmeHtml, 'text/html');

  const images = dom.getElementsByTagName('img');
  for(let element of images){
    if(element.src.endsWith('.gif')){
      const srcEnd = element.src.split('/showcase/')[1];
      const beginUrl = `https://raw.github.com/devrnt/${project.name}/master/showcase/`;
      const updatedSrc = `${beginUrl}${srcEnd}`;
      element.src = updatedSrc;
    } 
  }
  
  return (
    <Layout>
      <IntroWrapper as={Container}>
        <Details>
          <div dangerouslySetInnerHTML={{__html: dom.documentElement.innerHTML}}></div>
        </Details>
      </IntroWrapper>
    </Layout>
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