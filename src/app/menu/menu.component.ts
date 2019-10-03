import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private details(): void {
    //  const val =  this.router.navigate(['informacion'], { queryParams: { id: 'gris', cantidad: 439 } });
    this.router.navigate(['/informacion', '1']);
  }
  private details1(): void {
    this.router.navigate(['/informacion', '2']);
  }
  private details2(): void {
    this.router.navigate(['/informacion', '3']);
  }
}
