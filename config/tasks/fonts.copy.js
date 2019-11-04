module.exports = () => {
  _.gulp.task('fonts:copy', () => {
    return _.gulp.src(`${_.config.SRC_PATH}/assets/fonts/*.*`)
        .pipe(_.gulp.dest(`${_.config.DIST_PATH}/assets/fonts`))
        .pipe(_.bs.reload({stream: true}));
  });
};