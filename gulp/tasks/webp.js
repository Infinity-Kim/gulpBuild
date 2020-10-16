module.exports = () => {
    $.gulp.task('img', () => {
        return $.gulp.src('./src/img/**/*.{png,jpg,jpeg,tiff}')
            .pipe($.glp.webp())
            .pipe($.gulp.dest('./build/assets/img'))
            .pipe($.browserSync.reload({ stream: true }))
            .pipe(
                $.del(['./src/img/**/*.*'])
            )
    });
};
