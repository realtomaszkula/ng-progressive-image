import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

enum LoadState {
  start = 'start',
  error = 'error',
  success = 'success'
}

@Injectable()
export class DisplayService {
  private stateSource = new Subject<LoadState>();
  private state$ = this.stateSource.asObservable();

  error$: Observable<any> = this.stateSource.pipe(
    map(s => s === LoadState.error)
  );

  start$: Observable<any> = this.stateSource.pipe(
    map(s => s === LoadState.start)
  );

  success$: Observable<any> = this.stateSource.pipe(
    map(s => s === LoadState.success)
  );

  constructor() {}

  emitLoadSuccess() {
    this.stateSource.next(LoadState.success);
  }

  emitLoadError() {
    this.stateSource.next(LoadState.error);
  }

  emitLoadStart() {
    this.stateSource.next(LoadState.start);
  }
}
