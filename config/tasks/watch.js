module.exports = () => {
  _.gulp.task('watch', () => {
    _.gulp.watch(`./${_.config.SRC_PATH}/pug/**/*.pug`, _.gulp.series('pug'));
    _.gulp.watch(`./${_.config.SRC_PATH}/assets/stylesheets/**/*.scss`, _.gulp.series('styles'));
    _.gulp.watch(`./${_.config.SRC_PATH}/assets/fonts/*.*`, _.gulp.series('fonts:copy'));
    _.gulp.watch(`./${_.config.SRC_PATH}/assets/images/content/*.*`, _.gulp.series('images'));
    _.gulp.watch(`./${_.config.SRC_PATH}/assets/images/icons/*.*`, _.gulp.series('sprite'));
  });
};