let gp = require('gulp-load-plugins')(),
    scriptsPATH = {
        "input": "./app/static/js/",
        "ouput": "../carters-home/static/js/"
    };

module.exports = function () {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src([
            'node_modules/svg4everybody/dist/svg4everybody.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/jquery-popup-overlay/jquery.popupoverlay.js',
            'app/static/js/jquery.cycle2.min.js',
            'node_modules/jquery-match-height/dist/jquery.matchHeight-min.js',
            'node_modules/tabslet/jquery.tabslet.min.js',
            'node_modules/swiper/dist/js/swiper.min.js',
            'app/static/js/acf-map.js',
            'node_modules/aos/dist/aos.js'
            ])
            .pipe(gp.concat('libs.min.js'))
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src([
            'node_modules/svg4everybody/dist/svg4everybody.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/jquery-popup-overlay/jquery.popupoverlay.js',
            'app/static/js/jquery.cycle2.min.js',
            'node_modules/jquery-match-height/dist/jquery.matchHeight-min.js',
            'node_modules/tabslet/jquery.tabslet.min.js',
            'node_modules/swiper/dist/js/swiper.min.js',
            'app/static/js/acf-map.js',
            'node_modules/aos/dist/aos.js'
            ])
            .pipe(gp.concat('libs.min.js'))
            .pipe(gp.uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('js:dev', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe($.gulp.dest(scriptsPATH.ouput))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('js:build', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });

    $.gulp.task('js:build-min', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe(gp.concat('common.js'))
            .pipe(gp.uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });
};