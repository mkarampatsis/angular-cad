import { Injectable } from '@angular/core';
import * as THREE from 'three';
import * as ThreeDxf from 'three-dxf';

@Injectable({
  providedIn: 'root'
})
export class DxfLoaderService {

  constructor() { }

  async loadDxf(file: File): Promise<THREE.Object3D> {
    const text = await file.text();
    const parser = new (ThreeDxf as any).Loader();
    const dxf = parser.parse(text);
    return dxf; // This is a THREE.Group or Scene object
  }
}
