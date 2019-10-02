import { Injectable } from '@angular/core';
import { MatSidenav, MatDrawer } from '@angular/material';
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  public sideNav: any = false;
  public sideNavUpdated = new EventEmitter();

  constructor() {
  }

  getSideNavState() {
    return this.sideNavUpdated;
  }

  setSideNavState(state) {
    this.sideNav = state;
    this.sideNavUpdated.emit(this.sideNav);
  }

}
