import { ModuleWithProviders, NgModule } from '@angular/core';
import { WindowModalDialogComponent } from './window-modal-dialog.component';
import { WINDOW_DIALOG_DATA, WindowModalDialogService } from './window-modal-dialog.service';

const component = [WindowModalDialogComponent]

@NgModule({
  declarations: [
    ...component
  ],
  exports: [
    ...component
  ],
  providers: [
    WindowModalDialogService,
    // { provide: WINDOW_DIALOG_DATA, useValue: {} }
  ]
})
export class WindowModalDialogModule {
  public static forRoot(): ModuleWithProviders<WindowModalDialogModule> {
    return {
      ngModule: WindowModalDialogModule,
      providers: [WindowModalDialogService]
    };
  }
}
