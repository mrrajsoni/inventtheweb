module.exports = {
  siteMetadata: {
    title: `A freelance Frontend Developer from Mumbai`,
    description: `Superfast E-commerce development that generate the sales.`,
    author: `Raj Soni`,
    siteUrl: `https://inventtheweb.com`,
    menuLinks: [
      {
        name: "Projects",
        link: "/project",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Contact",
        link: "/project",
      },

      {
        name: "Projects",
        link: "/project",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsbyjs-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
