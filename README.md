![S3 Server logo](https://dl.dropboxusercontent.com/u/15463127/S3Server/Scality-S3-Server-Logo-Large.png)
[![badge][badge]](https://ci.ironmann.io/gh/scality/S3/tree/master)

## Learn more @ http://s3.scality.com

## Installation

```shell
npm install scality/S3
```

This installs s3 into the current folder ./node_modules/s3

## Run it with memory backend

```shell
export S3BACKEND="mem"
npm start
```

## Testing

You can run the unit tests with the following command:

```shell
npm test
```

You can run the linter with:

```shell
npm run lint
```

You can run local functional tests with:

```shell
npm start &
npm run ft_test
```

## s3cmd versions

If using s3cmd as a client to S3 be aware that v4 signature format
is buggy in s3cmd versions < 1.6.1.

[badge]: https://ci.ironmann.io/gh/scality/S3.svg?style=shield&circle-token=83d0efd99242ca1bc15703b02d2beb72a77aadf2
