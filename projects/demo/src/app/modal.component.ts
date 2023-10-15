import { Component, Inject, Input, Optional } from '@angular/core';
import { WINDOW_DIALOG_DATA, WindowModalDialogService } from 'projects/window-modal-dialog/src/public-api';
import { SampleModalTwoComponent } from './modal.component copy';

@Component({
  selector: 'app-sample-modal',
  template: `
    <div>This is our custom modal content</div>
    <div> {{ data | json}} </div>
    <button (click)="open()">Open</button>
  `
})
export class SampleModalComponent {

  // @Input() data: any;

  constructor(
    private modal: WindowModalDialogService,
    @Optional() @Inject(WINDOW_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit() {

  }

  open() {
    const x = this.modal.open(SampleModalTwoComponent, {
      title: "Open Dialog Modal"
    });
    x.subscribe(res => {
      console.log(res);

    })
  }
}
