const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

gulp.task('default', () => {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
})