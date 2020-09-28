module.exports = () => {
    $.gulp.task('html', () => {
        return $.gulp.src('./src/pages/*.pug')
            .pipe($.glp.plumber({errorHandler: $.glp.notify.onError("Error: <%= error.message %>")}))
            .pipe($.glp.pug())
            .pipe($.glp.htmlBeautify({
                indentSize: 2,
                unformatted: [
                    'abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite',
                    'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript',
                    'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small',
                    'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text',
                    'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
                ]
            }))
            .pipe($.glp.w3cHtmlValidator())
            .pipe($.gulp.dest('./build'))
    });
};
