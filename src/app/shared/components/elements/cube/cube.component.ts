import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild, signal, input } from '@angular/core';
import { injectBeforeRender, NgtVector3 } from 'angular-three';
import { Mesh } from 'three';

@Component({
  selector: 'app-cube',
  imports: [],
  templateUrl: './cube.component.html',
  styleUrl: './cube.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CubeComponent {
  position = input<NgtVector3>([0, 0, 0]);

  meshRef = viewChild.required<ElementRef<Mesh>>('mesh');
  hovered = signal(false);
  clicked = signal(false);
  
  constructor() {

    injectBeforeRender(() => {
      const mesh = this.meshRef().nativeElement;
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
    });
  }
}
