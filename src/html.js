import React from 'react';
import PropTypes from 'prop-types';

/*
 * Copied from .cache/default-html.js.
 *
 * This file was created because of need to change value
 * of viewport metatag. It cannot be done otherwise, doing
 * it via gatsby-ssr leads to duplication of metatag which
 * can cause display problems with viewport.
 *
 * Add minimum-scale=1 to viewport metatag to prevent mobile
 * browser from zooming-out while sidenav is opened and whole
 * page shifted right.
 */
export default function HTML(props) {
  return (
    <html lang='pl' {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no'
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
