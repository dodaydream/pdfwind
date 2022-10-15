module.exports = (opts = {}) => {
    return {
        postcssPlugin: 'postcss-remove-where',
        Rule (rule) {
            const matches = rule.selector.match(/:where\((.+?)\)/)

            const regex = /:where\((.+?)\**\)/ig
            // remove :where() from selector
            if (matches) {
                rule.selector = rule.selector.replaceAll(regex, '$1')
            }

            const matches2 = rule.selector.match(/:not\((.+?)\)/)

            // remove all :not
            if (matches2) {
                rule.selector = rule.selector.replace(/:not\((.+?)\)/i, '')
            }
        }
    }
}

module.exports.postcss = true