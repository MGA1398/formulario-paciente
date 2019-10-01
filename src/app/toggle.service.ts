import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private matSidenav: MatSidenav;

  setSidenav(sidenav: MatSidenav) {
    this.matSidenav = sidenav;
  }

  toggle() {
    this.matSidenav.toggle();
  }

  constructor() { }
}
