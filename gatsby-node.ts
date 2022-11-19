import type { GatsbyNode, CreateWebpackConfigArgs } from 'gatsby';
import path from 'path';

export const onCreateWebpackConfig = ({
  stage,
  actions,
}: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      // first search in src then in node_modules
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
