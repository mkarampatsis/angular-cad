import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideForm2Component } from './side-form2.component';

describe('SideForm2Component', () => {
  let component: SideForm2Component;
  let fixture: ComponentFixture<SideForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideForm2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
