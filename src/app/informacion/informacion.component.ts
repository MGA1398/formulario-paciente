import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component ({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {

  public selected = '+593';
  public flagType: string;
  public pacienteForm: FormGroup;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.pacienteForm = this.fb.group({
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      primerApellido: ['', Validators.required],
      segundoApellido: [''],
      masinfo: this.fb.group({
        cedula: ['', Validators.required],
        nacimiento: [''],
        genero: [''],
      }),
      contacto: this.fb.group({
        pais: [''],
        ciudad: [''],
        correo: [''],
        celular: [''],
      }),
    });
    // this.flagType = this.activatedRoute.snapshot.queryParamMap.get('id');
    const val = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(val);
    console.log(this.flagType);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.pacienteForm.value);
  }

}
