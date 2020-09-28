global.$ = {
    gulp: require('gulp'),
    glp: require('gulp-load-plugins')(), // быстрая загрузка gulp plugins
    browserSync: require('browser-sync').create(), // перезагрузка страницы
    config: require('./gulp/config')
};

$.config.forEach(path => {
    require(path)();
});