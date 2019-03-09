run:
	npm start

install:
	npm install

build: install
	npm run build

production: build
	node ./server.js