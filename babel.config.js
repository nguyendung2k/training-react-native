module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    extensions: [
                        '.ios.js',
                        '.android.js',
                        '.ios.jsx',
                        '.android.jsx',
                        '.js',
                        '.jsx',
                        '.json',
                        '.ts',
                        '.tsx',
                    ],
                    root: ['.'],
                    alias: {
                        '@assets': './src/assets/',
                        '@components': './src/components',
                        '@i18n': './src/i18n',
                        '@redux': './src/redux',
                        '@routes': './src/routes',
                        '@navigation': './src/navigation',
                        '@screens': './src/screens',
                        '@services': './src/services',
                        '@theme': './src/theme',
                        '@utils': './src/utils',
                        '@env': './src/env.js',
                        '@constant': './src/constant',
                    },
                },
            ],
        ],
    }
}
