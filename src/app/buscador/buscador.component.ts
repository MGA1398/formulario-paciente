import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  public arreglos: any[];
  searchText = [];
  public search: any = '';

  constructor(private router: Router, private datService: DataService) {
  }

  ngOnInit() {
    this.getInformacion();
  }

  public getInformacion() {
    this.datService.getPacientes().subscribe(response => { this.arreglos = response; console.log(response); });
  }

  public clearSearch() {
    this.searchText = null;
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
