import { Component } from '@angular/core';
import { SampleModalComponent } from './modal.component';
import { WindowModalDialog } from 'window-modal-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  constructor(private modal: WindowModalDialog) {

  }

  open() {
    const x = this.modal.open(SampleModalComponent, {
      title: "Open Dialog Modal",
      disableClose: true,
      data: {
        name: "Bhushan",
        lname: "Zade"
      },
    });
    x.afterClose?.subscribe(res => {
      console.log(res);
    })
  }
}
