import { Trans } from 'gatsby-plugin-react-i18next';
import * as React from 'react';
import { graphql } from 'gatsby';

function IndexPage() {
  return (
    <p>
      <Trans>Witaj świecie</Trans>
    </p>
  );
}

export default IndexPage;

export const query = graphql`
  query IndexPage($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
