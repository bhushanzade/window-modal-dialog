import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WindowModalDialogModule } from 'projects/window-modal-dialog/src/public-api';
import { SampleModalComponent } from './modal.component';
import { SampleModalTwoComponent } from './modal.component copy';

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
