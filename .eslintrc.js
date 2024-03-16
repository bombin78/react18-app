// Настройка eslint и stylelint в VS code: .vscode/settings.json
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'ab-fsd',
    ],
    rules: {
        // Устанавливаем определенный стиль отступа (4 пробела) для обычного когда.
        indent: [2, 4],
        // Устанавливаем определенный стиль отступа (4 пробела) для JSX.
        'react/jsx-indent': [2, 4],
        // Устанавливаем определенный стиль отступа (4 пробела) для props в JSX.
        'react/jsx-indent-props': [2, { indentMode: 4, ignoreTernaryOperator: true }],
        // Указываем расширения в которых разрешен jsx
        'react/jsx-filename-extension': [2, { extensions: ['js', 'jsx', 'tsx'] }],
        // Отключаем проверку импортов
        'import/no-unresolved': 'off',
        // Отключаем предпочтительное использование дефолтного экспорта
        'import/prefer-default-export': 'off',
        // Предупреждение для неиспользуемых переменных:
        // делегируем эту проверку в typescript ('@typescript-eslint/no-unused-vars'),
        // которую в свою очередь временно отключим !!!
        'no-unused-vars': 'off',
        // '@typescript-eslint/no-unused-vars': [
        //     'error',
        //     { argsIgnorePattern: '^_' },
        // ],
        // Отключаем проверку типа функции для функциональных компонентов, чтобы
        // можно было использовать стрелочные функции для именованных компонентов
        'react/function-component-definition': 'off',
        // Отключаем дефолтное значение props по умолчанию
        'react/require-default-props': 'off',
        // Отключаем обязательность импорта react по умолчанию при использовании JSX
        'react/react-in-jsx-scope': 'off',
        // Заменяем ошибку на предупреждение при использовании оператора расширения в props
        'react/jsx-props-no-spreading': 'warn',
        // ...
        'no-shadow': 'off',
        // Заменяем ошибку на предупреждение при использовании табов для отступов.
        // Для некоторых случаев использования табов для отступов отключаем проверку полностью
        'no-tabs': [1, { allowIndentationTabs: true }],
        // Отключаем запрет символов подчеркивания в идентификаторах (переменных и т.д.)
        'no-underscore-dangle': 'off',
        // Отключаем проверку расширений в импортах
        'import/extensions': 'off',
        // Чтобы не ругался на импорт 'webpack' в файле buildWebpackConfig.ts
        'import/no-extraneous-dependencies': 'off',
        // Настраиваем "eslint-plugin-i18next", чтобы он ругался на отсутствие переводов
        // только внутри jsx (внутри jsx, за исключением атрибутов указанных в ignoreAttribute)
        'i18next/no-literal-string': [2, {
            markupOnly: true,
            ignoreAttribute: [
                'align',
                'as',
                'border',
                'data-testid',
                'direction',
                'gap',
                'justify',
                'role',
                'target',
                'to',
            ],
        }],
        // Проверка максимальной длины: отключаем проверку комментариев
        'max-len': [2, { ignoreComments: true, code: 125 }],
        // Отключаем два правила (jsx-a11y) для проверки семантики
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        // Проверяет правила использования хуков (hooks)
        'react-hooks/rules-of-hooks': 'error',
        // Проверяет зависимости эффектов
        'react-hooks/exhaustive-deps': 'error',
        // Отключаем запрет на переназначения параметров так как используем redux-toolkit
        'no-param-reassign': 'off',
        // Отключаем запрет на использование необъявленных переменных,
        // (запрет устанавливался для переменных, которые не указаны в /*global */ комментариях)
        'no-undef': 'off',
        // Отключаем запрет использования индекса массива в ключах
        'react/no-array-index-key': 'off',
        'arrow-body-style': 'off',
        'ab-fsd/path-checker': 'error',
    },
    // Список глобальных переменных
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    // Переопределение правил для указанного типа файлов
    overrides: [
        // Отключаем вывод ошибок при указании текстов в тестовых файлах
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
    // settings: {
    //     react: {
    //         version: 'detect',
    //     },
    // },
};
