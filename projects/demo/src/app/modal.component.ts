import { Component, Inject, Optional } from '@angular/core';
import { WINDOW_DIALOG_DATA } from 'projects/window-modal-dialog/src/public-api';

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
      <button>Save</button>
    </div>
  `
})
export class SampleModalComponent {

  constructor(
    @Optional() @Inject(WINDOW_DIALOG_DATA) public data: any
  ) { }
}
