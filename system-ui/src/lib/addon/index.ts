const addon = require('../native//build/Release/example.node')

export function hello() {
    addon.hello()
}
export function add() {
    return addon.add(1, 2)
}
