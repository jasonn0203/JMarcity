import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedCategoriesComponent } from './med-categories.component';

describe('MedCategoriesComponent', () => {
  let component: MedCategoriesComponent;
  let fixture: ComponentFixture<MedCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
