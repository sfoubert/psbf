module.exports = {
  siteMetadata: {
    title: 'PSBF, Paris Savate Boxe Française',
    author: 'Sébastien Foubert',
    description: 'PSBF Paris Savate Boxe Française est un club de boxe française sur Paris proposant différents cours tout niveaux dans la semaine, aussi bien loisir que compétiteur. La rentrée sportive de notre section Boxe Française commence début septembre 2018',
    siteUrl: 'http://www.parissavate.fr',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-2767287-19',
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: [],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/sitemap.xml',
        query: `
                    {
                      site {
                        siteMetadata {
                          siteUrl
                        }
                      }
                      allSitePage {
                        edges {
                          node {
                            path
                          }
                        }
                      }
                  }`
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: 'gatsby-plugin-purify-css',
      options: {
        /* Defaults */
        styleId: 'gatsby-inlined-css',
        purifyOptions: {
          info: true,
          minify: true
        }
      }
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
