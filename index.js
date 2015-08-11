'use strict';
require('esfunctional');

let robot = require('robotjs');

spawn(function*() {
  let pos = robot.getMousePos();

  for (let i = 0; i < 100; i += 0.2) {
    robot.moveMouse(pos.x + Math.sin(i) * i, pos.y + Math.cos(i) * i);
    yield delay(4);
  }

  robot.typeString('done');

  return 0;
})

[thena] (process.exit)

[catcha] ((err) => {
  console.log('[FATAL ERROR] @', new Date().toISOString());
  console.log(err && (err.stack || err));
  process.exit(1);
});
