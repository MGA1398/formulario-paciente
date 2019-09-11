import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  public myControl = new FormControl();
  public options: string[] = ['Matias', 'Carolina', 'Andrea', 'Pedro'];
  public filteredOptions: Observable<string[]>;
  public step = 0;
  public size = 15;

  setStep(index: number) {
    this.step = index;
  }
  cancelStep() {
    this.step--;
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''), map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private details(): void {
  //  const val =  this.router.navigate(['informacion'], { queryParams: { id: 'gris', cantidad: 439 } });
  this.router.navigate(['/informacion', 'gris']);
  }
}
