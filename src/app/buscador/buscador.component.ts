import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, pipe} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Route, Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import { DataService } from '../data.service';
import { Paciente } from '../paciente';
import {Pipe, PipeTransform} from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  public myControl = new FormControl();
  public miControl = new FormControl();
  public options: string[] = ['sebastian', 'paul', 'sofia', ];
  public filteredOptions: Observable<string[]>;
  public filteredArreglos: Observable<any[]>;
  public step = 0;
  public size = 15;
  public pacientes = new Array<Paciente>();
  public arreglos: any[];
  searchText = [];

  setStep(index: number) {
    this.step = index;
  }
  cancelStep() {
    this.step--;
  }
  constructor(private router: Router, private datService: DataService) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''), map(value => this._filter(value))
    );
    this.getInformacion();
    this.filteredArreglos = this.miControl.valueChanges.pipe(
      startWith(''), map(value => this._filtro(value))
    );
  }

  public getInformacion() {
    this.datService.getPacientes().subscribe(response => { this.arreglos = response; console.log(response); });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filtro(value: any): any[] {
    const filterValue = value.toLowerCase();

    return this.arreglos.filter(arreglo => arreglo.nombre.toLowerCase().includes(filterValue));
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
