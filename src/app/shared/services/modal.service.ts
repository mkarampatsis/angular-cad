import { inject, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DistLoadsModalComponent } from '../modals/dist-loads-modal/dist-loads-modal.component';
import { ElementsModalComponent } from '../modals/elements-modal/elements-modal.component';
import { MaterialsModalComponent } from '../modals/materials-modal/materials-modal.component';
import { ModelModalComponent } from '../modals/model-modal/model-modal.component';
import { NodeModalComponent } from '../modals/node-modal/node-modal.component';
import { PointLoadsModalComponent } from '../modals/point-loads-modal/point-loads-modal.component';
import { ResultsModalComponent } from '../modals/results-modal/results-modal.component';
import { SectionsModalComponent } from '../modals/sections-modal/sections-modal.component';
import { SettingsModalComponent } from '../modals/settings-modal/settings-modal.component';
import { SupportsModalComponent } from '../modals/supports-modal/supports-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalOpen = inject(NgbModal);

  showModelDetails(data: string) {
    const modalRef = this.modalOpen.open(ModelModalComponent, {
      fullscreen: 'lg',
      size: 'xl',
      centered: true,
    });
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.modalRef = modalRef;
  }

  showNodesDetails(data: string) {
    const modalRef = this.modalOpen.open(NodeModalComponent, {
      fullscreen: 'lg',
      size: 'xl',
      centered: true,
    });
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.modalRef = modalRef;
  }

  showMaterialsDetails(data: string) {
    const modalRef = this.modalOpen.open(MaterialsModalComponent, {
      fullscreen: 'lg',
      size: 'xl',
      centered: true,
    });
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.modalRef = modalRef;
  }

  showSectionsDetails(data: string) {
    const modalRef = this.modalOpen.open(SectionsModalComponent, {
      fullscreen: 'lg',
      size: 'xl',
      centered: true,
    });
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.modalRef = modalRef;
  }
  
  showElementsDetails(data: string) {
    const modalRef = this.modalOpen.open(ElementsModalComponent, {
      fullscreen: 'lg',
      size: 'xl',
      centered: true,
    });
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.modalRef = modalRef;
  }

  showSupportsDetails(data: string) {
    const modalRef = this.modalOpen.open(SupportsModalComponent, {
      fullscreen: 'lg',
      size: 'xl',
      centered: true,
    });
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.modalRef = modalRef;
  }

  showPointsLoadsDetails(data: string) {
    const modalRef = this.modalOpen.open(PointLoadsModalComponent, {
      fullscreen: 'lg',
      size: 'xl',
      centered: true,
    });
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.modalRef = modalRef;
  }

  showDistLoadsDetails(data: string) {
    const modalRef = this.modalOpen.open(DistLoadsModalComponent, {
      fullscreen: 'lg',
      size: 'xl',
      centered: true,
    });
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.modalRef = modalRef;
  }

  showResultsDetails(data: string) {
    const modalRef = this.modalOpen.open(ResultsModalComponent, {
      fullscreen: 'lg',
      size: 'xl',
      centered: true,
    });
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.modalRef = modalRef;
  }

  showSettingsDetails(data: string) {
    const modalRef = this.modalOpen.open(SettingsModalComponent, {
      fullscreen: 'lg',
      size: 'xl',
      centered: true,
    });
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.modalRef = modalRef;
  }
}
