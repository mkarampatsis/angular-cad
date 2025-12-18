import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, ElementRef, viewChild } from '@angular/core';
import { injectStore, extend, NgtArgs } from 'angular-three';
import { OrbitControls } from 'three-stdlib';
import { CubeComponent } from '../../../shared/components/elements/cube/cube.component';

extend({ OrbitControls }); // makes ngt-orbit-controls available

@Component({
  selector: 'app-scene-graph',
  imports: [CubeComponent, NgtArgs],
  templateUrl: './scene-graph.component.html',
  styleUrl: './scene-graph.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraphComponent {
  protected readonly Math = Math;

  private store = injectStore();
  protected camera = this.store.select('camera');
  protected glDomElement = this.store.select('gl', 'domElement');
}
