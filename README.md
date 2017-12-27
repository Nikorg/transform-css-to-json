# transform-css-to-json

[![Dependency Status][dependencies-shield]][dependencies]
[![devDependency Status][dependencies-dev-shield]][dependencies-dev]

Webpack loader that loads CSS and emits it as JSON


## Installation

[![transform-css-to-json on NPM][npm-badge]][npm]

## Usage

Put transform-css-to-json in as a loader in webpack.config.js.
```javascript
// in webpack.config.js
...
loaders: [{
  test: /\.css$/,
  loader: 'json!transform-css-to-json'
}]
```

## Example

path/to/some.css

```css
a {
  prop: value;
}
b {
  prop: other-value;
}
```

example.js

```javscript
var css = require('path/to/some.css');

// or ES2015-style
import css from 'path/to/some.css';

//css is now equal to the following:
css == {
  a: { prop: value },
  b: { prop: other-value}
}
```



[npm]:                     https://www.npmjs.com/package/transform-css-to-json
[npm-badge]:               https://nodei.co/npm/transform-css-to-json.png?small=true
[dependencies]:            https://david-dm.org/nikorg/transform-css-to-json
[dependencies-dev]:        https://david-dm.org/nikorg/transform-css-to-json#info=devDependencies
[dependencies-shield]:     https://img.shields.io/david/nikorg/transform-css-to-json.svg
[dependencies-dev-shield]: https://img.shields.io/david/dev/nikorg/transform-css-to-json.svg
