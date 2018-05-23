import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  OnInit
} from '@angular/core';
import { DisplayService } from './display.service';

@Directive({
  selector: '[appProgressiveImageFallback]'
})
export class ProgressiveImageFallbackDirective implements OnInit {
  private hasView: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private display: DisplayService
  ) {}

  ngOnInit() {
    this.display.error$.subscribe(error => {
      if (error && !this.hasView) {
        this.createView();
      }

      if (!error && this.hasView) {
        this.destroyView();
      }
    });
  }

  private createView() {
    this.vcr.createEmbeddedView(this.templateRef);
    this.hasView = true;
  }

  private destroyView() {
    this.vcr.clear();
    this.hasView = false;
  }
}
