import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AgGridAngular} from 'ag-grid-angular';
import {ColDef, FirstDataRenderedEvent, GridReadyEvent} from 'ag-grid-community';
import {DetailCellRenderer} from './detail-cell-renderer.component';
import {IAccount} from './interfaces';
import {HttpClient} from '@angular/common/http';
import {CustomCellRendererComponent} from './custom-cell-renderer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgGridAngular],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ag-grid-reproducer';
  public detailCellRenderer: any = DetailCellRenderer;
  public columnDefs: ColDef[] = [
    // group cell renderer needed for expand / collapse icons
    { field: 'name', cellRenderer: 'agGroupCellRenderer' },
    { field: 'account' },
    { field: 'calls' },
    { field: 'minutes', valueFormatter: "x.toLocaleString() + 'm'" },
    { field: 'cell1', cellRenderer: CustomCellRendererComponent },
    { field: 'cell2', cellRenderer: CustomCellRendererComponent },

    { field: 'cell3', cellRenderer: CustomCellRendererComponent },

    { field: 'cell4', cellRenderer: CustomCellRendererComponent },

    { field: 'cell5', cellRenderer: CustomCellRendererComponent },

  ];
  public defaultColDef: ColDef = {
    flex: 1,
  };

  constructor(private http: HttpClient) {
  }

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.forEachNode(function (node) {
      node.setExpanded(true);
    });
  }
  public rowData!: IAccount[];

  onGridReady(params: GridReadyEvent<IAccount>) {
    this.http
      .get<IAccount[]>(
        'https://www.ag-grid.com/example-assets/master-detail-data.json'
      )
      .subscribe((data) => {
        this.rowData = Array(50).fill(data).flat();
      });
  }
}
