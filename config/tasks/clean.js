module.exports = () => {
  _.gulp.task('clean', () => {
    return _.gulp.src(`${_.config.DIST_PATH}/**/*`, {read: false})
        .pipe(_.gp.rm());
  });
};