import type { CreateWebpackConfigArgs, CreateNodeArgs } from 'gatsby';
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

export const onCreateNode = ({ node, actions }: CreateNodeArgs) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx` && node.internal.contentFilePath) {
    const name = path.basename(node.internal.contentFilePath, `.mdx`);
    const lang = name.split(`.`)[1];

    createNodeField({ node, name: `locale`, value: lang });
  }
};
