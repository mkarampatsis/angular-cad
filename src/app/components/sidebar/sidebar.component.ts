import { Component, inject } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SideForm1Component } from './side-form1/side-form1.component';
import { SideForm2Component } from './side-form2/side-form2.component';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  private offcanvasService = inject(NgbOffcanvas);
  
  openSideBar1() {
		const offcanvasRef = this.offcanvasService.open(SideForm1Component);
		offcanvasRef.componentInstance.name = 'World';
	}

  openSideBar2() {
		const offcanvasRef = this.offcanvasService.open(SideForm2Component);
		offcanvasRef.componentInstance.name = 'Markos';
	}
}
