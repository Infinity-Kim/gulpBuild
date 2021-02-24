module.exports = () => {
    $.gulp.task('serve', () => {
        $.browserSync.init({
            server: './docs'
        });

        //$.gulp.watch('./src/blocks/**/img/*.{png,jpg,jpeg}', $.gulp.series('img', 'webp', 'clean-img')); // картинки

        $.gulp.watch('src/blocks/**/*.scss', $.gulp.parallel('scss')); // стили
        $.gulp.watch('src/blocks/**/*.pug', $.gulp.parallel('html')); // html
    });
};
