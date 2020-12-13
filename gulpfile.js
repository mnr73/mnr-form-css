const { src, dest, parallel, series, watch } = require("gulp");
const sass = require("gulp-dart-sass");
const autoprefixer = require("autoprefixer");
const clean = require("postcss-clean");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const minify = require("gulp-minify");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const concat = require("gulp-concat");

sass.compiler = require("sass");

function scss() {
	return src("./src/scss/**/*.scss")
		.pipe(
			sass({
				outputStyle: "expanded",
			}).on("error", sass.logError)
		)
		.pipe(dest("./src/css"));
}

function css() {
	return src("./src/css/*.css")
		.pipe(sourcemaps.init())
		.pipe(
			postcss([
				autoprefixer({
					grid: "autoplace",
					flexbox: true,
				}),
			])
		)
		.pipe(sourcemaps.write("."))
		.pipe(
			cleanCSS({
				level: 2,
				format: "beautify",
			})
		)
		.pipe(dest("./dist/css"))
		.pipe(
			cleanCSS({
				level: 2,
			})
		)
		.pipe(
			rename({
				suffix: ".min",
			})
		)
		.pipe(dest("./dist/css/"));
}

// function css() {
// 	return src('./src/css/*.css')
// 		.pipe(sourcemaps.init())
// 		.pipe(postcss([autoprefixer({
// 			grid: 'autoplace',
// 			flexbox: true,
// 		})]))
// 		.pipe(cleanCSS({level: 2}))
// 		.pipe(sourcemaps.write('.'))
// 		.pipe(dest('./dist/css'))
// }

function js() {
	return src([
	"./src/js/basic.js",
	"./src/js/checkAndRadio.js",
	"./src/js/input.js",
	"./src/js/multiple.js",
	])
	.pipe(concat("mnr-form.js"))
	.pipe(minify())
	.pipe(dest("./dist/js"));
}

exports.js = js;
exports.scss = scss;
exports.css = css;
exports.default = parallel(series(scss, css), js);

// console.log('done');

watch("./src/scss/**/*.scss", series(scss, css));
watch("./src/js/**/*.js", series(js));
