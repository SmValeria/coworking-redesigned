module.exports = () => {
  _.gulp.task('pug', () => {
    return _.gulp.src(`${_.config.SRC_PATH}/pug/pages/*.pug`)
        .pipe(_.gp.pug())
        .pipe(_.gulp.dest(_.config.DIST_PATH))
        .pipe(_.bs.reload({stream: true}));
  });
};