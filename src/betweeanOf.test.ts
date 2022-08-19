import { afterEach, beforeEach, expect, it } from 'vitest';

import { TestScheduler } from 'rxjs/testing';
import { betweenOf } from './betweeanOf';

function useScheduler(): TestScheduler | undefined {
  let scheduler: TestScheduler | undefined = undefined;
  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });
  afterEach(() => {
    scheduler?.flush();
    scheduler = undefined;
  });
  return scheduler;
}

const scheduler = useScheduler();

it('For String values', async () => {
  const values = {
    a: 'Je',
    b: 'suis',
    c: 'un',
    d: 'très',
    e: 'bon',
    f: 'développeur',
  };

  scheduler?.run(({ expectObservable }) => {
    expectObservable(betweenOf(100, ...Object.values(values))).toBe(
      ' 100ms a 99ms b 99ms c 99ms d 99ms e 99ms (f|)',
      values,
    );
  });
});

it('For Number values', async () => {
  const values = {
    a: 'Je',
    b: 'suis',
    c: 'un',
    d: 'très',
    e: 'bon',
    f: 'développeur',
  };

  scheduler?.run(({ expectObservable }) => {
    expectObservable(betweenOf(100, ...Object.values(values))).toBe(
      ' 100ms a 99ms b 99ms c 99ms d 99ms e 99ms (f|)',
      values,
    );
  });

  // vi.useRealTimers();
});
