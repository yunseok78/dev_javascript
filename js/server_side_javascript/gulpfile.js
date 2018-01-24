var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('task1', function() {
   var a = 1, b = 2;
   console.log(a+b);
   console.log('task 실행완료');
});


gulp.task('task2', ['task1'], function() {
   console.log('task2 실행');
});
