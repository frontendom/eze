# Dev

`npm install`
`npm start`

# Notes 

Some obscure portions are mentioned below: 

* `collector.ts` Used in the node process to collect `eze` calls.
* `renderers.tsx` Used to render stories in the main ui app.
* `story.tsx` Used to render a story sections in a story ui app.

## Story
Each story is rendered in iframe `iframe0` etc. Headings inside the iframe are rendered with `ifrmae0-some-heading`. This allows the table of contents to work `headingId.split('-')[0]` gives the frame id. 

Hash handling code is in `toc.tsx` in parent and `story.tsx` in child. Types are in `types.ts` so you can find references using that.