import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    // https://i18next-extract.netlify.app/#
                    // https://i18next-extract.netlify.app/#/configuration?id=locales
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                    // https://babeljs.io/docs/babel-plugin-transform-typescript
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx,
                        },
                    ],
                    // https://babeljs.io/docs/babel-plugin-transform-runtime
                    '@babel/plugin-transform-runtime',
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean), // Если элемент массива = false, то фильтр его не вернет
            },
        },
    };
}
