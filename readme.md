## Install

```
$ npm install --save text-measure
```

## Usage

```
.
├── index.js
└── package.json
```
```js
import measureText from text-measure;

let m = new measureText('20px Arial');

m.width('哈哈哈啦啦啦啦sdfsda123'); //232.294921875

m.width('哈哈...'); //56.669921875

m.cutByWidth('哈哈哈哈啦啦啦',60,'...')//哈哈...

m.setFont('13px PingFangSC-Regular');

m.width('哈哈哈') //39
```
