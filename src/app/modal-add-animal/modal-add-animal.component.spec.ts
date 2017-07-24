import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddAnimalComponent } from './modal-add-animal.component';

describe('ModalAddAnimalComponent', () => {
  let component: ModalAddAnimalComponent;
  let fixture: ComponentFixture<ModalAddAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
