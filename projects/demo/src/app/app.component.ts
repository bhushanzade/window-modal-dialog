import { Component } from '@angular/core';
import { WindowModalDialogService } from 'projects/window-modal-dialog/src/public-api';
import { SampleModalComponent } from './modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  constructor(private modal: WindowModalDialogService) {

  }

  open() {
    const x = this.modal.open(SampleModalComponent, {
      title: "Open Dialog Modal",
      disableClose: true,
      data: {
        name: "aSDASDASD",
        lname: "sdasdasdasd"
      },
    });
    x.subscribe(res => {
      console.log(res);

    })
  }
}
