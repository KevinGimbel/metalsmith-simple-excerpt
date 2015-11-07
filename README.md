# metalsmith-simple-excerpt

A [Metalsmith](http://metalsmith.io) Plugin to create excerpts from file contents.
Reads the first parts of the content Buffer, creates a subset of words and saves them to the file.

### Installation

Install via git:
```
$ git clone https://github.com/kevingimbel/metalsmith-simple-excerpt node_modules/metalsmith-simple-excerpt
```

Install with npm
```
$ npm install metalsmith-simple-excerpt
```

### Usage

Plug the excerpt into your Metalsmith pipeline. **Important** `simpleExcerpt` must be called before transforming the markdown files!

```
var simpleExcerpt = require('metalsmith-simple-excerpt');

var ms = Metalsmith(__dirname);
ms.use(simpleExcerpt({
  size: 50,
  bufferSize: 300,
  encoding: 'utf-8'  
});
```

### Options
| Name      | Type    | Default |Description                      |
|:------------|:--------|:--------|:--------------------------------|
| size        | Integer | 50      | Count of returned words.        |
| bufferSize  | Integer | 300     | Buffer length to read from      |
| encoding    | String  | utf-8   | Desired file Encoding           |
