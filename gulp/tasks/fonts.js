module.exports = () => {
    $.gulp.task('fonts', () => {
        return $.gulp.src('./src/fonts/**/*')
            .pipe($.gulp.dest('./build/assets/fonts'))
            .pipe($.browserSync.reload({ stream: true }))
    });
};
