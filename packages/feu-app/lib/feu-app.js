const { min } = require('wj-feu-tools');
const ui = require("wj-feu-ui");

function app() {
    console.log("app主入口升级");
    let minNum = min(2, 5);
    ui(minNum);
}

app();

module.exports = app;