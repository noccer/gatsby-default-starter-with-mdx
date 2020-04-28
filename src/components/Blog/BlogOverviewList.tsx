import React from 'react';
import { graphql } from 'gatsby';
import BlogItem, { Mdx } from '../../templates/BlogItem';

const BlogOverviewList = ({ data }: any) => {
  console.log('BlogOverviewList', { data });

  return (
    <>
      {data.allMdx.nodes.map((node: Mdx) => {
        return <BlogItem key={node.frontmatter.path} {...node} />;
      })}
    </>
  );
};

export default BlogOverviewList;

export const pageQuery = graphql`
  query GetBlogPostList {
    allMdx {
      nodes {
        frontmatter {
          path
        }
      }
    }
  }
`;
