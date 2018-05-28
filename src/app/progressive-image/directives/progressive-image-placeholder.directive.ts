import { Directive, HostBinding, OnInit, forwardRef } from '@angular/core';
import { ImageStateService } from '../image-state.service';
import { Display, Dimensions } from './token';

@Directive({
  selector: '[appProgressiveImagePlaceholder]',
  providers: [
    {
      provide: Dimensions,
      useExisting: forwardRef(() => ProgressiveImagePlaceholderDirective)
    }
  ]
})
export class ProgressiveImagePlaceholderDirective implements OnInit {
  @HostBinding('style.display') display = Display.flex;
  @HostBinding('style.width.px') width: number;
  @HostBinding('style.height.px') height: number;

  constructor(private imageState: ImageStateService) {}

  ngOnInit() {
    this.imageState.isLoading$.subscribe(isLoading => {
      this.display = isLoading ? Display.flex : Display.none;
    });
  }
}
