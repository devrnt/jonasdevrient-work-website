import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Container, Card } from 'Common'
import starIcon from 'Static/svg/star.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'

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
			<Grid>
				{edges.map(({ node }) => {
					let backgroundColor = '#333393';
					let color = 'white';
						switch (node.repositoryTopics.edges[0].node.topic.name) {
							case 'mobile':
								backgroundColor = '#e2e0ff';
								color='rgb(62, 43, 165)';
								break;
							case 'website':
								backgroundColor = '#333393';
								color = 'rgb(240, 237, 255)';
								break;
							case 'school':
								backgroundColor = 'rgba(0,0,0,0.12)';
								color = 'rgb(62, 62, 62)';
								break;
							default:
								break;
						}
				
					return(
						<Link
							key={node.id}
							to={`/${node.name}`}
							rel="noopener noreferrer"
						>
						<Item >
						<Card>
							<Content>
								<h4>{node.name}</h4>
								<p>{node.description}</p>
							</Content>
							<Stats style={{position:`relative`}}>
									<span 
										style={{
												padding: `0.2rem 0.65rem`,
												borderRadius: `3px`,
												backgroundColor: backgroundColor,
												fontWeight:`400`,
												color:color,
												fontSize: `0.9rem`,
										}}>
											{node.repositoryTopics.edges[0].node.topic.name}
										</span>
							</Stats>
						</Card>
					</Item>
						</Link>
				)})}
			</Grid>
		</Wrapper>
	)
}
