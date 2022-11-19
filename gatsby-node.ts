import type { CreateWebpackConfigArgs } from 'gatsby';
import path from 'path';

export const onCreateWebpackConfig = ({
  stage,
  actions,
}: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      // look for modules in 'src' then in 'node_modules'
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
