import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRegistorComponent } from './person-registor.component';

describe('PersonRegistorComponent', () => {
  let component: PersonRegistorComponent;
  let fixture: ComponentFixture<PersonRegistorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonRegistorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRegistorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
