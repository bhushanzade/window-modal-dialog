import { StaticProvider } from "@angular/core";

export interface IWindowModalDialogOptions {
  size?: string;
  title?: string;
  disableClose?: boolean;
  data?: any;
  providers?: StaticProvider[]
}

export class WindowModalDialogOptions implements IWindowModalDialogOptions {
  size?: string = '';
  title?: string = '';
  disableClose?: boolean = false;
  data?: any = null;
  providers?: StaticProvider[] = [];
}