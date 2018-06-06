import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-phases',
  templateUrl: './phases.component.html',
  styles: []
})
export class PhasesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  // openDialog(): void {
  //   let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });

  //   @Component({
  //     selector: 'dialog-overview-example-dialog',
  //     templateUrl: 'dialog-overview-example-dialog.html',
  //   })
  //   export class DialogOverviewExampleDialog {
    
  //     constructor(
  //       public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  //       @Inject(MAT_DIALOG_DATA) public data: any) { }
    
  //     onNoClick(): void {
  //       this.dialogRef.close();
  //     }


  ngOnInit() {
  }

}
