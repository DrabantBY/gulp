import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber"; //обработчик ошибок
import notify from "gulp-notify"; //уведомления об ошибках
import browsersync from "browser-sync"; //локальный сервер
import newer from "gulp-newer"; //проверка обновления
import ifPlugin from "gulp-if"; //условное ветвление

export const plugins = { 
    replace, 
    plumber, 
    notify,
    browsersync,
    newer,
    if: ifPlugin,
 };