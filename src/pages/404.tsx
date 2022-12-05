import { graphql } from 'gatsby';
import * as React from 'react';

function NotFoundPage() {
  return <p>Page not found</p>;
}

export default NotFoundPage;

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
