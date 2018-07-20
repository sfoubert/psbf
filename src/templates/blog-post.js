import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Waypoint from 'react-waypoint'

import Nav from '../components/Nav'

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({stickyNav: false}));
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({stickyNav: true}));
  };

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const {previous, next} = this.props.pathContext;

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`}/>

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav}/>

        <div id="main">
          <section id="post" className="main">

            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0,
              }}
            >
              <li>
                {
                  previous &&
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                }
              </li>
              <li>
                {
                  next &&
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                }
              </li>
            </ul>

            <h1>{post.frontmatter.title}</h1>
            <p>
              {post.frontmatter.date}
            </p>

            <div dangerouslySetInnerHTML={{__html: post.html}}/>

            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0,
              }}
            >
              <li>
                {
                  previous &&
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                }
              </li>
              <li>
                {
                  next &&
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                }
              </li>
            </ul>

          </section>
        </div>

      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "fr")
      }
    }
  }
`;
