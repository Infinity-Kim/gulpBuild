module.exports = () => {
    $.gulp.task('scss', () => {
        return $.gulp.src('src/scss/style.scss')
            .pipe($.glp.plumber({errorHandler: $.glp.notify.onError("Error: <%= error.message %>")}))
            .pipe($.glp.sourcemaps.init())
            .pipe($.glp.sass().on('error', $.glp.sass.logError))
            .pipe($.glp.shorthand())
            .pipe($.glp.groupCssMediaQueries())
            .pipe($.glp.postcss([
                $.autoprefixer({
                    cascade: false,
                    overrideBrowserslist: ['> 5%', 'last 2 versions', 'ie > 7']
                }),
                //$.cssnano({})
            ]))
            .pipe($.glp.sourcemaps.write())
            .pipe($.gulp.dest('./docs/assets/css'))
            .pipe($.browserSync.stream());
    });
};
