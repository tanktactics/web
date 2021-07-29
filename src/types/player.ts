export interface Player {
  id: number;
  name: string;
  points: number;
  range: number;
  health: number;
  icon: string;
  kills: number;
  coords: {
    x: number;
    y: number;
  };
  distance?: number;
  distance2?: number;
}
