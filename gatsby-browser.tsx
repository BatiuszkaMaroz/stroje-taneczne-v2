import { WrapPageElementBrowserArgs } from 'gatsby';
import * as React from 'react';
import Layout from './src/components/layout';
import './src/styles/global.css'; // tailwind

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs) => {
  return <Layout {...props}>{element}</Layout>;
};
