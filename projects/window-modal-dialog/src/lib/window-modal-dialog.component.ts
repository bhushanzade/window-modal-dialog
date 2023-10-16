import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { IWindowModalDialogOptions, WindowModalDialogOptions } from './window-modal-dialog';

@Component({
  selector: 'window-modal-dialog',
  template: `
    <div class="window-modal-dialog" [style.width]="config.width" [style.minWidth]="config.minWidth">
      <div class="window-modal-header" *ngIf="config.defaultHeader">
        {{ config.title }}
        <span class="window-modal-close" (click)="close()">✕</span>
      </div>
      <div class="window-modal-content">
       <ng-content></ng-content>
      </div>
    </div>
    <div class="modal-backdrop" (click)="close(config.disableClose)"></div>
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

      .window-modal-dialog {
        z-index: 3;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        max-width: 500px;
        height: auto;
        min-height: 250px;
        max-height: 90vh;
        border: olive 1px solid;
        background-color: white;
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 10px 8px rgba(0,0,0,0.35);
        -moz-box-shadow: 0px 0px 10px 8px rgba(0,0,0,0.35);
        box-shadow: 0px 0px 10px 8px rgba(0,0,0,0.35);
      }

      .window-modal-header {
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        border-bottom: 1px solid gray;
        padding: 10px 20px;
      }

      ::ng-deep {
        .window-scrolled-block{
          overflow: hidden;
        }

        .window-modal-body {
          padding: 10px 20px;
          overflow-y: auto;
          max-height: 65vh;
        }

        .window-modal-footer{
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-end;
          box-sizing: border-box;
          min-height: 52px;
          margin: 0;
          padding: 8px;
          border-top: 1px solid rgb(80 80 80);
          z-index: 1055;
          /* position: absolute; */
          z-index: 1055;
          width: 100%;
          bottom: 0;
          background: white;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }

        @media only screen and (max-width:550px) {
          .window-modal-dialog {
            width: 80% !important;
            min-width: 80% !important;
          }
        }

        @media only screen and (max-height:500px) and (orientation: landscape) {
          .window-modal-body {
            max-height: 50vh;
          }
        }
      }

      .window-modal-close {
        cursor: pointer;
      }

      
    `
  ]
})
export class WindowModalDialogComponent {

  config: IWindowModalDialogOptions;

  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    this.config = new WindowModalDialogOptions();
  }

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
