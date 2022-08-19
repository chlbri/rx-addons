import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { expect } from 'vitest';

export function scheduleTest<T>(
  obs$: Observable<T>,
  marbles: string,
  expecteds?: Record<string, T>,
) {
  const scheduler = new TestScheduler((actual, expected) => {
    expect(actual).deep.equal(expected);
  });
  console.log('marbles', marbles);
  console.log('values', expecteds);

  return scheduler.run(({ expectObservable }) => {
    expectObservable(obs$).toBe(marbles, expecteds);
  });
}
