# Docker + Node.js boilerplate
This is how I roll..

## Clone
```
git clone http://github.com/pakastin/docker-boilerplate
```

## Run dev environment
```
npm install
npm run dev
```
1) Mounts following files/folders for rapid updates:
- [process]/public --> /app/public
- [process]/src --> /app/src

(node_modules are in /app/node_modules)

2) Starts watching following files:
- [process]/css/**/*.styl --> build CSS to [process]/public/css/main.css
- [process]/js/**/*.js --> build JS to [process]/public/js/main.js
- [process]/src/**/*.js --> restart process
- [process]/package.json --> npm install + restart process

3) Will quit on cmd+c

### Start production version
```
npm start
```
### Start production version without node.js
```
docker-compose up -d
```
### Scale containers
```
npm run scale cats=5 dogs=5
```
### Scale containers without node.js
```
docker-compose scale cats=1 dogs=2 index=3 proxy=4
```
### Scale dev containers
```
npm run scale-dev cats=5 dogs=5
```
### Stop containers
```
npm run stop
```
### Stop dev containers
```
npm run stop-dev
```
