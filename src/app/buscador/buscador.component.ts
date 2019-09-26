import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Route, Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import { DataService } from '../data.service';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  public myControl = new FormControl();
  public options: string[] = ['gris', 'azul', 'basico', ];
  public filteredOptions: Observable<string[]>;
  public step = 0;
  public size = 15;
  public pacientes = new Array<Paciente>();
  public arreglo = [];

  setStep(index: number) {
    this.step = index;
  }
  cancelStep() {
    this.step--;
  }
  constructor(private router: Router, public datService: DataService) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''), map(value => this._filter(value))
    );
    this.getInformacion();
  }

  public getInformacion() {
    this.datService.getPacientes().subscribe(response => { this.arreglo = response; console.log(response); });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
