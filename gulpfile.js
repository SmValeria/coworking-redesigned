'use strict';

global._ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
  tasks: require('./config/tasks.json').tasks,
  isDev: process.env.NODE_ENV === 'dev',
  config: require('./config/gulp.config'),
  merge: require('merge-stream'),
};

_.gp.sass.compiler = require('node-sass');


for (const key in _.tasks) {
  require(_.tasks[key])();
}

_.gulp.task(
    'default',
    _.gulp.series(
        'clean',
        'sprite',
        _.gulp.parallel('pug', 'styles', 'fonts:copy', 'images'),
        _.gulp.parallel('watch', 'server')
    )
);


_.gulp.task(
    'build',
    _.gulp.series(
        'clean',
        'sprite',
        _.gulp.parallel('pug', 'styles', 'fonts:copy', 'images')
    )
);
