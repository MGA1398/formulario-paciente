import { Component } from '@angular/core';
import {Inject, Injectable} from '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';


@Component({
  selector: 'app-agendar-cita',
  templateUrl: './nueva-cita.html',
  styleUrls: ['./nueva-cita.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class NuevaCita {
  constructor(private  dialogRef: MatDialogRef<NuevaCita>, @Inject(MAT_DIALOG_DATA) public  data: any) {
  }
  public  closeMe() {
      this.dialogRef.close();
  }
}
