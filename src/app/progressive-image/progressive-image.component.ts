import {
  AfterContentChecked,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  QueryList
} from '@angular/core';
import { Sizeable } from './directives/token';
import { ImageStateService } from './image-state.service';

@Component({
  selector: 'app-progressive-image',
  template: `
  <ng-content></ng-content>
  `,
  styles: [':host { display: block }'],
  providers: [ImageStateService]
})
export class ProgressiveImageComponent implements AfterContentChecked {
  @ContentChildren(Sizeable) dirs: QueryList<Sizeable>;

  @HostBinding('style.height.px')
  @Input()
  height: number;

  @HostBinding('style.width.px')
  @Input()
  width: number;

  constructor() {}

  ngAfterContentChecked() {
    this.dirs.forEach(dir => {
      dir.height = this.height;
      dir.width = this.width;
    });
  }
}
