[![Build Status](https://travis-ci.org/telemark/micro-status-queue.svg?branch=master)](https://travis-ci.org/telemark/micro-status-queue)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# micro-status-queue

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/micro-status-queue.svg)](https://greenkeeper.io/)
Shows status for the different queues.

## API

### **/json**

Returns json of formatted data.

#### GET

```bash
$ curl https://queue.status.t-fk.win/json
```

### **/html**

Renders formatted data to html. 

#### GET

```bash
$ curl https://queue.status.t-fk.win/html
```

## License
[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/micro-status-queue.png "Robohash image of micro-status-queue")