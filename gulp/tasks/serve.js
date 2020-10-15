module.exports = () => {
    $.gulp.task('serve', () => {
        $.browserSync.init({
            server: './build'
        });
        $.gulp.series('fonts', 'img', 'scss', 'html');
        $.gulp.watch('./src/fonts/**/*',  $.gulp.series('fonts')); // шрифты
        $.gulp.watch('./src/img/**/*.{png,jpg,jpeg}', $.gulp.series('img')); // картинки

        $.gulp.watch(['./src/scss/*.scss', './src/scss/**/*.scss'], $.gulp.series('scss')); // стили
        $.gulp.watch(['./src/pages/*.pug', './src/pages/**/*.pug'], $.gulp.series('html')); // html
    });
};