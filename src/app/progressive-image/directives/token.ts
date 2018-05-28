export enum Display {
  flex = 'flex',
  none = 'none'
}
export abstract class Dimensions {
  display: Display;
  width: number;
  height: number;
}
