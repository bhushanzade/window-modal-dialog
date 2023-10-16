import { ModuleWithProviders, NgModule } from '@angular/core';
import { WindowModalDialogComponent } from './window-modal-dialog.component';
import { CommonModule } from '@angular/common';
import { WindowModalDialog } from './window-modal-dialog';

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
    WindowModalDialog,
  ]
})
export class WindowModalDialogModule {
  public static forRoot(): ModuleWithProviders<WindowModalDialogModule> {
    return {
      ngModule: WindowModalDialogModule,
      providers: [WindowModalDialog]
    };
  }
}
