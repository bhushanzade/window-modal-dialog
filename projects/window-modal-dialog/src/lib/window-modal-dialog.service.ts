import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
} from '@angular/core';
import { Subject } from 'rxjs';
import { WindowModalDialogComponent } from './window-modal-dialog.component';
import { IWindowModalDialogOptions } from './window-modal-dialog';

export const WINDOW_DIALOG_DATA = new InjectionToken<any>('WindowDialogData');

@Injectable({
  providedIn: 'root'
})
export class WindowModalDialogService {

  private modalNotifier?: Subject<string>;
  private readonly _dialogDataToken: InjectionToken<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {
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

    modalComponent.instance.size = options?.size;
    modalComponent.instance.title = options?.title;
    modalComponent.instance.disableClose = options?.disableClose;
    modalComponent.instance.data = options?.data;
    modalComponent.instance.closeEvent.subscribe(() => this.closeModal());
    modalComponent.instance.submitEvent.subscribe(() => this.submitModal());
    modalComponent.hostView.detectChanges();

    this.document.body.appendChild(modalComponent.location.nativeElement);
    this.modalNotifier = new Subject();
    return this.modalNotifier?.asObservable();
  }

  closeModal() {
    this.modalNotifier?.complete();
  }

  submitModal() {
    this.modalNotifier?.next('confirm');
    this.closeModal();
  }
}
