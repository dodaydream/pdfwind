var CssDimension = require('parse-css-dimension');

module.exports = (opts = {} ) => {
    return {
        postcssPlugin: 'postcss-em2pt',
        Declaration (decl) {
            // check if matches em
            if (decl.value.match(/\d+\.\d+em/)) {
                const dimension = CssDimension(decl.value)
                if (dimension.unit === 'em') {
                    decl.value = Math.round(dimension.value * 14) + 'pt';
                }

                if (dimension.unit === 'px' && dimension.value === 1) {
                    decl.value = '1pt'
                }
            }
        }
    }
}

module.exports.postcss = true