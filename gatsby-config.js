module.exports = {
  siteMetadata: {
    title: `WordPress, Shopify, Gatsby E-commerce Website Developer in Mumbai`,
    description: `A superfast E-commerce development that generate the sales.`,
    author: `Raj Soni`,
    siteUrl: `https://inventtheweb.com`,
    image: "/src/images/Inventtheweb-logo-black.webp",
    keywords:
      "ecommerce developer mumbai, freelance wordpress developer mumbai, freelance website developer",
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
        name: `Case Study`,
        path: `${__dirname}/casestudies`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ITW-favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\/src\/images\/svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require("tailwindcss")],
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-165863268-1", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
}
