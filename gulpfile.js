//основной модуль
import gulp from "gulp"; 

//импорт путей
import { path } from "./gulp/config/path.js"; 

//импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

//передача значений в переменную глобального объекта
global.app = {
    path, gulp, plugins,
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
};

//импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { addWoff, otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { sprite } from "./gulp/tasks/sprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

//наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy); //gulp.series(copy, ftp) для автовыгрузки файлов на FTP сервер
    gulp.watch(path.watch.html, html); //gulp.series(html, ftp) для автовыгрузки файлов на FTP сервер
    gulp.watch(path.watch.scss, scss); //gulp.series(scss, ftp) для автовыгрузки файлов на FTP сервер
    gulp.watch(path.watch.js, js); //gulp.series(js, ftp) для автовыгрузки файлов на FTP сервер
    gulp.watch(path.watch.images, images); //gulp.series(images, ftp) для автовыгрузки файлов на FTP сервер
}

export { sprite }; 

//задачи
const fonts = gulp.series(addWoff, otfToTtf, ttfToWoff, fontsStyle);
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));
const displayTasks = gulp.parallel(watcher, server);

//построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, displayTasks);
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

//выполнения сценария по умолчанию
gulp.task('default', dev);

export { dev };
export { build };
export { deployZIP };
export { deployFTP };

