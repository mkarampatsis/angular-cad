import { Component } from '@angular/core';

@Component({
  selector: 'app-materials-modal',
  imports: [],
  templateUrl: './materials-modal.component.html',
  styleUrl: './materials-modal.component.css'
})
export class MaterialsModalComponent {

  modalRef: any;
  data!: string;
}
