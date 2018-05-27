import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { ProgressiveImageModule } from './progressive-image/progressive-image.module';
import { ToolbarComponent } from './layout/toolbar.component';
import { GalleryButtonsComponent } from './layout/gallery-buttons.component';
import { SizeButtonsComponent } from './layout/size-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GalleryButtonsComponent,
    SizeButtonsComponent
  ],
  imports: [
    BrowserModule,
    ProgressiveImageModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
