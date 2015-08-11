'use strict';
require('esfunctional');

let robot = require('robotjs');

spawn(function*() {
  let pos = robot.getMousePos();

  for (let i = 0; i < 100; i ++) {
    robot.moveMouseSmooth(pos.x + Math.sin(i) * i, pos.y + Math.cos(i) * i);
    yield delay(20);
  }

  return 0;
})

[thena] (process.exit);
