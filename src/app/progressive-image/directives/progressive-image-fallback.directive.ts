import { Directive, HostBinding, OnInit, forwardRef } from '@angular/core';
import { ImageStateService } from '../image-state.service';
import { Display, Dimensions } from './token';

@Directive({
  selector: '[appProgressiveImageFallback]',
  providers: [
    {
      provide: Dimensions,
      useExisting: forwardRef(() => ProgressiveImageFallbackDirective)
    }
  ]
})
export class ProgressiveImageFallbackDirective implements OnInit, Dimensions {
  @HostBinding('style.display') display = Display.flex;
  @HostBinding('style.width.px') width: number;
  @HostBinding('style.height.px') height: number;

  constructor(private imageState: ImageStateService) {}

  ngOnInit() {
    this.imageState.isError$.subscribe(isError => {
      this.display = isError ? Display.flex : Display.none;
    });
  }
}
