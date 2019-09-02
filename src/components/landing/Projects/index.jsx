import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Container, Card } from 'Common'
import starIcon from 'Static/svg/star.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'
import CategoryFilter from '../../category-filter.js';

export const Projects = () => {
	const {
		github: {
			repositoryOwner: {
				repositories: { edges },
			},
		},
	} = useStaticQuery(graphql`
	{
		github {
			repositoryOwner(login: "devrnt") {
				repositories(
					first: 50
					privacy: PUBLIC
					orderBy: { field: STARGAZERS, direction: DESC }
				) {
					edges {
						node {
							id
							name
							url
							description
							languages(last:1) {
								edges {
									node {
										name
										color
									}
								}
							}
							repositoryTopics(last:1) {
                edges {
                  node {
                    topic {
                      name
                    }
                  }
                }
              }
							stargazers {
								totalCount
							}
							forkCount
						}
					}
				}
			}
		}
	}
	`)
	return (
		<Wrapper as={Container} id="projects">
			<h2>Projecten</h2>
			<CategoryFilter projects={edges.map((project) => project.node)} />
		</Wrapper>
	)
}
