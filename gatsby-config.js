module.exports = {
    siteMetadata: {
        title: 'PSBF - Paris Savate Boxe Française',
        author: 'Sébastien Foubert',
        description: 'Club de Savate Boxe Française sur Paris',
        siteUrl: 'https://psbf.netlify.com',
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
                policy: [{ userAgent: '*', allow: '/' }]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`
    ],
}
