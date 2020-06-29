import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyTestComponent } from './formly-test.component';

describe('FormlyTestComponent', () => {
  let component: FormlyTestComponent;
  let fixture: ComponentFixture<FormlyTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlyTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
