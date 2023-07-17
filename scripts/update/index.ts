import { spawn } from 'child_process';
import { select } from '@inquirer/prompts';
import { VersionNums, VersionNameMap } from './consts';
// const program = require('commander');

const choices = VersionNums.map((value) => ({
  name: VersionNameMap[value],
  value,
  description: 'x.y.z',
}));

select({
  message: '请选择更新方式?',
  choices,
}).then((val) => {
  console.log(val, '--val');
  console.log(VersionNameMap[val], '--VersionNameMap[val]');
  console.log(`npm version ${VersionNameMap[val]}`, 'commander');
  spawn(`npm version ${VersionNameMap[val]}`, undefined, { shell: true });
});


// spawn(`npm version ${type} && npm publish`, undefined, {
//   stdio: 'inherit',
//   shell: true,
// });
