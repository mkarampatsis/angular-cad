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
}
