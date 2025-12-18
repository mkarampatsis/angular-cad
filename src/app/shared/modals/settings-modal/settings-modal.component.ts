import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-modal',
  imports: [],
  templateUrl: './settings-modal.component.html',
  styleUrl: './settings-modal.component.css'
})
export class SettingsModalComponent {
  modalRef: any;
  data!: string;
}
