import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let component: NavbarExamplesComponent;
  let fixture: ComponentFixture<NavbarExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
