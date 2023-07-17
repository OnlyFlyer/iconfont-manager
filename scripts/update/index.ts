import { spawn } from 'child_process';
import { select } from '@inquirer/prompts';
// const program = require('commander');

select({
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
}).then((val) => {
  spawn(`npm version ${val}`, undefined, {
    // stdio: ''
    shell: true,
  });
});


// spawn(`npm version ${type} && npm publish`, undefined, {
//   stdio: 'inherit',
//   shell: true,
// });
