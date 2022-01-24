[![npm version](https://badge.fury.io/js/fastify-environment-vars.svg)](https://badge.fury.io/js/fastify-environment-vars)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Project Name

A super lightweight plugin to check for environment variables on server start. The only dependency is `fastify-plugin`. For more supported packages that use JSON schema see [fastify-env](https://www.npmjs.com/package/fastify-env).

## Table of contents

- [Project Name](#project-name)
  - [Table of contents](#table-of-contents)
  - [Usage](#usage)
    - [Running the tests](#running-the-tests)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [License](#license)

## Usage

```js
import FastifyEnvironmentVarsPlugin from "fastify-environment-vars";

app.register(FastifyEnvironmentVarsPlugin, {
  variables: ["MY_SERVER_SECRET", "MY_CLIENT_SECRET"],
});
```

### Running the tests

```sh
$ npm test
$ npm run test:integration:happy
$ npm run test:integration:unhappy
```

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Credits

andreasonny83 - [Readme Template](https://gist.github.com/andreasonny83/7670f4b39fe237d52636df3dec49cf3a)

## License

[MIT License](https://github.com/alexburley/fastify-environment-vars/blob/master/license.txt) © Alex Burley
