
var cp = require('child_process');

var chokidar = require('chokidar');

var build = cp.spawn('./build-dev');
build.stdout.pipe(process.stdout);
build.stderr.pipe(process.stderr);
build.on('exit', function () {
  var run = cp.spawn('./run-dev');
  run.stdout.pipe(process.stdout);
  run.stderr.pipe(process.stderr);
});

watchNode('proxy');

watchNode('index');

watchNode('cats');
watchCSS('cats', true);
watchJS('cats', true);

watchNode('dogs');
watchCSS('dogs', true);
watchJS('dogs', true);

function watchNode (name) {
  var cmd = `docker restart projectnamedev_${name}_1`;
  var cmd2 = `docker exec projectnamedev_${name}_1 npm install`;

  chokidar.watch(`${name}/src/**/*.js`)
    .on('change', exec(cmd));

  chokidar.watch(`${name}/package.json`)
    .on('change', exec(cmd2, cmd));
}

function watchCSS (name, init) {
  var cmd = `stylus -u nib ${name}/css/index.styl -o ${name}/public/css/main.css`;
  init && exec(cmd)();

  chokidar.watch(`${name}/css/**/*.styl`)
    .on('change', exec(cmd));
}

function watchJS (name, init) {
  var cmd = `rollup ${name}/scripts/index.js -f iife -o ${name}/public/js/main-dev.js`;
  var cmd2 = `uglifyjs ${name}/public/js/main-dev.js -cmo ${name}/public/js/main.js`;

  init && exec(cmd, cmd2)();

  chokidar.watch(`${name}/scripts/**/*.js`)
    .on('change', exec(cmd, cmd2));
}

function exec (cmd) {
  cmd = cmd.split(' ');
  var args = new Array(arguments.length - 1);
  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }
  return () => {
    console.log(cmd.join(' '));
    var childProcess = cp.spawn(cmd[0], cmd.slice(1));

    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    childProcess.on('error', console.error);

    if (args.length > 0) {
      childProcess.on('exit', () => {
        exec.apply(this, args)();
      });
    }
  }
}
