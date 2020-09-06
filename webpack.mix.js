const mix = require('laravel-mix');

mix.js('resources/assets/js/script.js', 'public/common/js')
    .sass('resources/assets/scss/style.scss', 'public/common/css')
    .options({
        processCssUrls: false,
        postCss: [
            require('autoprefixer')({
                grid: true
            }),
            require('css-mqpacker')()
        ]
    })
    .sourceMaps()

mix.webpackConfig({
    devtool: "inline-source-map"
})

mix.browserSync({
    server: 'public',
    proxy: false,
    port: 3000,
    files: [
        'public/**/*.html',
        'public/**/*.php',
        'public/common/js/*.js',
        'public/common/css/*.css',
    ],
    ui: {
        port: 3001
    }
})