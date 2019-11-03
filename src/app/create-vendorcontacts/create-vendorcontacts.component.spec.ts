import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVendorcontactsComponent } from './create-vendorcontacts.component';

describe('CreateVendorcontactsComponent', () => {
  let component: CreateVendorcontactsComponent;
  let fixture: ComponentFixture<CreateVendorcontactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVendorcontactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVendorcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
