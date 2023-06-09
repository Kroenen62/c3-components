import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let component: MenuExamplesComponent;
  let fixture: ComponentFixture<MenuExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
