import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

enum ImageState {
  loading = 'loading',
  error = 'error',
  loaded = 'loaded'
}

@Injectable()
export class ImageStateService {
  private stateSource = new Subject<ImageState>();
  private state$ = this.stateSource;

  isLoading$: Observable<boolean> = this.state$.pipe(
    map(s => s === ImageState.loading)
  );

  isError$: Observable<boolean> = this.state$.pipe(
    map(s => s === ImageState.error)
  );

  isLoaded$: Observable<boolean> = this.state$.pipe(
    map(s => s === ImageState.loaded)
  );

  constructor() {}

  emitLoaded() {
    this.stateSource.next(ImageState.loaded);
  }

  emitError() {
    this.stateSource.next(ImageState.error);
  }

  emitLoading() {
    this.stateSource.next(ImageState.loading);
  }
}
