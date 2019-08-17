import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Container, Card } from 'Common'
import starIcon from 'Static/svg/star.svg'
import forkIcon from 'Static/svg/fork.svg'
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
					first: 10
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
				{edges.map(({ node }) => (
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
								<div>
									<img src={starIcon} alt="stars" />
									<span>{node.stargazers.totalCount}</span>
								</div>
								<div>
									<img src={forkIcon} alt="forks" />
									<span>{node.forkCount}</span>
									{/* <span>{node.languages.edges}</span> */}
								</div>
								<div style={{position:`absolute`, right:`0`}}>
										{node.languages.edges[0] !== undefined && 
										<span 
											style={{
												padding: `0.3rem 0.75rem`,
												color:`white`,
												fontSize: `0.75rem`,
												 backgroundColor: node.languages.edges[0].node.color,
												 borderRadius: `3px`,
											}}>
											{node.languages.edges[0].node.name}</span>}
								</div>
							</Stats>
						</Card>
					</Item>
						</Link>
				))}
			</Grid>
		</Wrapper>
	)
}
