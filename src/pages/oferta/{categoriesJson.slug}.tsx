import Seo from 'components/seo';
import { graphql, HeadProps, PageProps } from 'gatsby';
import * as React from 'react';

export default function OfferPage({ data }: PageProps<Queries.OfferPageQuery>) {
  const products = React.useState<any>(
    data.allMdx.nodes.filter((n) =>
      n.frontmatter?.category?.match('.*' + data.categoriesJson?.slug + '.*'),
    ),
  );

  console.log(products);

  return (
    <div>
      {products[0].map((n: any) => (
        <li key={n.frontmatter?.category}>{n.frontmatter?.category}</li>
      ))}
      <h1>OFFER</h1>
    </div>
  );
}

export const Head = ({ data }: HeadProps<Queries.OfferPageQuery>) => (
  <Seo title={data.categoriesJson?.title || ''}></Seo>
);

export const query = graphql`
  query OfferPage($id: String) {
    categoriesJson(id: { eq: $id }) {
      slug
      title
    }
    allMdx {
      nodes {
        frontmatter {
          category
        }
      }
    }
  }
`;
