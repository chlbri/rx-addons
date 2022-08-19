import { from, map, Observable } from 'rxjs';
import { betweenF } from './helpers/betweenF';

export const betweenOf = <T>(interval: number, ...data: T[]) => {
  const output = from(data).pipe(
    betweenF(interval),
    map(([a]) => a),
  );
  return output as Observable<T>;
};
