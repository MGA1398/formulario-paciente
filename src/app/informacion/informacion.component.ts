import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatBottomSheet} from '@angular/material';
import {NuevaCita} from '../agendar-cita/nueva-cita';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component ({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {

  public selected = '+593';
  public flagType: string;
  public pacienteForm: FormGroup;

  constructor(private fb: FormBuilder, private bottomSheet: MatBottomSheet,
              private activatedRoute: ActivatedRoute, public router: Router, public dialog: MatDialog) { }

  showBottomSheet() {
    this.bottomSheet.open(NuevaCita, {panelClass: 'p-0'});
  }
  openDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(NuevaCita, {
      panelClass: 'my-centered-dialog',
      width: '512px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
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
    this.flagType = this.activatedRoute.snapshot.paramMap.get('id');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.pacienteForm.value);
  }

}

// @Component ({
//   selector: 'app-dialog-example',
//   templateUrl: 'dialog-example.html',
// })
// // tslint:disable-next-line: component-class-suffix
// export class DialogExample {

//   constructor(
//     public dialogRef: MatDialogRef<DialogExample>) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }
