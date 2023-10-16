import { ModuleWithProviders, NgModule } from '@angular/core';
import { WindowModalDialogComponent } from './window-modal-dialog.component';
import { WINDOW_DIALOG_DATA, WindowModalDialogService } from './window-modal-dialog.service';
import { CommonModule } from '@angular/common';

const component = [WindowModalDialogComponent]

@NgModule({
  declarations: [
    ...component
  ],
  exports: [
    ...component
  ],
  imports: [CommonModule],
  providers: [
    WindowModalDialogService,
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
