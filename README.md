# Darkblock.io React Avalanche Widget

## Getting Started 🚀

Install Darkblock's React Avalanche Widget using `yarn` or `npm`

```
yarn add @darkblock.io/avax-widget
```

```
npm i @darkblock.io/avax-widget --save
```

Once the library is installed, import or require components into your codebase, i.e:

```
import "@darkblock.io/avax-widget"

require("@darkblock.io/avax-widget")
```

## Testing locally

Run `yarn storybook`

Or test the widget on the Nextjs app

- Run `yarn build-lib`. This will generate the `dist` folder with the following files

  ```
  dist
  ├── README.md
  ├── index.es.js
  ├── index.js
  └── package.json
  ```

- Copy `index.js` into the Nextjs App `components` folder and rename it to `avax.js`

- Use `avax.js` instead of the npm package by changing

  ```
  const AvalancheDarkblockWidget = dynamic(() => import('@darkblock.io/avax-widget'), { ssr: false })
  ```

  to

  ```
  const AvalancheDarkblockWidget = dynamic(() => import('./avax'), { ssr: false })
  ```
