const path = require('path');

// Workaround: https://github.com/gatsbyjs/gatsby/issues/11934
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}

exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      github {
        repositoryOwner(login: "devrnt") {
          repositories(first: 50, privacy:PUBLIC, orderBy: {field: STARGAZERS, direction: DESC}) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    } 
  `)
  // console.log(JSON.stringify(result, null, 4));
  result.data.github.repositoryOwner.repositories.edges.forEach(({node}) => {
    createPage({
      path: `/${node.name}`,
      component: path.resolve('./src/templates/work-item.js'),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        name: node.name,
      }
    })
  });
}