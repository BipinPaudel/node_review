var gulp=require("gulp"),
	nodemon=require('gulp-nodemon'),
	gulpMocha = require('gulp-mocha');


gulp.task('default',function(){
	nodemon({
		script:'index.js',
		ext:'js',
		env : {
			PORT:8000
		},
		ignore:['./node_modules/**']
	})
	.on('restart',function(){
		console.log('restarting....');
	});
});

gulp.task('test',function(){
	gulp.src('tests/*.js',{read:false}) //all of our test files
	.pipe(gulpMocha({reporter:'nyan'}))
});