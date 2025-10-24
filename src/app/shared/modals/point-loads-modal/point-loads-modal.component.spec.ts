import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointLoadsModalComponent } from './point-loads-modal.component';

describe('PointLoadsModalComponent', () => {
  let component: PointLoadsModalComponent;
  let fixture: ComponentFixture<PointLoadsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointLoadsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointLoadsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
