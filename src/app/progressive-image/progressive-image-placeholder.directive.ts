import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { DisplayService } from './display.service';

@Directive({
  selector: '[appProgressiveImagePlaceholder]'
})
export class ProgressiveImagePlaceholderDirective implements OnInit {
  private hasView: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private display: DisplayService
  ) {}

  ngOnInit() {
    this.display.start$.subscribe(start => {
      if (start && !this.hasView) {
        this.createView();
      }

      if (!start && this.hasView) {
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
