const gulp = require('gulp');
var html5Lint = require('gulp-html5-lint');
 
gulp.task('lint:html', function() {
    return gulp.src('app/*.html')
        .pipe(html5Lint());
});