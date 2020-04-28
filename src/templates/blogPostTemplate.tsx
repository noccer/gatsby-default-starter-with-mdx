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

interface PageContext {
  pageContext: {
    body: any;
    title: string;
    date: string;
  };
}

function blogTemplate(data: PageContext) {
  console.log({ data });
  const { date, title, body } = data.pageContext;

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
