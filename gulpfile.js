// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel, task } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
var replace = require('gulp-replace');
var notify = require("gulp-notify");


// File paths
const files = { 
    scssPath: 'src/scss/**/*.scss',
    jsPath: 'src/js/**/*.js'
}

// Sass task: compiles the style.scss file into style.css
function scss(){    
    return src(files.scssPath)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(notify({ title: 'Scss', message: 'Scss task completed'}))
        .pipe(dest('dist')
    ); // put final CSS in dist folder
}

// JS task: concatenates and uglifies JS files to script.js
function js(){
    return src([
        files.jsPath
        //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
        ])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('dist')
    );
}

// Cachebust
var cbString = new Date().getTime();
function cacheBuster(){
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watcher(){
    watch([files.scssPath, files.jsPath], 
        parallel(scss, js));    
}


// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = task('default', series(
    parallel(scss, js), 
    cacheBuster,
    watcher
));