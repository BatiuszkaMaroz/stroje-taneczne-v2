import type { GatsbyConfig } from 'gatsby';
import { defaultLanguage, languages } from './languages';

const siteUrl = `https://www.yourdomain.tld`;

const config: GatsbyConfig = {
  siteMetadata: {
    title: `stroje-taneczne-v2`,
    siteUrl,
  },
  graphqlTypegen: true,
  plugins: [
    // data source
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/products`,
        name: `products`,
      },
    },
    // tailwind
    `gatsby-plugin-postcss`,
    // images
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // lint/typecheck
    `gatsby-plugin-eslint`,
    `gatsby-plugin-ts-checker`,
    // i18n
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        languages,
        defaultLanguage,
        siteUrl,
      },
    },
  ],
};

export default config;
