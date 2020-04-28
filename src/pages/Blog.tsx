import React from 'react';
// import PostList from "../components/post-list"
import Layout from '../components/layout';
import { graphql, StaticQuery } from 'gatsby';
import BlogOverviewList from '../components/Blog/BlogOverviewList';

const Blog = () => {
  return (
    <StaticQuery
      query={pageQuery}
      render={(data) => {
        console.log({ data });

        return (
          <Layout>
            <h1>This is the blog</h1>
            <p>Here are the blog posts:</p>
            <main>
              <BlogOverviewList data={data} />
            </main>
          </Layout>
        );
      }}
    />
  );
};

export default Blog;

export const pageQuery = graphql`
  query GetBlogList {
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
`;
