﻿var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// JQuery
gulp.task("jquery", () => {
    gulp.src(['node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest("Content/plugins/jquery"));
});

// Bootstrap
gulp.task("bootstrap", () => {
    gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js'])
        .pipe(gulp.dest("Content/plugins/bootstrap"));
});

// Select2
gulp.task("select2", () => {
    gulp.src(['node_modules/select2/dist/js/select2.full.min.js', 'node_modules/select2/dist/js/i18n/it.js'])
        .pipe(uglify())
        .pipe(gulp.dest("Content/plugins/select2"));

    gulp.src(['node_modules/select2/dist/css/select2.min.css'])
        .pipe(gulp.dest("Content/plugins/select2/css"));

});

// Bootstrap Datepicker
gulp.task("bootstrap-datepicker", () => {
    gulp.src(['node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js', 'node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.it.min.js'])
        .pipe(gulp.dest("Content/plugins/bootstrap-datepicker/js"));

    gulp.src(['node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'])
        .pipe(gulp.dest("Content/plugins/bootstrap-datepicker/css"));
});

// DataTables
gulp.task("datatables", () => {
    gulp.src('node_modules/datatables.net/js/jquery.dataTables.js')
        .pipe(uglify())
        .pipe(gulp.dest("Content/plugins/dataTables"));

    gulp.src(['node_modules/datatables.net-dt/css/*.*'])
        .pipe(gulp.dest("Content/plugins/datatables/css"));

    gulp.src(['node_modules/datatables.net-dt/images/*.*'])
        .pipe(gulp.dest("Content/plugins/datatables/images"));
});


gulp.task('default', ['jquery', 'bootstrap', 'select2', 'datepicker', 'datatables']);