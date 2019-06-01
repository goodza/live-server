
[![build status](https://travis-ci.org/tapio/live-server.svg)](https://travis-ci.org/tapio/live-server)

Live Server with Babel for Soulsphere Example
===========


Installation
------------

0. cd soulsphere dir
1. cp babel.config.js from this repo (if not exist) 
2. install parcel: npm install -g parcel-bundler



**Run live-server with babel** (polyapp.js is the target babeled file)

	parcel watch engine/app.js --out-file polyapp.js --out-dir engine --no-hmr & live-server --port=80 --no-browser


