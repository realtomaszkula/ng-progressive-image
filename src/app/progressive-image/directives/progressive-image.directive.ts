import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  forwardRef
} from '@angular/core';
import { ImageStateService } from '../image-state.service';
import { Dimensions, Display } from './token';

@Directive({
  selector: 'img[appProgressiveImage]',
  providers: [
    {
      provide: Dimensions,
      useExisting: forwardRef(() => ProgressiveImageDirective)
    }
  ]
})
export class ProgressiveImageDirective implements OnInit, Dimensions {
  @HostBinding('style.display') display = Display.flex;
  @HostBinding('style.width.px') width: number;
  @HostBinding('style.height.px') height: number;

  private _src: string;
  @HostBinding('attr.src')
  @Input()
  set src(src: string) {
    this.imageState.emitLoading();
    this._src = src;
  }

  get src() {
    return this._src;
  }

  @HostListener('load')
  onLoad() {
    this.imageState.emitLoaded();
  }

  @HostListener('error')
  onError() {
    this.imageState.emitError();
  }

  constructor(private imageState: ImageStateService) {}

  ngOnInit() {
    this.imageState.isLoaded$.subscribe(loaded => {
      this.display = !loaded ? Display.none : Display.flex;
    });
  }
}
