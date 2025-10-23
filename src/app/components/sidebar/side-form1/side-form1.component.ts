import { Component, inject, Input } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-side-form1',
  imports: [],
  templateUrl: './side-form1.component.html',
  styleUrl: './side-form1.component.css'
})
export class SideForm1Component {
  activeOffcanvas = inject(NgbActiveOffcanvas);
	@Input() name: string | undefined;

  // File actions
  newFile() { console.log('New File'); }
  loadFile() { console.log('Load File'); }
  saveFile() { console.log('Save File'); }
  importDxf() { console.log('Import DXF'); }
  exportScene() { console.log('Export Scene'); }
  publish() { console.log('Publish'); }

  // View actions
  toggleNodeIDs() { console.log('Toggle Node IDs'); }
  toggleBeamIDs() { console.log('Toggle Beam IDs'); }
  toggleColumnIDs() { console.log('Toggle Column IDs'); }
  toggleGrid() { console.log('Toggle Grid'); }

  // Run
  runOptimization() { console.log('Run Optimization'); }
}
