
[![build status](https://travis-ci.org/tapio/live-server.svg)](https://travis-ci.org/tapio/live-server)

Live Server with Babel for Soulsphere
===========


Installation
------------

0. cd soulsphere dir
1. install parcel
2. cp babel.config.js to the dir (if not exist) 


**Run live-server with babel** (polyapp.js is target babeled file)

	parcel watch engine/app.js --out-file polyapp.js --out-dir engine --no-hmr & live-server --port=80 --no-browser


