import { Component } from '@angular/core';

@Component({
  selector: 'app-point-loads-modal',
  imports: [],
  templateUrl: './point-loads-modal.component.html',
  styleUrl: './point-loads-modal.component.css'
})
export class PointLoadsModalComponent {
  modalRef: any;
  data!: string;
}
