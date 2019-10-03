import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material';
import { NuevaCita } from '../agendar-cita/nueva-cita';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';

@Component ({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {

  public selected = '+593';
  public flagType: string;
  public pacienteForm: FormGroup;
  public arreglos: any[];

  constructor(private fb: FormBuilder, private bottomSheet: MatBottomSheet,
              private activatedRoute: ActivatedRoute, public router: Router,
              public dialog: MatDialog, private datService: DataService) {}
  openDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(NuevaCita, {
      panelClass: 'my-centered-dialog',
      width: '512px', autoFocus: false});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
    this.getFormulario();
    // this.flagType = this.activatedRoute.snapshot.queryParamMap.get('id');
    this.flagType = this.activatedRoute.snapshot.paramMap.get('id');
    this.getInformacion();
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.pacienteForm.value);
  }

  public getInformacion() {
    this.datService.getPacientes().subscribe(response => { this.arreglos = response; console.log(response); });
  }

  public getFormulario() {
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

  }
}
