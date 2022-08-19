import { it } from 'vitest';
import { scheduleTest } from './scheduleTest';

import { betweenOf } from './betweenOf';

it('For String values', async () => {
  const expecteds = {
    a: 'Je',
    b: 'suis',
    c: 'un',
    d: 'très',
    e: 'bon',
    f: 'développeur',
  };

  const keys = Object.keys(expecteds);
  const values = Object.values(expecteds);

  const marbles = `100ms ${keys[0]} 99ms ${keys[1]} 99ms ${keys[2]} 99ms ${keys[3]} 99ms ${keys[4]} 99ms (${keys[5]}|)`;

  const obs$ = betweenOf(100, ...values);
  scheduleTest(obs$, marbles, expecteds);
});

it('For Number values', async () => {
  const expecteds = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  };

  const keys = Object.keys(expecteds);
  const values = Object.values(expecteds);

  const marbles = `100ms ${keys[0]} 99ms ${keys[1]} 99ms ${keys[2]} 99ms ${keys[3]} 99ms ${keys[4]} 99ms (${keys[5]}|)`;

  const obs$ = betweenOf(100, ...values);
  scheduleTest(obs$, marbles, expecteds);
});
