module.exports = function() {
    $.gulp.task('server', function() {
        $.browserSync.init({
            // server: './build',
            proxy: 'carters-home.loc'
        });
    });
};