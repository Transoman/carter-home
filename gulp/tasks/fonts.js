module.exports = function () {
    $.gulp.task('fonts', () => {
        return $.gulp.src('./app/static/fonts/**/*.*')
            .pipe($.gulp.dest('../carters-home/static/fonts/'));
    });
};