import { type Draw, type Draws, type DrawSet } from './types/index.ts';

export function sortNumbersInPlace(arr: number[]) {
  arr.sort((a, b) => a - b);
}

/** Return a new array filled with number 1..90 */
export function fillNumbers(): number[] {
  let numbers = [];
  for (let n = 1; n <= 90; n++) {
    numbers.push(n);
  }
  return numbers;
}

export function fisherYatesShuffle(arr: readonly number[]): number[] {
  const a = arr.slice(); // copy to avoid mutating original
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Generate a draw of 5 numbers ranging 1..90 */
export function generateDraw(): Draw {
  const numbers = fillNumbers();
  const shuffledNumbers = fisherYatesShuffle(numbers);
  const [n1, n2, n3, n4, n5] = shuffledNumbers.slice(0, 5);
  let drawArray: Draw = [n1, n2, n3, n4, n5];
  sortNumbersInPlace(drawArray);
  return drawArray;
}

/** Generate 5 draw instances in a tuple */
export function generateDraws(): Draws {
  let drawsArray: Draw[] = [];
  for (let i = 0; i < 5; i++) {
    drawsArray.push(generateDraw());
  }
  const [d1, d2, d3, d4, d5] = drawsArray;
  const finalDraws: Draws = [d1, d2, d3, d4, d5];
  return finalDraws;
}

/**
 * Generate a draw set object. Each client request asks for a single draw set.
 */
export function generateDrawSet(): DrawSet {
  const finalSet: DrawSet = {
    date: new Date().toLocaleString(),
    draws: generateDraws(),
  };
  return finalSet;
}
