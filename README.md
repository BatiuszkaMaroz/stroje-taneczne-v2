# Project notes

## Schemas

### Category

```yaml
root:
  - name: 'wszystko'
    sub:
      - name: 'męskie'
        sub:
          - name: 'koszule-body'
          - name: 'spodnie'
          - name: 'koszule'
      - name: 'damskie'
        sub:
          - name: 'body'
          - name: 'sukienki'
```

### Product

```yaml
---
name: 'body do tańca towarzyskiego'
slug: 'męskie/koszule-body/body-do-tańca-towarzyskiego'
category: 'męskie/koszule-body'
tags:
  - 'nowość'
  - 'bestseller'
colors:
  - name: 'biały'
    hex: '#fff'
  - name: 'czarny'
    hex: '#000'
prices:
  122: 100
  128: 110
  134: 120
  140: 130
  146: 140
  152: 150
  158: 160
  164: 170
  170: 180
  176: 190
  180: 200
  185: 210
  190: 220
  195: 230
images:
  - source: './body-do-tańca-towarzyskiego-1.jpg'
    text: 'Lorem ipsum'
    alt: 'body do tańca towarzyskiego'
  - source: './body-do-tańca-towarzyskiego-2.jpg'
    alt: 'body do tańca towarzyskiego'
  - source: './body-do-tańca-towarzyskiego-3.jpg'
    alt: 'body do tańca towarzyskiego'
relatedProducts:
  TODO
dimensions:
  - 1
  - 3
  - 8
  - 9
---

### Opis

Lorem ipsum. Lorem ipsum. Lorem ipsum.

### Cechy

- lorem ipsum,
- lorem ipsum,
- lorem ipsum.
```

## Setup explanation

### Eslint

1. Install and use `gatsby-plugin-eslint`.
1. Run `npx eslint --init` (react, ts, browser + node, json).
1. Install and use selected plugins from eslint-plugin-react [other-useful-plugins](https://www.npmjs.com/package/eslint-plugin-react#other-useful-plugins).
1. Configure [graphql-eslint](https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/#graphql-eslint).
1. In `eslintrc.json` set:

```json
  "rules": {
    // disable warning on function arguments
    "@typescript-eslint/no-unused-vars": ["warn", { "args": "none" }]
  }

  "settings": {
    // detect react version
    "react": {
      "version": "detect"
    }
  },
```

### `src` as baseUrl

1. Set baseUrl in `tsconfig.json`.
1. Configure [absolute imports](https://www.gatsbyjs.com/docs/how-to/custom-configuration/add-custom-webpack-config/#absolute-imports).
1. Set path aliases (optional).

### Other

- [Typecheck](https://www.gatsbyjs.com/plugins/gatsby-plugin-ts-checker/?=ts%20checker)
- [MDX as data source](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/?=gatsby-plugin-mdx)
- [Images](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/?=gatsby%20image)
- [Tailwind.css](https://tailwindcss.com/docs/guides/gatsby)
