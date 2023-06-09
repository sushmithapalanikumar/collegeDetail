import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegelistComponent } from './collegelist.component';

describe('CollegelistComponent', () => {
  let component: CollegelistComponent;
  let fixture: ComponentFixture<CollegelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegelistComponent]
    });
    fixture = TestBed.createComponent(CollegelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
