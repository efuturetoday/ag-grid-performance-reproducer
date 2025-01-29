import {AfterViewChecked, Component} from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  standalone: true,
  template: `<h1 style="padding: 0px;">My Custom Detail</h1>`,
})
export class DetailCellRenderer implements ICellRendererAngularComp, AfterViewChecked {
  agInit(params: any): void {}

  refresh(params: any): boolean {
    return false;
  }

  ngAfterViewChecked() {


  }
}
