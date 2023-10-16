import { Component } from '@angular/core';
import { WindowModalDialog } from 'projects/window-modal-dialog/src/public-api';

@Component({
  selector: 'app-sample-modal',
  template: `
    <div>This is our 2nd custom modal content @#!@#@!#@#</div>
    <div class="window-modal-footer">
      <button (click)="save()">Save</button>
    </div>
  `
})
export class SampleModalTwoComponent {
  constructor(
    private modal: WindowModalDialog,
  ) { }

  save(): void {
    this.modal.close("2nd modal emited value");
  }
}
