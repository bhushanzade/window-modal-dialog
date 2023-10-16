import { StaticProvider } from "@angular/core";

export interface IWindowModalDialogOptions {
  defaultHeader?: boolean;
  width?: string;
  minWidth?: string;
  height?: string;
  minHeight?: string;
  title?: string;
  disableClose?: boolean;
  data?: any;
}

export class WindowModalDialogOptions implements IWindowModalDialogOptions {
  title?: string = 'Modal title';
  disableClose?: boolean = false;
  data?: any = null;
  width?: string = '100%';
  minWidth?: string = '400px';
  height?: string = '100%';
  minHeight?: string = '800px';
  defaultHeader: boolean = true;
}