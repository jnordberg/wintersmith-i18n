const i18n = require('i18n')
const fs = require('fs')

function plugin(env, callback) {
    // see https://github.com/mashpie/i18n-node#list-of-all-configuration-options
    let conf = env.config.i18n || {}
    if (conf.directory == undefined) {
        conf.directory = './locales'
    }
    conf.directory = env.resolvePath(conf.directory)
    if (!fs.existsSync(conf.directory)) {
        callback(new Error(`locale dir not found (${ conf.directory })`))
        return
    }
    if (conf.autoReload == undefined) {
        conf.autoReload = (env.mode === 'preview')
    }
    let reg = {}
    conf.register = reg
    i18n.configure(conf)
    for (const key of ['__', '__n', '__l', '__h', '__mf', 'setLocale']) {
        env.locals[key] = reg[key]
    }
    callback()
}

module.exports = plugin
