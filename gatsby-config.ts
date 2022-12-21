import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Stroje Taneczne`,
    siteUrl: `https://www.strojetaneczne.p`,
  },
  graphqlTypegen: true,
  plugins: [
    // data source
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/data/products`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/app`,
      },
    },
    // tailwind
    'gatsby-plugin-postcss',
    // images
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // lint/typecheck
    'gatsby-plugin-eslint',
    'gatsby-plugin-ts-checker',
    // fonts
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`],
        web: [
          {
            name: `Quicksand`,
            file: `https://fonts.googleapis.com/css2?family=Quicksand&display=swap`,
          },
          {
            name: `Poiret One`,
            file: `https://fonts.googleapis.com/css2?family=Poiret+One&display=swap`,
          },
        ],
      },
    },
    // icons
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/icons/,
        },
      },
    },
  ],
};

export default config;
