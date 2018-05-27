import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-size-buttons',
  template: `
  <button mat-mini-fab (click)="decrement.emit()">
    <mat-icon>zoom_out</mat-icon>
  </button>
  <button mat-mini-fab (click)="increment.emit()">
    <mat-icon>zoom_in</mat-icon>
  </button>
`,
  styles: ['button { margin: 0 12px }']
})
export class SizeButtonsComponent {
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
}
