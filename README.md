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
(node_modules are separately in /app/node_modules)

2) Starts watching following files:
- [process]/css/**/*.styl --> build CSS to [process]/public/css/main.css
- [process]/scripts/**/*.js --> build JS to [process]/public/js/main.js
- [process]/src/**/*.js --> restart process
- [process]/package.json --> npm install + restart process

### run production version
```
npm start
```
