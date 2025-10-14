import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, ElementRef, viewChild } from '@angular/core';
// import { injectBeforeRender } from 'angular-three';
// import { Mesh } from 'three';
import { CubeComponent } from '../cube/cube.component';

@Component({
  selector: 'app-scene-graph',
  imports: [CubeComponent],
  templateUrl: './scene-graph.component.html',
  styleUrl: './scene-graph.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraphComponent {
  // meshRef = viewChild.required<ElementRef<Mesh>>('mesh'); 

  // constructor() {
  //   injectBeforeRender(() => {
  //     const mesh = this.meshRef().nativeElement;
  //     mesh.rotation.x += 0.01;
  //     mesh.rotation.y += 0.01;
  //   });
  // }
}
