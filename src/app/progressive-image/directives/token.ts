export enum Display {
  flex = 'flex',
  none = 'none'
}
export abstract class Sizeable {
  display: Display;
  width: number;
  height: number;
}
