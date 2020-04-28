/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blogPostTemplate.tsx');

  return graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            path
            title
            date
          }
          body
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMdx.nodes;

    // create page for each mdx file
    posts.forEach((post) => {
      console.log({ post });
      createPage({
        path: post.frontmatter.path,
        title: post.frontmatter.title,
        date: post.frontmatter.date,
        body: post.body,
        component: blogPostTemplate,
        context: {
          path: post.frontmatter.path,
          title: post.frontmatter.title,
          date: post.frontmatter.date,
          body: post.body,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
