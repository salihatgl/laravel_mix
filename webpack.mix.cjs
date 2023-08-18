let mix = require('laravel-mix');

mix.js(['resources/js/deneme.js', 'resources/js/deneme2.js'], 'dist/app.js');
// mix.scripts('path/to/dir', 'all-files.js');
mix.scripts([
    'path/to/dir/mix.js',
    'path/to/dir/mix2.js'
],'all-files1.js');
mix.styles([
    'resources/css/text.css',
    'resources/css/text2.css'
],'public/build.css');
mix.js('src/app.js', 'js')
   .sourceMaps();