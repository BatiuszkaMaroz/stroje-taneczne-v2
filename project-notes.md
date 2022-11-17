# Project notes

## Category schema

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

## Product schema

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
    text: 'Lorem ipsum dolor sit amet'
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

Enim sint velit velit qui non ad in exercitation
reprehenderit commodo elit sit elit laboris.

### Cechy

- lorem ipsum,
- lorem ipsum,
- lorem ipsum.
```
