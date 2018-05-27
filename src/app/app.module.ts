import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
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
