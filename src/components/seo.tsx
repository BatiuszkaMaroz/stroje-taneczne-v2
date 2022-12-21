import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

type SeoProps = React.PropsWithChildren & {
  title?: string;
  description?: string;
};

export default function Seo({ title, description, children }: SeoProps) {
  const data = useStaticQuery(graphql`
    query Seo {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const seo = {
    title: title || data.site.siteMetadata.title,
    description: description || data.site.siteMetadata.description,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      {children}
    </>
  );
}
