// Библиотека облегчающая настройку, навигацию и
// манипулирование TypeScript AST: https://ts-morph.com/
// Запуск этого файла: npx ts-node ./scripts/updateimports.ts
import { Project } from 'ts-morph';

const project = new Project({});

// Файлы с которыми будем работать
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// Получаем файлы проекта
const files = project.getSourceFiles();

// Проверка, что импорт относительный и совпадает со слоями
// (т.е. не абсолютный и не библиотечный)
function isAbsolute(value: string) {
    const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
    return layers.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
    // Получаем ноды импортов из файла
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach((importDeclaration) => {
        // Получаем название импорта (то, что в скобках после 'from')
        const value = importDeclaration.getModuleSpecifierValue();

        if (isAbsolute(value)) {
            // Добавляем алиас к найденному относительному импорту
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

// Применяем изменения к файлам проекта
project.save();
