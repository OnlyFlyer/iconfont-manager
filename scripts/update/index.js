"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var prompts_1 = require("@inquirer/prompts");
// const program = require('commander');
(0, prompts_1.select)({
    message: '请选择更新方式?',
    choices: [
        {
            name: 'patch',
            value: 'z',
            description: 'x.y.z',
        },
        {
            name: 'minor',
            value: 'y',
            description: 'x.y.z',
        },
        {
            name: 'major',
            value: 'x',
            description: 'x.y.z',
        },
    ],
}).then(function (val) {
    (0, child_process_1.spawn)("npm version ".concat(val), undefined, {
        // stdio: ''
        shell: true,
    });
});
// spawn(`npm version ${type} && npm publish`, undefined, {
//   stdio: 'inherit',
//   shell: true,
// });
