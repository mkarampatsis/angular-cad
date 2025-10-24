import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistLoadsModalComponent } from './dist-loads-modal.component';

describe('DistLoadsModalComponent', () => {
  let component: DistLoadsModalComponent;
  let fixture: ComponentFixture<DistLoadsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistLoadsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistLoadsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
