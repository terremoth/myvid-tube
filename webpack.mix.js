const mix = require('laravel-mix');
require('laravel-mix-jigsaw');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build');
mix.babelConfig({
    presets: [],
    plugins: []
});
mix.options({
    terser: {
        terserOptions: {
            compress: true,
            mangle: true,
            ecma: 2020,
        }
    }
});

mix.jigsaw()
    .js('source/_assets/js/home.js', 'js')
    .js('source/_assets/js/video.js', 'js')
    .js('source/_assets/js/main.js', 'js')
    .version();
