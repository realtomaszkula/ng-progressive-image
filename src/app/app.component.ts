import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-progressive-image [width]="200" [height]="200">
    <img appProgressiveImage [src]="src" />

    <div *appProgressiveImagePlaceholder >
      Loading...
    </div>

    <div *appProgressiveImageFallback>
      Error loading image
    </div>
  </app-progressive-image>


  <button (click)="prev()">Prev</button>
  <button (click)="next()">Next</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get src() {
    return this.images[this.idx];
  }

  images = [
    'aasdf',
    null,
    'https://upload.wikimedia.org/wikipedia/commons/e/e6/Red_rectangle.svg'
  ];

  idx = 0;

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
