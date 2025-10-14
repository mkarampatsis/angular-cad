import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideForm1Component } from './side-form1.component';

describe('SideForm1Component', () => {
  let component: SideForm1Component;
  let fixture: ComponentFixture<SideForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideForm1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
