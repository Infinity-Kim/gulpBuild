module.exports = () => {
    $.gulp.task('serve', () => {

        $.browserSync.init({
            server: {
                baseDir: './docs'
            }
        });


        $.gulp.watch('src/page/**/*.pug', ['html']);
        $.gulp.watch('src/components/**/*.pug', ['html']);

        $.gulp.watch('src/scss/**/*.scss', ['scss']);
        $.gulp.watch('src/page/**/*.scss', ['scss']);
        $.gulp.watch('src/components/**/*.scss', ['scss']);
    });
};
