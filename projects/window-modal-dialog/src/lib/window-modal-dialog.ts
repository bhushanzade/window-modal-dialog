import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
  afterClose?: Observable<any>
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
  afterClose: Observable<any> = new Subject();
}

@Injectable({
  providedIn: 'root'
})
export class WindowModalDialog {

  private readonly _dialogDataToken: InjectionToken<any>;
  private modals: any[] = [];
  private renderer: Renderer2;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
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
    modalComponent.instance.closeEvent.subscribe(() => this.close());
    modalComponent.hostView.detectChanges();
    this.document.body.appendChild(modalComponent.location.nativeElement);
    if (this.modals.length == 0) {
      this.renderer.addClass(this.document.body, 'window-scrolled-block');
    }
    this.modals.push(modalComponent);
    return modalComponent.instance.config;
  }

  close(val?: any) {
    const component: ComponentRef<WindowModalDialogComponent> = this.modals.pop();
    if (component) {
      const afterClose = component.instance.config.afterClose as Subject<any>;
      afterClose.next(val);
      afterClose.complete();
      component.instance.closeModal();
    }
    this.checkBlockedScrolled();
  }

  checkBlockedScrolled() {
    if (this.modals.length == 0) {
      this.renderer.removeClass(this.document.body, 'window-scrolled-block');
    }
  }
}
