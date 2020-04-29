import React from 'react';
// import PostList from "../components/post-list"
import Layout from '../components/layout';
import { graphql, StaticQuery } from 'gatsby';
import BlogOverviewList from '../components/Blog/BlogOverviewList';

import './blog.scss';

const Blog = () => {
  return (
    <StaticQuery
      query={pageQuery}
      render={(data) => {
        return (
          <Layout>
            <h1>This is the blog</h1>
            <h3 className="red italic">
              This red colour comes from some custom scss
              <br />
              The italics comes from tailwind.
              <br />
              See <code>blog.scss</code> for more info.
            </h3>
            <p>Here are the blog posts:</p>
            <main>
              <BlogOverviewList data={data} />
              {/* TODO - only pass in paths, then use StaticQuery inside BlogItem */}
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
