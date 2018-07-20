import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
        <div>
            <Helmet title={`${post.frontmatter.title} | ${siteTitle}`}/>
            <h1>{post.frontmatter.title}</h1>
            <p>
                {post.frontmatter.date}
            </p>

            <div id="main">
                <section id="post" className="main">
                    <ul className="actions">
                        <li><Link to="/" className="button">&lt;&nbsp;Retour</Link></li>
                    </ul>

                    <div dangerouslySetInnerHTML={{__html: post.html}}/>

                    <footer className="major">
                        <ul className="actions">
                            <li><Link to="/" className="button">Retour</Link></li>
                        </ul>
                    </footer>
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
