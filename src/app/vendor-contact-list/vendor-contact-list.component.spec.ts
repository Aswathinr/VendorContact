import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorContactListComponent } from './vendor-contact-list.component';

describe('VendorContactListComponent', () => {
  let component: VendorContactListComponent;
  let fixture: ComponentFixture<VendorContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorContactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
