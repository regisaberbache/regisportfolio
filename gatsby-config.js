module.exports = {
  siteMetadata: {
    title: `Régis Aberbache | Portfolio`,
        description: `Directeur artistique freelance tous supports, sites internet, conseil en communication, gestion de projet`,
    author: `Régis Aberbache`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: 'gatsby-source-prismic-graphql',
        options: {
            repositoryName: 'regisportfolio', // (REQUIRED, replace with your own)
            linkResolver: () => post => `/${post.uid}`,
            omitPrismicScript: true
        }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Régis Aberbache Portfolio`,
        short_name: `Régis Aberbache`,
        start_url: `/`,
        background_color: `#ffff50`,
        theme_color: `#ffff50`,
        display: `minimal-ui`,
        icon: `src/images/regis-icon.png`, // This path is relative to the root of the site.
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    // {
    //     resolve: `gatsby-plugin-google-analytics`,
    //     options: {
    //         trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //         head: true,
    //     },
    // },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
