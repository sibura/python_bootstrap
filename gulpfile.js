var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('python_bootstrap/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('python_bootstrap/css'))
});

$.getJSON(getWebAppBackendUrl('item'),
    function(data) {
        console.log(data);
});
