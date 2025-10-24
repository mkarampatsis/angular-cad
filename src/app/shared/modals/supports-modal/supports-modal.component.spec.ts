import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportsModalComponent } from './supports-modal.component';

describe('SupportsModalComponent', () => {
  let component: SupportsModalComponent;
  let fixture: ComponentFixture<SupportsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
