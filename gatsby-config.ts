import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `stroje-taneczne-v2`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': 'src',
        },
        extensions: ['ts', 'tsx'],
      },
    },
  ],
};

export default config;
