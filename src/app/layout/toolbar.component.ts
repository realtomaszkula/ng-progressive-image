import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
  <mat-toolbar>
    <a mat-button [href]="'https://github.com/zetsnotdead/ng-progressive-image'" target="_bank" rel="noreferrer noopener">Github</a>
  </mat-toolbar>
  `,
  styles: []
})
export class ToolbarComponent {}
