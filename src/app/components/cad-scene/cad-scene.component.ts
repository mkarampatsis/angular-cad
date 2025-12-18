import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { extend, NgtCanvas, 
} from 'angular-three';
import * as THREE from 'three';

import { DxfLoaderService } from '../../shared/services/dxf-loader.service';

extend(THREE);

@Component({
  selector: 'app-cad-scene',
  imports: [
    CommonModule,
    NgtCanvas
  ],
  templateUrl: './cad-scene.component.html',
  styleUrl: './cad-scene.component.css'
})
export class CadSceneComponent {
  dxfLoader = inject(DxfLoaderService);
  
  dxfObjects: THREE.Object3D[] = [];
  showGrid = true;

  onSceneCreated({ scene }: { scene: THREE.Scene }) {
    // Scene is ready
  }

  async importDxf(file: File) {
    const obj = await this.dxfLoader.loadDxf(file);
    this.dxfObjects.push(obj);
  }

  toggleGrid() {
    this.showGrid = !this.showGrid;
  }
}
