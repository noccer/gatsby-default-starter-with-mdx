import React from 'react';
import { graphql, Link } from 'gatsby';
import { BlogItemProps } from '../../templates/blogPostTemplate';
import { formatDateDDMMYYYY } from '../../utils/date';

const BlogPreview: React.FC<BlogItemProps> = ({
  frontmatter: { title, date },
}) => {
  const formattedDate = formatDateDDMMYYYY(date); // TODO: we can actually get the backend to format this correctly when we request it
  return (
    <div>
      <h3>{title}</h3>
      <p>{formattedDate}</p>
    </div>
  );
};

const BlogOverviewList = ({
  data,
}: {
  data: {
    allMdx: {
      nodes: BlogItemProps[];
    };
  };
}) => {
  const { nodes: blogPosts } = data.allMdx;

  return (
    <div>
      {blogPosts.map((post: BlogItemProps) => (
        <Link key={post.frontmatter.path} to={post.frontmatter.path}>
          <BlogPreview {...post} />
        </Link>
      ))}
    </div>
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
