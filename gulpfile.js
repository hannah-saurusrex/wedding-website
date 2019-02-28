var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("Hooray - you created a Gulp task!");
});

gulp.task('html', function() {
    console.log("Imagine something useful being done to your HTML here :)");
});

gulp.task('css', function() {
    console.log("Imagine Sass or PostCSS tasks running here");
});

gulp.task('watch', function() {

    watch('./index.html', function() {
        gulp.start('html');
    });

    watch('./css/main.css', function() {
        gulp.start('css');
    });

});