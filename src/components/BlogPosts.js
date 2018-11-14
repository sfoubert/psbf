import React from 'react';
import PropTypes from 'prop-types';

import Link from 'gatsby-link';
import get from 'lodash/get';

const BlogPosts = (props) => {
  const posts = props.posts;
  return (
    <div>
      {posts.map(({node}) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3>
              <Link style={{boxShadow: 'none'}} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{__html: node.excerpt}}/>
          </div>
        )
      })}
    </div>
  )
};

BlogPosts.propTypes = {
  posts: PropTypes.object,
};

export default BlogPosts