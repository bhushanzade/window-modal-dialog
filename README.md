# window-modal-dialog

Window modal dialog is represent modal popup.

<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://angular.io/assets/images/logos/angular/angular.svg">
  <h1 align="center">Window Modal Dialog</h1>
</p>

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](https://procodeprogramming.com/profile/bhushanzade)
[![npm](https://img.shields.io/npm/v/window-modal-dialog.svg)]()
[![npm](https://img.shields.io/npm/dm/window-modal-dialog.svg)]()
[![npm](https://img.shields.io/npm/dt/window-modal-dialog.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2014%2B-blue.svg?style=flat-square)]()

<!-- [![Support](https://img.shields.io/badge/Support-Angular%206%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%207%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%208%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%209%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2010%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2011%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2012%2B-blue.svg?style=flat-square)]() -->

# What is use?

`window-modal-dialog` Modal popup for Angular 14+ pure css bootstrap modal. Easy to integrate & easy to use. Looks similar like bootstrap modal but different is to maintain the code redability by making different components for modal popups.

<!-- ## Supports

| Angular Version | Package Version |
| :-------------- | :-------------- |
| Angular 7       | Version 7       |
| Angular 8       | Version 8       |
| Angular 9       | Version 9       |
| Angular 10      | Version 10      |
| Angular 11      | Version 11      |
| Angular 12      | Version 12      |
| Angular 13      | Version 13      |
| Angular 14      | Version 14      |
| Angular 15      | Version 15      |
| Angular 16      | Version 16      | -->

# Installation

```
npm install --save window-modal-dialog
```

<!-- # [Demo live site](https://bhushanzade.github.io/ngx-http-loader/) -->

# Features

- Seperated with many components
- Increase code readability
- Parent to child modal communication
- Customization with css
- Pure css responsive
- Default header
- Light weight library

# Usage

From your Angular `AppModule`:

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { WindowModalDialogModule } from "window-modal-dialog";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WindowModalDialogModule.forRoot(), // <============ Don't forget to call 'forRoot()'!
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

In your app.component.html, simply add modal open button:

```html
<div style="padding: 20%; display: flex; justify-content: center;">
  <button style="width: 200px; height: 40px; background: gray;" (click)="open()">Open Modal Popup</button>
</div>
```

In your app.component.ts

```typescript
import { Component } from "@angular/core";
import { WindowModalDialogService } from "window-modal-dialog";
import { SampleModalComponent } from "./modal.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(private modal: WindowModalDialogService) {}

  open() {
    const x = this.modal.open(SampleModalComponent, {
      title: "Open Dialog Modal",
      disableClose: true,
      data: {
        name: "Bhushan",
        lname: "Zade",
      },
    });
    x.afterClose?.subscribe((res) => {
      console.log(res);
    });
  }
}
```

Sample Custom Modal Component & HTML

```
import { Component, Inject, Optional } from '@angular/core';
import { WINDOW_DIALOG_DATA } from 'window-modal-dialog';

@Component({
  selector: 'app-sample-modal',
  template: `
    <div class="window-modal-body">
      <div>This is your custom modal content</div>
      <div>
          <pre> {{ data | json}}</pre>
      </div>
    </div>
    <div class="window-modal-footer">
      <button (click)="save()">Save</button>
    </div>
  `
})
export class SampleModalComponent {

  constructor(
    @Optional() @Inject(WINDOW_DIALOG_DATA) public data: any
  ) { }

  save(): void {
    this.modal.close("1st modal emmited value");
  }
}

```

# Available Options

- **[defaultHeader]**: To set default header or not. By default its true and need to pass title in default header.
- **[title]**: To show title in modal popup. Default is `Modal Title` string format.
- **[disableClose]**: If you want to prevent clicks outside of modal window then set disableClose as true else false to close modal by click outside. Default is false.
- **[data]**: To pass dynamic data to the modal component. By Default its null data.
- **[width]**: To set width of modal window. Default is 100%.
- **[minWidth]**: To set minimum width of modal window. Default is 400px.
- **[height]**: To set height of modal window. Default is 100%.
- **[minHeight]**: To set minimum height of modal window. Default is 800px.
- **[afterClose]**: To received value from closing modal component by subscribing afterClose observable.

# Dependencies

- Angular 14+ Support

## Creator

---

#### [Bhushan Zade](https://procodeprogramming.com/profile/bhushanzade)

- [@GitHub](https://github.com/bhushanzade)
- [@LinkedIn](https://www.linkedin.com/in/bhushanzade)
