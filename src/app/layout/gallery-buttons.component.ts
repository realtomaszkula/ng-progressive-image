import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery-buttons',
  template: `
  <button mat-fab (click)="prev.emit()">
    <mat-icon>arrow_left</mat-icon>
  </button>
  <button mat-fab (click)="next.emit()">
    <mat-icon>arrow_right</mat-icon>
  </button>
`,
  styles: ['button { margin: 0 12px }']
})
export class GalleryButtonsComponent {
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
}
