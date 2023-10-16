import { Component, Inject, Input, Optional } from '@angular/core';
import { WINDOW_DIALOG_DATA, WindowModalDialogService } from 'projects/window-modal-dialog/src/public-api';
import { SampleModalTwoComponent } from './modal.component copy';

@Component({
  selector: 'app-sample-modal',
  template: `
    <div class="window-modal-body">
      <div>This is our custom modal content</div>
        <div> 
        <pre> {{ data | json}} {{ data | json}} {{ data | json}} {{ data | json}} {{ data | json}}
          {{ data | json}} {{ data | json}} {{ data | json}} {{ data | json}} {{ data | json}}
          {{ data | json}} {{ data | json}} {{ data | json}} {{ data | json}} {{ data | json}} {{ data | json}}  </pre>
       </div>
    </div>
    <div class="window-modal-footer">
      <button (click)="open()">Open</button>
    </div>
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
