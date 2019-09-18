import { Component } from '@angular/core';
import {Inject, Injectable} from '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import { style } from '@angular/animations';

export interface Consultorio {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './nueva-cita.html',
  styleUrls: ['./nueva-cita.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class NuevaCita {

  public consultorios: Consultorio[] = [
    {value: 'centrimed', viewValue: 'Centro Médico Centrimed'},
    {value: 'metropolitano', viewValue: 'Hospital Metropolitano'},
    {value: 'citimed', viewValue: 'Centro Médico Citimed'}
  ];
  constructor(private  dialogRef: MatDialogRef<NuevaCita>, @Inject(MAT_DIALOG_DATA) public  data: any) {
  }
  public showOptions() {
    const cdk = document.getElementsByClassName('cdk-overlay-pane') as HTMLCollectionOf<HTMLElement>;
    cdk[1].style.minWidth = '285px'; cdk[1].style.padding = '1em';
    console.log(cdk);
  }
  public  closeMe() {
      this.dialogRef.close();
  }
}
