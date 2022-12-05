import { graphql, PageProps } from 'gatsby';
import * as React from 'react';

function OfertaPage({ data }: PageProps<Queries.OfertaPageQuery>) {
  return (
    <p>
      {data.allMdx.nodes.map((n) => (
        <li key={Math.random()}>{n.frontmatter?.title}</li>
      ))}
    </p>
  );
}

export default OfertaPage;

export const query = graphql`
  query OfertaPage($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMdx(filter: { fields: { locale: { eq: $language } } }) {
      nodes {
        frontmatter {
          title
        }
      }
    }
  }
`;
