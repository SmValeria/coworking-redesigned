module.exports = () => {
  _.gulp.task('sprite', () => {
    let spriteData = _.gulp.src(`${_.config.SRC_PATH}/assets/images/icons/*.*`)
        .pipe(_.gp.spritesmith({
          imgName: 'sprite.png',
          imgPath: '../images/sprite.png',
          cssName: 'sprite.scss',
          padding: 5
        }));
    let imgStream = spriteData.img
        .pipe(_.gulp.dest(`${_.config.SRC_PATH}/assets/images/content`));
    let cssStream = spriteData.css
        .pipe(_.gulp.dest(`${_.config.SRC_PATH}/assets/stylesheets/layout`));

    return _.merge(imgStream, cssStream);
  });
};