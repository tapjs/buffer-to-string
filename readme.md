# buffer-to-string

> A better Buffer.toString()

Displays buffer content in hex. Characters are grouped into
two-character bytes, with a customizable line wrap width.

## Install

```
$ npm install --save buffer-to-string
```

## Usage

```js
const bufferToString = require('buffer-to-string')

bufferToString(new Buffer([0, 1, 2, 3, 4, 5, 6]), 3)
/*
00 01 02
03 04 05
06
 */
```

## API

### bufferToString(buffer, [width])

#### input

Type: `Buffer`

The Buffer to stringify.

#### width

Type: `number`  
Default: `20`

The maximum width before wrapping a newline. It is measured in
bytes displayed. The maximum character width can be determined by
computing `(3 * width) - 1`.
