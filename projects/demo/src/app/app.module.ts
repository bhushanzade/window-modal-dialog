import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleModalComponent } from './modal.component';
import { SampleModalTwoComponent } from './second-modal.component';
import { WindowModalDialogModule } from 'window-modal-dialog';

@NgModule({
  declarations: [
    AppComponent,
    SampleModalComponent,
    SampleModalTwoComponent
  ],
  imports: [
    BrowserModule,
    WindowModalDialogModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
