# so_mocha_esm
Demo package for Stackoverflow [question](https://stackoverflow.com/questions/64261239/mocha-tests-with-esm-support-for-native-es6-modules/64261240#64261240).

Build & run tests:
```
$ npm install
$ npm test
```

you will get an error:
```
> mocha_esm@1.0.0 test /...
> ./node_modules/mocha/bin/mocha --require esm --recursive './test/**/*.test.js'


TypeError [ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING]: A dynamic import callback was not specified.
    at exports.importModuleDynamicallyCallback (internal/process/esm_loader.js:41:9)
    at formattedImport (/.../node_modules/mocha/lib/esm-utils.js:6:23)
    at Object.exports.requireOrImport (/.../node_modules/mocha/lib/esm-utils.js:23:14)
    at Object.exports.loadFilesAsync (/.../node_modules/mocha/lib/esm-utils.js:33:34)
    at Mocha.loadFilesAsync (/.../node_modules/mocha/lib/mocha.js:427:19)
    at singleRun (/.../node_modules/mocha/lib/cli/run-helpers.js:156:15)
    ...
```

Remove `type: "module"` from `package.json` and run tests again:
```
$ npm test

> mocha_esm@1.0.0 test /...
> ./node_modules/mocha/bin/mocha --require esm --recursive './test/**/*.test.js'



  Index
    ✓ `process` method runs correctly

  Util
    ✓ runs correctly


  2 passing (7ms)
```
