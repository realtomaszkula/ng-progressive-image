import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressiveImageComponent } from './progressive-image.component';
import { ProgressiveImagePlaceholderDirective } from './progressive-image-placeholder.directive';
import { ProgressiveImageFallbackDirective } from './progressive-image-fallback.directive';
import { ProgressiveImageDirective } from './progressive-image.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProgressiveImageComponent,
    ProgressiveImagePlaceholderDirective,
    ProgressiveImageFallbackDirective,
    ProgressiveImageDirective
  ],
  exports: [
    ProgressiveImageComponent,
    ProgressiveImagePlaceholderDirective,
    ProgressiveImageFallbackDirective,
    ProgressiveImageDirective
  ]
})
export class ProgressiveImageModule {}
