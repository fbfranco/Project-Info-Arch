import { Component, OnInit, Inject} from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';


// Error Message Title
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-phases-form',
  templateUrl: './phases-form.component.html',
  styles: []
})
export class PhasesFormComponent implements OnInit {

  // DatePicker
  date = new FormControl({ value: new Date(), disabled: true });
  minDate = new Date();
  datePrueba = new Date();
  datePrueba2 = new Date();
  // custom ErrorStateMatcher
  ErrorTitleControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.datePrueba = new Date(this.data.startdate);
    this.datePrueba2 = new Date(this.data.enddate);
  }

}
