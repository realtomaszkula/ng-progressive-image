import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressiveImageFallbackDirective } from './directives/progressive-image-fallback.directive';
import { ProgressiveImagePlaceholderDirective } from './directives/progressive-image-placeholder.directive';
import { ProgressiveImageDirective } from './directives/progressive-image.directive';
import { ProgressiveImageComponent } from './progressive-image.component';

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
