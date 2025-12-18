import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SceneGraphComponent } from './scene-graph/scene-graph.component';
import { NgtCanvas, extend } from 'angular-three';
import * as THREE from 'three';

extend(THREE);

@Component({
  selector: 'app-cad',
  imports: [NgtCanvas, SidebarComponent],
  templateUrl: './cad.component.html',
    // template: `
    //   <ngt-canvas [sceneGraph]="sceneGraph" />
    // `,
  styleUrl: './cad.component.css'
})
export class CadComponent {
  protected sceneGraph = SceneGraphComponent;
}
