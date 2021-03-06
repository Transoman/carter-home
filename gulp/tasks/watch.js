module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./app/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./app/static/fonts/**/*.*', $.gulp.series('fonts'));
        $.gulp.watch('./app/static/sass/**/*.sass', $.gulp.series('styles:dev'));
        $.gulp.watch(['./app/static/images/general/**/*.{png,jpg,gif,svg}',
            './app/static/images/content/**/*.{png,jpg,gif,svg}'], $.gulp.series('img:dev'));
        $.gulp.watch('./app/static/images/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./app/static/js/**/*.js', $.gulp.series('js:dev'));
    });
};