const {src,dest,watch,series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('obelus/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchSass(){
    watch(['obelus/**/*.scss'], buildStyles)
}


exports.default = series(buildStyles,watchSass) 