import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { Subject } from 'rxjs';
import { WindowModalDialogComponent } from './window-modal-dialog.component';

export const WINDOW_DIALOG_DATA = new InjectionToken<any>('WindowDialogData');
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

@Injectable({
  providedIn: 'root'
})
export class WindowModalDialog {

  private modalNotifier?: Subject<string>;
  private readonly _dialogDataToken: InjectionToken<any>;
  private modals: any[] = [];
  private renderer: Renderer2;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this._dialogDataToken = WINDOW_DIALOG_DATA;
  }

  open(component: any, options?: IWindowModalDialogOptions) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    const customInjector = Injector.create({
      parent: this.appRef.injector,
      "providers": [{ provide: this._dialogDataToken, useValue: options?.data }]
    });

    const componentRef = componentFactory.create(customInjector);
    this.appRef.attachView(componentRef.hostView);
    const modalComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
      WindowModalDialogComponent
    );

    const modalComponent = modalComponentFactory.create(this.injector, [
      (componentRef.hostView as EmbeddedViewRef<any>).rootNodes,
    ]);

    modalComponent.instance.config = { ...new WindowModalDialogOptions(), ...options };
    modalComponent.instance.closeEvent.subscribe(() => this.closeModal());
    modalComponent.instance.submitEvent.subscribe(() => this.submitModal());
    modalComponent.hostView.detectChanges();

    this.document.body.appendChild(modalComponent.location.nativeElement);

    if (this.modals.length == 0) {
      this.renderer.addClass(this.document.body, 'window-scrolled-block');
    }

    this.modals.push(modalComponent.location.nativeElement);
    this.modalNotifier = new Subject();
    return this.modalNotifier?.asObservable();
  }

  closeModal() {
    this.modalNotifier?.complete();
    this.modals.pop();
    this.checkBlockedScrolled();
  }

  submitModal() {
    this.modalNotifier?.next('confirm');
    this.closeModal();
  }

  checkBlockedScrolled() {
    if (this.modals.length == 0) {
      this.renderer.removeClass(this.document.body, 'window-scrolled-block');
    }
  }
}
