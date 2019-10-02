import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HostBinding } from '@angular/core';
import { MatSidenav, MatDrawer } from '@angular/material';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild( MatSidenav, {static: false}) matSidenav: MatSidenav;

  constructor(private router: Router, private toggleService: ToggleService) { }

  ngOnInit() {
  }

  private details(): void {
    //  const val =  this.router.navigate(['informacion'], { queryParams: { id: 'gris', cantidad: 439 } });
    this.router.navigate(['/informacion', 'gris']);
  }
  private details1(): void {
    this.router.navigate(['/informacion', 'azul']);
  }
  private details2(): void {
    this.router.navigate(['/informacion', 'norm']);
  }
}
