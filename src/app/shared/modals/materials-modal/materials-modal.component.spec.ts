import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsModalComponent } from './materials-modal.component';

describe('MaterialsModalComponent', () => {
  let component: MaterialsModalComponent;
  let fixture: ComponentFixture<MaterialsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
