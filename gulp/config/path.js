
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist', srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`,
        images: `${buildFolder}/img/`,
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,//.pug
        files: `${srcFolder}/files/**/*.*`,
        fonts: `${srcFolder}/fonts/*.{woff,woff2}`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,//.pug
        files: `${srcFolder}/files/**/*.*`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    },
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder,
    ftp: ``, //имя папки на удаленном сервере для сдачи проекта
}
