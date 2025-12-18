import { Component } from '@angular/core';

@Component({
  selector: 'app-results-modal',
  imports: [],
  templateUrl: './results-modal.component.html',
  styleUrl: './results-modal.component.css'
})
export class ResultsModalComponent {
  modalRef: any;
  data!: string;
}
