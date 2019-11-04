module.exports = () => {
  _.gulp.task('server', () => {
    _.bs.init({
      server: {
        baseDir: `./${_.config.DIST_PATH}`
      },
      open: false
    });
  });
};