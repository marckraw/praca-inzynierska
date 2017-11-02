const gulp = require('gulp');
const clean = require('gulp-clean');

const ts = require('gulp-typescript');
const JSON_FILES = ['*.json', '**/*.json', '!node_modules'];

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
    gulp.dest('dist').pipe(clean({force: true}));

    const tsResult = tsProject.src()
    .pipe(tsProject())
    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
    gulp.watch('**/*.ts', ['scripts']);
});

gulp.task('assets', function() {
    return gulp.src(JSON_FILES)
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch', 'assets']);
