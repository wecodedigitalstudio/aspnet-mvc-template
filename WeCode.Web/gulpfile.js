var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// JQuery
gulp.task("jquery", () => {
    gulp.src([
        'node_modules/jquery/dist/jquery.min.js'
    ])
        .pipe(gulp.dest("Content/plugins/jquery"));
});

// Bootstrap
gulp.task("bootstrap", () => {
    gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        ])
        .pipe(gulp.dest("Content/plugins/bootstrap"));
});

// Select2
gulp.task("select2", () => {
    gulp.src(['node_modules/select2/dist/js/select2.full.min.js', 'node_modules/select2/dist/js/i18n/it.js'])
        .pipe(uglify())
        .pipe(gulp.dest("Content/plugins/select2"));

    gulp.src([
        'node_modules/select2/dist/css/select2.min.css'
    ])
        .pipe(gulp.dest("Content/plugins/select2/css"));

});


// DataTables
gulp.task("datatables", () => {
    gulp.src('node_modules/datatables.net/js/jquery.dataTables.js')
        .pipe(uglify())
        .pipe(gulp.dest("Content/plugins/dataTables"));

    gulp.src([
        'node_modules/datatables.net-dt/css/*.*'
    ])
        .pipe(gulp.dest("Content/plugins/datatables/css"));

    gulp.src([
        'node_modules/datatables.net-dt/images/*.*'
    ])
        .pipe(gulp.dest("Content/plugins/datatables/images"));
});

// Vue
gulp.task("vue", () => {
    gulp.src([
        'node_modules/vue/dist/vue.js',
        'node_modules/vue/dist/vue.min.js'
    ])
        .pipe(gulp.dest("Content/plugins/vue"));
});

// Bundle
gulp.task("bundle", () => {
    gulp.src('Scripts/**/*.js')
        .pipe(concat('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest("Content/js/"));
});


gulp.task('build-Debug', () => { });

gulp.task('build-Release', () => {
    gulp.start('bundle');
});