import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsModalComponent } from './sections-modal.component';

describe('SectionsModalComponent', () => {
  let component: SectionsModalComponent;
  let fixture: ComponentFixture<SectionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
