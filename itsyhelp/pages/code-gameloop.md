---
title: game loop
path: /code/game-loop
description: hooks to run your game at 60 fps
css: |
  td:first-child a {
    font-size: 32px;
    line-height: 48px;
    padding-right: 8px;
  }

  td:last-child {
    font-size: 14px;
    line-height: 18px;
    color: #83769c;
  }

  td:last-child a {
    font-size: 18px;
    line-height: 18px;
  }
---

The game loop is what makes your game tick, literally! To use it, you write
three specially named functions:

|              |                                                 |
| ------------ | ----------------------------------------------- |
| [🎬][_init]  | [`_init`][_init]<br/>called once during startup |
| [⌚️][_tick] | [`_tick`][_tick]<br/>called 60 times per second |
| [🖌][_draw]   | [`_draw`][_draw]<br />called after every tick   |

[_init]: /code/game-loop/init
[_tick]: /code/game-loop/tick
[_draw]: /code/game-loop/draw
