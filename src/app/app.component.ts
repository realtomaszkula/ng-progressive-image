import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-toolbar></app-toolbar>
  <app-progressive-image [width]="size" [height]="size" >
    <img appProgressiveImage [src]="src" class="mat-elevation-z6" />

    <div appProgressiveImagePlaceholder class="placeholder">
        Loading...
    </div>
    <div appProgressiveImageFallback class="fallback">
        Error!
    </div>
  </app-progressive-image>

  <app-gallery-buttons (next)="next()" (prev)="prev()"></app-gallery-buttons>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  size = 200;

  get src() {
    return this.images[this.idx];
  }

  private idx = 0;
  private images = [
    '//via.placeholder.com/175x200',
    '//via.placeholder.com/200x200',
    '//via.placeholder.com/225x200',
    'DOES_NOT_EXIST',
    '//via.placeholder.com/300x300',
    '//via.placeholder.com/600x600',
    'DOES_NOT_EXIST'
  ];

  next() {
    this.idx++;
    if (this.idx > this.images.length - 1) {
      this.idx = 0;
    }
  }

  prev() {
    this.idx--;
    if (this.idx < 0) {
      this.idx = this.images.length - 1;
    }
  }
}
