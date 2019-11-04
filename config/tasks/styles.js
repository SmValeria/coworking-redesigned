module.exports = () => {
  _.gulp.task('styles', () => {
    return _.gulp.src([
      ..._.config.STYLES_LIBS,
      `${_.config.SRC_PATH}/assets/stylesheets/main.scss`
    ])
        .pipe(_.gp.if(_.isDev, _.gp.sourcemaps.init()))
        .pipe(_.gp.concat('main.min.scss'))
        .pipe(_.gp.sassGlob())
        .pipe(_.gp.sass().on('error', _.gp.sass.logError))
        .pipe(_.gp.if(!_.isDev,
            _.gp.autoprefixer({
              cascade: false
            })))
        .pipe(_.gp.if(!_.isDev, _.gp.groupCssMediaQueries()))
        .pipe(_.gp.if(!_.isDev, _.gp.cleanCss()))
        .pipe(_.gp.if(_.isDev, _.gp.sourcemaps.write()))
        .pipe(_.gulp.dest(`${_.config.DIST_PATH}/assets/css`))
        .pipe(_.bs.reload({stream: true}));
  });
};

