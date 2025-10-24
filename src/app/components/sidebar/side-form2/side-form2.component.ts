import { Component, inject, Input } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../../../shared/services/modal.service';

@Component({
  selector: 'app-side-form2',
  imports: [],
  templateUrl: './side-form2.component.html',
  styleUrl: './side-form2.component.css'
})
export class SideForm2Component {
  @Input() name: string | undefined;

  activeOffcanvas = inject(NgbActiveOffcanvas);
  modalService = inject(ModalService);

  openModal(modal: string) {
    switch (modal) {
      case "Model":
        console.log("Model");
        break;
      case "Nodes":
        console.log("Nodes");
        break;
      case "Materials":
        console.log("Materials");
        break;
      case "Sections":
        console.log("Sections");
        break;
      case "Elements":
        console.log("Elements");
        break;
      case "Supports":
        console.log("Supports");
        break;
      case "Point Loads":
        console.log("Point Loads");
        break;
      case "Dist Loads":
        console.log("Dist Loads");
        this.modalService.showDistLoadsDetails("Dist Loads");
        break;
      case "Results":
        console.log("Results");
        break;  
      default:
        console.log("Settings");
    }
  }
}
