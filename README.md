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
Starts watching following files:
- [project]/css/**/*.styl --> build CSS to [project]/public/css/main.css
- [project]/scripts/**/*.js --> build JS to [project]/public/js/main.js
- [project]/src/**/*.js --> restart process
- [project]/package.json --> npm install

### run production version
```
npm start
```
