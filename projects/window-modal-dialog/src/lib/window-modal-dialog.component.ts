import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'window-modal-dialog',
  template: `
    <div class="modal {{ size }}">
      <div class="modal-header">
        {{ title }}
        <span class="modal-close" (click)="close()">✕</span>
      </div>
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
    <div class="modal-backdrop" (click)="close(disableClose)"></div>
  `,
  styles: [
    `
      .modal-backdrop {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .modal {
        z-index: 3;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        height: auto;
        border: olive 1px solid;
        background-color: white;
        border-radius: 5px;
        padding: 20px;
      }

      .modal-header {
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        margin-bottom: 20px;
      }

      .modal-content {
        margin-bottom: 20px;
      }

      .modal-footer {
        display: flex;
        justify-content: flex-end;
      }

      .modal-close {
        cursor: pointer;
      }
    `
  ]
})
export class WindowModalDialogComponent {
  @Input() size?= 'md';
  @Input() title?= 'Modal title';
  @Input() disableClose?= false;
  @Input() data?: any;

  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  close(isDisable?: boolean): void {
    if (isDisable === true) return;
    this.elementRef.nativeElement.remove();
    this.closeEvent.emit();
  }

  submit(): void {
    this.elementRef.nativeElement.remove();
    this.submitEvent.emit();
  }
}
