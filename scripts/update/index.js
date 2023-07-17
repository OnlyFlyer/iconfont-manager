"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const prompts_1 = require("@inquirer/prompts");
const consts_1 = require("./consts");
// const program = require('commander');
const choices = consts_1.VersionNums.map((value) => ({
    name: consts_1.VersionNameMap[value],
    value,
    description: 'x.y.z',
}));
(0, prompts_1.select)({
    message: '请选择更新方式?',
    choices,
}).then((val) => {
    console.log(val, '--val');
    console.log(consts_1.VersionNameMap[val], '--VersionNameMap[val]');
    console.log(`npm version ${consts_1.VersionNameMap[val]}`, 'commander');
    (0, child_process_1.spawn)(`npm version ${consts_1.VersionNameMap[val]}`, undefined, { shell: true });
});
// spawn(`npm version ${type} && npm publish`, undefined, {
//   stdio: 'inherit',
//   shell: true,
// });
