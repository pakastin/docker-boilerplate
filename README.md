# Docker + Node.js boilerplate
This is how I roll..

## clone
```
git clone http://github.com/pakastin/docker-boilerplate
```

## install dev environment
```
npm install
```

## run dev environment
```
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

### run production version
```
npm start
```
(no need to run `npm install` first)
..or without node.js:
```
docker-compose up
```
### Scale
Just run:
```
npm run scale cats=5 dogs=5
```
..or without node.js:
```
docker-compose scale cats=5 dogs=5 index=5 
```
..or to scale dev:
```
npm run scale-dev cats=5 dogs=5
```
