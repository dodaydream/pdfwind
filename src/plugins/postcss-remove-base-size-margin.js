
module.exports = (opts = {}) => {
    return {
        postcssPlugin: 'postcss-remove-base-size-margin',
        Declaration (decl) {
            if (decl.prop === 'margin' && decl.value === '0') {
                decl.remove()
            }

            if (decl.prop === 'font-size' && decl.value === 'inherit') {
                decl.remove()
            }

            if (decl.prop === 'font-weight' && decl.value === 'inherit') {
                decl.remove()
            }

            if (decl.prop === 'border-color' && decl.value === 'inherit') {
                decl.remove()
            }
        }
    }
}

module.exports.postcss = true