import {AfterViewChecked, Component} from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  standalone: true,
  template: `<span>My Custom Cell</span>`,
  selector: 'app-custom-cell-renderer',
})
export class CustomCellRendererComponent implements ICellRendererAngularComp, AfterViewChecked {
  agInit(params: any): void {}

  refresh(params: any): boolean {
    return false;
  }

  ngAfterViewChecked() {
    // simulate heavy computation for better chrome dev tools visibility
    console.log(window.getComputedStyle(document.body).height)
    console.log(window.getComputedStyle(document.body).top)
    console.log(window.getComputedStyle(document.body).left)
  }
}
