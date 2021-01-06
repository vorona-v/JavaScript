const {task, src, dest, watch, series, parallel} = require('gulp');
const sass = require('sass');
const browserSync = require('browser-sync');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const csscomb = require('gulp-csscomb');

const PATH = {
    scssFile: 'assets/scss/style.css',
    scssFiles: 'assets/scss/**/*.css',
    cssFolder: 'assets/css',
    htmlFiles: '*.html',
    jsFiles: 'assets/js/**/*.js',
};

const plugins = [cssnano({preset: 'default'})];

function scss () {
    return src(PATH.scssFile)
        .pipe(sass({outputStyle: 'expended'}).on('error', sass.logError))
        .pipe(dest(PATH.cssFolder))
        .pipe(browserSync.stream());
}

function scssMin () {
    return src(PATH.scssFile)
        .pipe(sass({outputStyle: 'expended'}).on('error', sass))
        .pipe(postcss(plugins))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(PATH.cssFolder))
        .pipe(browserSync.stream());
}

function comb () {
    return src(PATH.scssFile)
        .pipe(dest(PATH.scssFiles))
}

function init() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

function sync() {
    browserSync.reload()
}

function watchFiles() {
    init();
    watch(PATH.scssFile, scss);
    watch(PATH.htmlFiles, sync);
    watch(PATH.jsFiles, sync);
}

task('scss', scss);
task('min', series(scss, scssMin));
task('comb', comb);
task('watch', watchFiles);