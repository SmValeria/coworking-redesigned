module.exports = () => {
  _.gulp.task('images', () => {
    return _.gulp.src(`${_.config.SRC_PATH}/assets/images/content/*.*`)
        .pipe(_.gp.if(!_.isDev,
            _.gp.imagemin([
              _.gp.imagemin.jpegtran({progressive: true}),
              _.gp.imagemin.optipng({optimizationLevel: 7}),
        ])))
        .pipe(_.gulp.dest(`${_.config.DIST_PATH}/assets/images`))
        .pipe(_.bs.reload({stream: true}));
  });
};
