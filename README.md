# EZE

> Making creating meaninful demos / styleguides easy ❤️

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

> [Powered by your github ⭐s](https://github.com/basarat/eze/stargazers)

<iframe src="https://ghbtns.com/github-btn.html?user=basarat&repo=eze&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>

## Install
Install

`npm install eze --save-dev --save-exact`

Create a ts (tsx) file (e.g. `./src/docs/main.ts`)

```ts
import { render } from "../index";

/** Render documentation */
render({
  outputDir: __dirname + '/../../docs'
}, async eze => {

  /** Write some markdown */
  await eze.md(`
  # Demo
  This is the demo for eze
  `);

  /** Show some complete application demos */
  await eze.app({ entryPointPath: __dirname + '/app-1.tsx' });
});
```

Run it `npm install ts-node --save --save-exact` with `package.json`: 

```json
{
  "scripts": {
    "docs": "ts-node ./src/docs/main"  
  }
}
```

Now `npm run docs` builds the demos out to the specified folder. HTML + JavaScript. You can push that folder to s3 or surge.sh or even github  🌹

> Ofcourse you can use js / raw node if you want to. But why would you.

## Live Preview

For live development just use `npm install starts --save-dev`: 

```json
{
  "scripts": {
    "docs": "ts-node ./src/docs/main",
    "start": "ts-node ./src/starts", 
  }
}
```
`starts.ts`:

```ts
import { starts } from 'starts';

starts({
  serve: {
    dir: './docs',
    port: 4000
  },
  run: [
    { cmd: 'npm run docs', watch: ['src/**'] },
  ]
})
```

`npm start` 🌹

# Demo

[Jump to the demo for eze built with eze 📝](http://basarat.com/eze)


[travis-image]:https://travis-ci.org/basarat/eze.svg?branch=master
[travis-url]:https://travis-ci.org/basarat/eze
[npm-image]:https://img.shields.io/npm/v/eze.svg?style=flat
[npm-url]:https://npmjs.org/package/eze