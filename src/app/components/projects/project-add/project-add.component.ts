import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { PhasesFormComponent } from '../../phases/phases-form/phases-form.component';

import { PhaseService } from '../../../services/phase.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  // Datepicker
  date = new FormControl({ value: new Date(), disabled: true });
  // min Date
  mindate =  new Date();

  // Validate Input
  FormControl = new FormControl('', [
    Validators.required
  ]);
  // Call Function to active err
  matcher = new MyErrorStateMatcher();

  // Grid Add Phase to Project
  ListPhases = this.phaseService.phaseList;
  displayedColumns = ['state', 'phase', 'description', 'startdate', 'enddate', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.ListPhases);

  constructor(public dialog: MatDialog, public phaseService: PhaseService) { }

    DateFormat(myDate: Date) {
      return `${myDate.getDate()}/${(myDate.getMonth() + 1)}/${myDate.getFullYear()}`;
    }

    AddRows() {
      const nroPhase = this.ListPhases.length + 1;
      this.ListPhases.push({PhaseID: 0, Title: `Phase ${nroPhase}`, Description: 'Description',
                         StartDate: this.DateFormat(new Date()), EndDate: this.DateFormat(new Date()), DemoUrl: 'd');
      this.dataSource.filter = '';
    }

    DeleteRow(element) {
      const indexPhase = this.ListPhases.indexOf(element);

      if (confirm('Surely you want to eliminate this phase?')) {
          this.ListPhases.splice(indexPhase, 1);
          this.dataSource.filter = '';
      }
    }

    openDialog(dataPhases) {
      console.log(dataPhases);
      this.dialog.open(PhasesFormComponent, {
        data: dataPhases
      });
    }
  ngOnInit() {
  }

}
