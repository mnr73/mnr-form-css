const { src, dest, parallel, series, watch } = require("gulp");
const sass = require("gulp-dart-sass");
const autoprefixer = require("autoprefixer");
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
		.pipe(
			cleanCSS({
				level: 2,
				format: "beautify",
			})
		)
		.pipe(
			sourcemaps.mapSources(function (sourcePath, file) {
				return "../../src/scss/mnr-form.scss";
			})
		)
		.pipe(sourcemaps.write("."))
		.pipe(dest("./dist/css"));
}

function mincss() {
	return src("./dist/css/mnr-form.css")
		.pipe(sourcemaps.init())
		.pipe(cleanCSS({ level: 0 }))
		.pipe(
			rename({
				suffix: ".min",
			})
		)
		.pipe(
			sourcemaps.mapSources(function (sourcePath, file) {
				return "../../src/scss/mnr-form.scss";
			})
		)
		.pipe(sourcemaps.write("."))
		.pipe(dest("./dist/css"));
}

function js() {
	return src([
		"./src/js/basic.js",
		"./src/js/checkAndRadio.js",
		"./src/js/input.js",
		"./src/js/multiple.js",
		"./src/js/textarea.js",
		"./src/js/functions.js",
	])
		.pipe(concat("mnr-form.js"))
		.pipe(minify())
		.pipe(dest("./dist/js"));
}

exports.js = js;
exports.scss = scss;
exports.css = css;
exports.mincss = mincss;
exports.default = parallel(series(scss, css, mincss), js);

// console.log('done');

watch("./src/scss/**/*.scss", series(scss, css, mincss));
watch("./src/js/**/*.js", series(js));
