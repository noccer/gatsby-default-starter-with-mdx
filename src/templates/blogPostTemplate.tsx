import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import { Link } from 'gatsby';

export interface BlogItemProps {
  frontmatter: {
    path: string;
    title: string;
    date: string;
  };
  body: string;
}

interface BlogPageContext {
  pageContext: {
    body: any;
    title: string;
    date: string;
  };
}

function blogTemplate(blog: BlogPageContext) {
  const { date, title, body } = blog.pageContext;

  return (
    <Layout>
      <div className="blog-post-container">
        <Link to={'/blog'}>Back</Link>
        <div className="blog-post">
          <h1>{title}</h1>
          <h2>{date}</h2>
          <div className="blog-post-content">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default blogTemplate;
