# args-flags

A simple command line argument parser.

## Install

```bash
yarn add args-flags
```

```bash
npm install args-flags
```

## Usage

```json
{
  "scripts": {
    "build": "node scripts/build.js README.mdx > README.md"
  }
}
```

Now we have access to the arguments and flags in `scripts/build.js` derived from `process.argv`:

```js
#!/bin/env node
import { args, flags } from 'args-flags'
import { watch } from 'chokidar'

const [optionOne, optionTwo] = args

if (flags.watch) {
  watch('./src').on('change', () => {
    console.log('source changed')
  })
}
```
