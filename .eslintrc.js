module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: "@babel/eslint-parser",
        requireConfigFile: false
    },
    extends: [
        "@nuxtjs",
        "plugin:nuxt/recommended"
    ],
    plugins: [

    ],
    // add your custom rules here
    rules: {
        "indent": ["error", 4],
        "quotes": ["error", "double"],
        "quote-props": ["error", "consistent"],
        "linebreak-style": ["error", "unix"],
        "max-len": ["error", 120],
        "vue/html-indent": ["error", 4]
    }
}
