import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from '@angular/core';
import { DisplayService } from './display.service';

@Directive({
  selector: 'img[appProgressiveImage]'
})
export class ProgressiveImageDirective implements OnInit {
  private hidden: boolean;
  private _src: string;

  @HostBinding('attr.src')
  @Input()
  set src(src: string) {
    // null image src will stop image form loading, but we treat is as load error
    src ? this.bus.emitLoadStart() : this.bus.emitLoadError();
    this._src = src;
  }

  get src() {
    return this._src;
  }

  @HostListener('load')
  onLoad() {
    this.bus.emitLoadSuccess();
  }

  @HostListener('error')
  onError() {
    this.bus.emitLoadError();
  }

  @HostBinding('style.display')
  get styleDisplay(): 'none' | 'block' {
    return this.hidden ? 'none' : 'block';
  }

  constructor(private bus: DisplayService) {}

  ngOnInit() {
    this.bus.success$.subscribe(success => {
      this.hidden = !success;
    });
  }
}
