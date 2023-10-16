import { Component, Inject, Optional } from '@angular/core';
import { SampleModalTwoComponent } from './second-modal.component';
import { WINDOW_DIALOG_DATA, WindowModalDialog } from 'window-modal-dialog';

@Component({
  selector: 'app-sample-modal',
  template: `
    <div class="window-modal-body">
      <div>This is your custom modal content</div>
      <div> 
          <pre> {{ data | json}}</pre>
      </div>
    </div>
    <div class="window-modal-footer">
      <button (click)="open()">Open</button>
      <button (click)="save()">Save</button>
    </div>
  `
})
export class SampleModalComponent {

  constructor(
    private modal: WindowModalDialog,
    @Optional() @Inject(WINDOW_DIALOG_DATA) public data: any
  ) { }

  open() {
    const x = this.modal.open(SampleModalTwoComponent, {
      title: "Open Dialog Modal",
      disableClose: true,
      data: {
        name: "Bhushan",
        lname: "Zade"
      },
    });
    x.afterClose?.subscribe(res => {
      console.log("2nd modal res", res);

    })
  }

  save(): void {
    this.modal.close("1st modal emmited value");
  }
}
