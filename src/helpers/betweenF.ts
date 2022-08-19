import { interval, zipWith } from 'rxjs';
export const betweenF = (ms = 1000) => zipWith(interval(ms));
