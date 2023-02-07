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
  - './spodnie-do-tańca-towarzyskiego.mdx'
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

## Setup

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

- [Tailwind.css](https://tailwindcss.com/docs/guides/gatsby)
- [Creating layout](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting)
- [Client-side routing](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/#creating-client-only-routes)
- [Customizing HTML](https://www.gatsbyjs.com/docs/custom-html/)
- Develop gatsby on local IP - `gatsby develop -H 192.168.0.73 -p 8000`

### Categories handling

Offer page takes dynamic parameter with category string that will be using in regex against all products. Some most generic pages like `/mezczyzni` will be pre-rendered while more specific like `/dziewczynki/sukienki` will not.

### Sidenav

Handling sidenav was quite a problem, what I learned is:

- Fixed - element with `position: fixed` is viewport neutral so even if it exceeds the viewport, viewport will remain the same, browser will not try to change viewport size so it's perfect for hidden side navigation.
- [Overflow](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content) - setting `overflow: scroll | hidden` makes element a [scroll container](https://developer.mozilla.org/en-US/docs/Glossary/Scroll_container), meaning it is scrollable / has own scrollbars for its content.
- [Sticky](https://developer.mozilla.org/en-US/docs/Web/CSS/position) - element with `position: sticky` sticks to nearest scroll container or viewport if such container does not exist.
- Own scrollable element - if you set this you will be scrolling an html element so `window.scrollBy(x,y)` will not work. Also, there is possibility you will have scrollbars on viewport and on html element, so two scrollbars. Does not sound like a good idea overall.

  ```css
  html {
    height: 100%;
    width: 100%
    overflow: scroll;
  }
  ```

- Exceeding viewport - on mobile browser if you exceed content horizontally, browser will align its viewport to it (to `old_size` + `excess_size`) so it will do something like zoom-out, then you will be able to do zoom-out to see the the page in this new size.

  This is very problematic because your whole page is displayed wrong. Same effect can be seen if you create page and have header without RWD, header will be a lot wider that content and you will see something like this.

  ```txt
  HHHHHHHH
  CCCC
  CCCC
  CCCC
  ```

  While you would like to have it like this.

  ```txt
  HHHH
  CCCC
  CCCC
  CCCC
  ```

- Solution - technically you could disable zooming using `user-scalable=no` in viewport metatag but it is not good for [accessibility](https://www.boia.org/blog/web-accessibility-tips-dont-disable-zooming-yes-even-on-mobile). But hey, the problem is only in zooming-out, so the easy fix is to apply `minimum-scale=1` and that is the **PERFECT SOLUTION**. Now browser will not do zooming out on horizontal content excess, instead it will just apply scrollbars identically as on vertical axis.
