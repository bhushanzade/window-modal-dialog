import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowModalDialogComponent } from './window-modal-dialog.component';

describe('WindowModalDialogComponent', () => {
  let component: WindowModalDialogComponent;
  let fixture: ComponentFixture<WindowModalDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindowModalDialogComponent]
    });
    fixture = TestBed.createComponent(WindowModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
