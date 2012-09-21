[![build status](https://secure.travis-ci.org/jharding/crayon.png)](http://travis-ci.org/jharding/crayon)
Crayon
======

Crayon is a wrapper around the `console` object that supports string formatting and colors.

Installation
------------

```
$ npm install crayon
```

Usage
-----

### Require

```javascript
var crayon = require('crayon');
```

### API

#### crayon.verbose

If set to `true`, all methods will get printed to the console. If `false`, only `crayon.success` and `crayon.error` will. Defaults to `false`.

#### crayon.log(format, [...])

Prints a formatted string to the console. Not colored.

#### crayon.info(format, [...])

Prints a blue formatted string to the console.

#### crayon.warn(format, [...])

Prints a yellow formatted string to the console.

#### crayon.success(format, [...])

Prints a green formatted string to the console.

#### crayon.error(format, [...])

Prints a red formatted string to the console.

### Example

<img src='http://thejakeharding.com/images/crayon_example.png'>

Testing
-------

```
$ npm install
$ npm test
```

Issues
------

Found a bug? Create an issue on GitHub.

https://github.com/jharding/crayon/issues

Versioning
----------

For transparency and insight into the release cycle, releases will be numbered with the follow format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backwards compatibility bumps the major
* New additions without breaking backwards compatibility bumps the minor
* Bug fixes and misc changes bump the patch

For more information on semantic versioning, please visit http://semver.org/.

License
-------

Copyright (c) 2012 [Jake Harding](http://thejakeharding.com)  
Licensed under the MIT License.
