
[![build status](https://travis-ci.org/tapio/live-server.svg)](https://travis-ci.org/tapio/live-server)

Live Server with Babel
===========


Installation
------------

0. install live-server from origin repo
1. cp babel.config.js from this repo (if not exist) 
2. install parcel globally:
```
npm install -g parcel-bundler
```


**Run parcel and live-server** (build polyapp.js from /src/app.js)

	parcel watch src/app.js --out-file polyapp.js --out-dir engine --no-hmr & live-server --port=80 --no-browser


