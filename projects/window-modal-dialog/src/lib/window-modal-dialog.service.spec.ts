import { TestBed } from '@angular/core/testing';

import { WindowModalDialogService } from './window-modal-dialog.service';

describe('WindowModalDialogService', () => {
  let service: WindowModalDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowModalDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
