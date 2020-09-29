module.exports = () => {
    $.gulp.task('img', () => {
        return $.gulp.src('./src/img/**/*.{png,jpg,jpeg}')
            .pipe(tinypng({
                key: '6iVRXZHUBbke5ewqeBiEEz4M51UIa0zp', // ключик менять на свой
                summarize: true,
                log: true
            }))
            .pipe($.gulp.dest('./build/assets/img'))
    });
};
