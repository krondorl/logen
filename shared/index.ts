export type Draw = [number, number, number, number, number];

export type Draws = [Draw, Draw, Draw, Draw, Draw];

export type DrawSet = {
  date: string;
  draws: Draws;
};
