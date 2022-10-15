var tailwindcss = require('tailwindcss');
var postcssCssVariables = require('postcss-css-variables');
var postcssEm2pt = require('./src/plugins/postcss-em2pt');
var postcssRemoveWhere = require('./src/plugins/postcss-remove-where');
var postcssRemoveBaseSizeMargin = require('./src/plugins/postcss-remove-base-size-margin');
var cssNano = require('cssnano');

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        postcssCssVariables(),
        postcssEm2pt(),
        postcssRemoveWhere(),
        ...(process.env.NODE_ENV === 'production' ? [ cssNano() ] : []),
    ]
}