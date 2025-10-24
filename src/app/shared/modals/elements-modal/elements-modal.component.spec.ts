import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsModalComponent } from './elements-modal.component';

describe('ElementsModalComponent', () => {
  let component: ElementsModalComponent;
  let fixture: ComponentFixture<ElementsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
