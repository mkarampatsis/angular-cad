import { Component, inject, Input } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-side-form2',
  imports: [],
  templateUrl: './side-form2.component.html',
  styleUrl: './side-form2.component.css'
})
export class SideForm2Component {
  activeOffcanvas = inject(NgbActiveOffcanvas);
	@Input() name: string | undefined;
}
