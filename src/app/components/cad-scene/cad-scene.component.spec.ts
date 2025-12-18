import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadSceneComponent } from './cad-scene.component';

describe('CadSceneComponent', () => {
  let component: CadSceneComponent;
  let fixture: ComponentFixture<CadSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadSceneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
