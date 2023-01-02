import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `StrojeTaneczne.pl`,
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
        path: `${__dirname}/products`,
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
    // fonts + config in tailwind
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
    // icons + config in custom.d.ts
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          // regexp
          include: /assets\/icons/,
        },
      },
    },
  ],
};

export default config;
