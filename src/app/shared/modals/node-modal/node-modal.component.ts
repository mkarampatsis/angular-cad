import { Component } from '@angular/core';

@Component({
  selector: 'app-node-modal',
  imports: [],
  templateUrl: './node-modal.component.html',
  styleUrl: './node-modal.component.css'
})
export class NodeModalComponent {
  modalRef: any;
  data!: string;
}
