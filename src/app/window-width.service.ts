// window-width.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WindowWidthService {
  private _widthSubject: BehaviorSubject<number>;

  constructor() {
    this._widthSubject = new BehaviorSubject(window.innerWidth);
    // Listen to window resize events
    window.addEventListener('resize', this.onResize.bind(this));
  }

  private onResize() {
    this._widthSubject.next(window.innerWidth);
  }

  getWidth() {
    return this._widthSubject.asObservable();
  }
}
