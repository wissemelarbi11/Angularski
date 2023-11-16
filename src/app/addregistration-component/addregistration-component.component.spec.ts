import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddregistrationComponent } from './addregistration-component.component';

describe('AddregistrationComponentComponent', () => {
  let component: AddregistrationComponent;
  let fixture: ComponentFixture<AddregistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddregistrationComponent]
    });
    fixture = TestBed.createComponent(AddregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
