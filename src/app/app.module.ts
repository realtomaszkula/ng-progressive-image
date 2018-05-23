import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressiveImageModule } from './progressive-image/progressive-image.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProgressiveImageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
