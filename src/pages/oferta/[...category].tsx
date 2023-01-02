import Seo from 'components/seo';
import { graphql, HeadProps, PageProps } from 'gatsby';
import * as React from 'react';

export default function OfferPage({
  data,
  params,
}: PageProps<Queries.OfferPageQuery>) {
  const [products, setProducts] = React.useState<
    Queries.OfferPageQuery['allMdx']['nodes']
  >(
    data.allMdx.nodes.filter((n) =>
      n.frontmatter?.category?.match('^' + params.category + '.*$'),
    ),
  );

  React.useEffect(() => {
    setProducts(() =>
      data.allMdx.nodes.filter((n) =>
        n.frontmatter?.category?.startsWith(params.category),
      ),
    );
  }, [params, data.allMdx.nodes]);

  return (
    <div>
      {products.map((n) => (
        <li key={n.frontmatter?.category}>{n.frontmatter?.category}</li>
      ))}
    </div>
  );
}

export const Head = ({ data }: HeadProps<Queries.OfferPageQuery>) => (
  // TODO implement categories map with titles and extensible for i18n
  <Seo title='Oferta - StrojeTaneczne.pl'></Seo>
);

export const query = graphql`
  query OfferPage {
    allMdx {
      nodes {
        frontmatter {
          category
        }
      }
    }
  }
`;
