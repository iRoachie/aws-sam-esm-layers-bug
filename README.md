# layers-bug

Bug with AWS sam nodejs esm and local layers.

Example shows a local layer [nanoid](./nanoid/), and two lambda functions with identical code just different module type.

### Running Example

```
# install local layer

cd nanoid/nodejs

npm install
```

#### Common JS

```
sam local invoke CJSFunction
```

#### ESM

```
sam local invoke ESMFunction
```

## Expected results

Both functions should perform the same task and return the string `hello <random-string>`.

## Observed results

Common JS version works while the ESM version throws an error - `Cannot find package 'nanoid'`
