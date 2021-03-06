const mix = require('laravel-mix');

// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({

   // Specify the paths to all of the template files in your project 
   content: [
     './resources/**/*.blade.php',
     './resources/**/*.vue',     
   ],
   //'./src/**/*.jsx',
   // etc.
 
   // Include any special characters you're using in this regular expression
   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
 })

mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css', [
      require('tailwindcss'),
      ...mix.inProduction() ? [purgecss] : [],
      require('autoprefixer'),
   ]);

mix.webpackConfig({
   resolve: {
      alias: {
         '@components': path.resolve(__dirname, 'resources/js/components'),
         '@plugins$': path.resolve(__dirname, 'resources/js/plugins'),
      }
   }
})

mix.disableSuccessNotifications();

if(mix.inProduction()) {
   mix.version()
} else {
   mix.sourceMaps()
}