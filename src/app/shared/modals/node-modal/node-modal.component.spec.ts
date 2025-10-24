import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeModalComponent } from './node-modal.component';

describe('NodeModalComponent', () => {
  let component: NodeModalComponent;
  let fixture: ComponentFixture<NodeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
