var data = {"contents":[{"type":"html","html":"<a href=\"http://github.com/basarat/eze\" class=\"github-corner\" aria-label=\"Visit Project\"><svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\" style=\"fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;\" aria-hidden=\"true\"><path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path><path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\" fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path><path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\" fill=\"currentColor\" class=\"octo-body\"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>"},{"type":"html","html":"<div class=eze-markdown><h1>\n      Demo\n      <a name=\"demo\" class=\"heading-anchor\" href=\"#demo\" aria-hidden=\"true\">\n        <svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>\n      </a>\n    </h1><p>To create demos like this you write code like this:</p></div>"},{"type":"html","html":"<div class=eze-markdown><pre><code><div style=\"display: inline-block\"><span class=\"hljs-keyword\">import</span> { render } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">\"../index\"</span>;\n<span class=\"hljs-keyword\">import</span> { colors } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'../internal/styles'</span>;\n<span class=\"hljs-keyword\">import</span> { appIndexTemplate } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'../internal/collector'</span>;\n\n<span class=\"hljs-comment\">/** Render */</span>\nrender({\n  <span class=\"hljs-attr\">outputDir</span>: __dirname + <span class=\"hljs-string\">'/../../docs'</span>,\n  <span class=\"hljs-attr\">repoUrl</span>: <span class=\"hljs-string\">\"http://github.com/basarat/eze\"</span>,\n  <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'eze 🌹'</span>\n}, <span class=\"hljs-keyword\">async</span> eze =&gt; {\n\n  <span class=\"hljs-comment\">/** Write some markdown */</span>\n  <span class=\"hljs-keyword\">await</span> eze.md(<span class=\"hljs-string\">`\n  # Demo\n  To create demos like this you write code like this:\n  `</span>);\n\n  <span class=\"hljs-comment\">/** Show this file */</span>\n  <span class=\"hljs-keyword\">await</span> eze.code({ <span class=\"hljs-attr\">mode</span>: <span class=\"hljs-string\">'ts'</span>, <span class=\"hljs-attr\">code</span>: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'fs'</span>).readFileSync(__filename).toString() })\n\n  <span class=\"hljs-keyword\">await</span> eze.md(<span class=\"hljs-string\">`\n  # Why?\n  Because its code. \n\n  Reuse code variables + do fancy **code** stuff like a 👔 . \n\n  e.g. the color of this text is <span class=\"hljs-subst\">${colors.text}</span> 🌹\n\n  And so many of the same advantages as [TypeStyle](http://typestyle.io/#/why).\n  `</span>);\n\n  <span class=\"hljs-comment\">/** Show some complete application demos */</span>\n  <span class=\"hljs-keyword\">await</span> eze.md(<span class=\"hljs-string\">`\n  # Embed applications\n  You can easily show complete applications:\n  `</span>);\n  <span class=\"hljs-keyword\">await</span> eze.app({\n    <span class=\"hljs-attr\">entryPointPath</span>: __dirname + <span class=\"hljs-string\">'/app-1.tsx'</span>,\n    <span class=\"hljs-attr\">sourceUrl</span>: <span class=\"hljs-string\">'https://github.com/basarat/eze/blob/master/src/docs/app-1.tsx'</span>,\n    <span class=\"hljs-attr\">height</span>: <span class=\"hljs-string\">'100px'</span>\n  });\n  <span class=\"hljs-keyword\">await</span> eze.md(<span class=\"hljs-string\">`\n  Embedded applications are automatically showcased in the best height\n   to prevent a vertical scrollbar on initial load.\n  `</span>);\n  <span class=\"hljs-keyword\">await</span> eze.app({\n    <span class=\"hljs-attr\">entryPointPath</span>: __dirname + <span class=\"hljs-string\">'/app-2.tsx'</span>,\n    <span class=\"hljs-attr\">sourceUrl</span>: <span class=\"hljs-string\">'https://github.com/basarat/eze/blob/master/src/docs/app-2.tsx'</span>\n  });\n  <span class=\"hljs-keyword\">await</span> eze.md(<span class=\"hljs-string\">`\n  All applications can target the \\`root\\` element. The following is the HTML that is used:\n  `</span>);\n  <span class=\"hljs-keyword\">await</span> eze.code({\n    <span class=\"hljs-attr\">mode</span>: <span class=\"hljs-string\">'html'</span>,\n    <span class=\"hljs-attr\">code</span>: appIndexTemplate({ <span class=\"hljs-attr\">index</span>: <span class=\"hljs-number\">0</span>, <span class=\"hljs-attr\">jsFileName</span>: <span class=\"hljs-string\">'app-0.js'</span>})\n  })\n\n  <span class=\"hljs-comment\">/** Show stories */</span>\n  <span class=\"hljs-keyword\">await</span> eze.story({\n    <span class=\"hljs-attr\">entryPointPath</span>: __dirname + <span class=\"hljs-string\">'/story-1.tsx'</span>,\n  });\n\n  <span class=\"hljs-comment\">/** Table of contents */</span>\n  <span class=\"hljs-keyword\">await</span> eze.md(<span class=\"hljs-string\">`\n  # Table of contents\n  ## Generated\n  ### Automatically\n  #### Based on\n  the headings parsed from markdown.\n  `</span>);\n  \n})</div></code></pre></div>"},{"type":"html","html":"<div class=eze-markdown><h1>\n      Why?\n      <a name=\"why-\" class=\"heading-anchor\" href=\"#why-\" aria-hidden=\"true\">\n        <svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>\n      </a>\n    </h1><p>Because its code. </p>\n<p>Reuse code variables + do fancy <strong>code</strong> stuff like a 👔 . </p>\n<p>e.g. the color of this text is #555 🌹</p>\n<p>And so many of the same advantages as <a href=\"http://typestyle.io/#/why\" target=\"_blank\">TypeStyle</a>.</p></div>"},{"type":"html","html":"<div class=eze-markdown><h1>\n      Embed applications\n      <a name=\"embed-applications\" class=\"heading-anchor\" href=\"#embed-applications\" aria-hidden=\"true\">\n        <svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>\n      </a>\n    </h1><p>You can easily show complete applications:</p></div>"},{"type":"app","htmlFileName":"app-1.html","sources":[{"mode":"js","code":"import * as React from 'react';\nimport * as ReactDOM from 'react-dom';\nimport { colors } from '../internal/styles';\n\nReactDOM.render(\n  <h2 style={{color: colors.text}}>Hello World</h2>,\n  document.getElementById('root')\n);"}],"sourceUrl":"https://github.com/basarat/eze/blob/master/src/docs/app-1.tsx","height":"100px"},{"type":"html","html":"<div class=eze-markdown><p>Embedded applications are automatically showcased in the best height\nto prevent a vertical scrollbar on initial load.</p></div>"},{"type":"app","htmlFileName":"app-2.html","sources":[{"mode":"js","code":"import * as React from 'react';\nimport * as ReactDOM from 'react-dom';\nimport { colors } from '../internal/styles';\n\nReactDOM.render(\n  <div style={{ color: colors.text }}>\n    <h2>Example with lots of content</h2>\n    <h2>...</h2>\n    <h2>...</h2>\n    <h2>...</h2>\n    <h2>...</h2>\n  </div>,\n  document.getElementById('root')\n);"}],"sourceUrl":"https://github.com/basarat/eze/blob/master/src/docs/app-2.tsx"},{"type":"html","html":"<div class=eze-markdown><p>All applications can target the <code>root</code> element. The following is the HTML that is used:</p></div>"},{"type":"html","html":"<div class=eze-markdown><pre><code><div style=\"display: inline-block\"><span class=\"hljs-meta\">&lt;!DOCTYPE html&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">html</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n    <span class=\"hljs-comment\">&lt;!-- Standard Meta --&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">meta</span> <span class=\"hljs-attr\">charset</span>=<span class=\"hljs-string\">\"utf-8\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">meta</span> <span class=\"hljs-attr\">http-equiv</span>=<span class=\"hljs-string\">\"X-UA-Compatible\"</span> <span class=\"hljs-attr\">content</span>=<span class=\"hljs-string\">\"IE=edge,chrome=1\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">meta</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"viewport\"</span> <span class=\"hljs-attr\">content</span>=<span class=\"hljs-string\">\"width=device-width\"</span>&gt;</span>\n\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">title</span>&gt;</span>Demo: 0<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">title</span>&gt;</span>\n    \n    \n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">body</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"root\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text/javascript\"</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">\"./app-0.js\"</span>&gt;</span><span class=\"undefined\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">body</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">html</span>&gt;</span></div></code></pre></div>"},{"type":"story","htmlFileName":"story-3.html","code":"import { story } from '../story';\nimport * as React from 'react';\nimport { Anchor } from '../app/components/anchor';\n\nstory()\n  .md(`\n    # Stories\n    Just as easy to show as complete application demos.\n    e.g. Lets showcase our anchor:\n  `)\n  .demo(<Anchor href=\"http://www.google.com\" target=\"_blank\">\n    As an example click here to open google.\n  </Anchor>)\n  .render();","demoCodes":["<Anchor href=\"http://www.google.com\" target=\"_blank\">\n  As an example click here to open google.\n</Anchor>"]},{"type":"html","html":"<div class=eze-markdown><h1>\n      Table of contents\n      <a name=\"table-of-contents\" class=\"heading-anchor\" href=\"#table-of-contents\" aria-hidden=\"true\">\n        <svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>\n      </a>\n    </h1><h2>\n      Generated\n      <a name=\"generated\" class=\"heading-anchor\" href=\"#generated\" aria-hidden=\"true\">\n        <svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>\n      </a>\n    </h2><h3>\n      Automatically\n      <a name=\"automatically\" class=\"heading-anchor\" href=\"#automatically\" aria-hidden=\"true\">\n        <svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>\n      </a>\n    </h3><h4>\n      Based on\n      <a name=\"based-on\" class=\"heading-anchor\" href=\"#based-on\" aria-hidden=\"true\">\n        <svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>\n      </a>\n    </h4><p>the headings parsed from markdown.</p></div>"}],"tableOfContents":[{"level":1,"text":"Demo","id":"demo","subItems":[]},{"level":1,"text":"Why?","id":"why-","subItems":[]},{"level":1,"text":"Embed applications","id":"embed-applications","subItems":[]},{"level":1,"text":"Table of contents","id":"table-of-contents","subItems":[{"level":2,"text":"Generated","id":"generated","subItems":[{"level":3,"text":"Automatically","id":"automatically","subItems":[{"level":4,"text":"Based on","id":"based-on","subItems":[]}]}]}]}]}