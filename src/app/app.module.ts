import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { ProgressiveImageModule } from './progressive-image/progressive-image.module';
import { ToolbarComponent } from './layout/toolbar.component';
import { GalleryButtonsComponent } from './layout/gallery-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GalleryButtonsComponent,
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
