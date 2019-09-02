import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Grid, Item, Content, Stats } from './landing/Projects/styles'
import { Card } from 'Common'

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props)

    // Distinct categories
    const categories = this.props.projects
      .map(project => project.repositoryTopics.edges[0].node.topic.name)
      .filter((value, index, self) => self.indexOf(value) === index)

    categories.push('all')
    categories.sort()

    this.state = {
      projects: props.projects,
      categories,
      activeCategory: categories[0],
    }

    this.selectCategory = this.selectCategory.bind(this)
  }

  selectCategory(category) {
    this.setState({
      activeCategory: category,
    })
  }

  render() {
    return (
      <>
        <FilterButtons>
          {this.state.categories.map(category => {
            const backgroundColor =
              this.state.activeCategory === category
                ? 'rgb(51, 51, 147)'
                : 'rgba(0, 0, 0, 0.12)'

            const color =
              this.state.activeCategory === category
                ? 'rgb(240, 237, 255)'
                : 'rgb(62, 62, 62)'

            return (
              <FilterButton
                key={category}
                onClick={() => this.selectCategory(category)}
                style={{
                  backgroundColor: backgroundColor,
                  color: color,
                }}
              >
                {category}
              </FilterButton>
            )
          })}
        </FilterButtons>
        <Grid>
          {this.state.projects
            .filter(
              project =>
                this.state.activeCategory ===
                  project.repositoryTopics.edges[0].node.topic.name ||
                this.state.activeCategory === 'all'
            )
            .map(project => {
              let backgroundColor = '#333393'
              let color = 'white'
              switch (project.repositoryTopics.edges[0].node.topic.name) {
                case 'mobile':
                  backgroundColor = '#e2e0ff'
                  color = 'rgb(62, 43, 165)'
                  break
                case 'website':
                  backgroundColor = '#333393'
                  color = 'rgb(240, 237, 255)'
                  break
                case 'school':
                  backgroundColor = 'rgba(0,0,0,0.12)'
                  color = 'rgb(62, 62, 62)'
                  break
                default:
                  break
              }

              return (
                <Link
                  key={project.id}
                  to={`/${project.name}`}
                  rel="noopener noreferrer"
                >
                  <Item>
                    <Card>
                      <Content>
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                      </Content>
                      <Stats style={{ position: `relative` }}>
                        <span
                          style={{
                            padding: `0.2rem 0.65rem`,
                            borderRadius: `3px`,
                            backgroundColor: backgroundColor,
                            fontWeight: `400`,
                            color: color,
                            fontSize: `0.9rem`,
                          }}
                        >
                          {project.repositoryTopics.edges[0].node.topic.name}
                        </span>
                      </Stats>
                    </Card>
                  </Item>
                </Link>
              )
            })}
        </Grid>
      </>
    )
  }
}

const FilterButtons = styled.div`
  display: flex;
  justify-content: start;
  margin: 2.2rem 0 1.2rem;
`

const FilterButton = styled.span`
  margin: 0 1rem;
  padding: 0.35rem 0.85rem;
  border-radius: 3px;
  background-color: rgb(226, 224, 255);
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;

  &:nth-child(1) {
    margin-left: 0;
  }
`

export default CategoryFilter
