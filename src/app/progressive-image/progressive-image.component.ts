import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ContentChild
} from '@angular/core';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-progressive-image',
  template: `
  <ng-content></ng-content>
  `,
  styles: [':host { display: block }'],
  providers: [DisplayService]
})
export class ProgressiveImageComponent implements OnInit {
  @HostBinding('style.height.px')
  @Input()
  height: number;

  @HostBinding('style.width.px')
  @Input()
  width: number;

  constructor() {}

  ngOnInit() {}
}
