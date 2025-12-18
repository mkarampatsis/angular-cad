import { Component } from '@angular/core';

@Component({
  selector: 'app-elements-modal',
  imports: [],
  templateUrl: './elements-modal.component.html',
  styleUrl: './elements-modal.component.css'
})
export class ElementsModalComponent {

  modalRef: any;
  data!: string;
}
