import type { GatsbyConfig } from 'gatsby';

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
        name: `products`,
        path: `${__dirname}/products`,
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
        name: `locale`,
        path: `${__dirname}/locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`pl`, `en`],
        defaultLanguage: `pl`,
        siteUrl,
        pages: [
          {
            matchPath: '/:lang?/oferta/:uid',
            getLanguageFromPath: true,
            excludeLanguages: [`pl`, `en`],
          },
        ],
      },
    },
  ],
};

export default config;
