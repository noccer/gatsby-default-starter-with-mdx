import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export interface Mdx {
  frontmatter: {
    path: string;
    title: string;
    date: string;
  };
  body: string;
}

function BlogItem(
  // body,
  // frontmatter: { title, date },
  data: // this prop will be injected by the GraphQL query below.
  Mdx
) {
  const {
    body,
    frontmatter: { title, date },
  } = data;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{title}</h1>
        <h2>{date}</h2>
        <div className="blog-post-content">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      id
      body
    }
  }
`;
