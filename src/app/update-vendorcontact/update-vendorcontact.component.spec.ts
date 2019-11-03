import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVendorcontactComponent } from './update-vendorcontact.component';

describe('UpdateVendorcontactComponent', () => {
  let component: UpdateVendorcontactComponent;
  let fixture: ComponentFixture<UpdateVendorcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVendorcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVendorcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
