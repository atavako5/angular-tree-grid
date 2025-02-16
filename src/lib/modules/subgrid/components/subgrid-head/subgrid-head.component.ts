import { Component, OnInit, Input } from '@angular/core';
import { Column } from '../../../../models/Column.model';
import { DefaultConfigs } from '../../../../default-classes/default-config';

@Component({
  selector: '[db-subgrid-head]',
  templateUrl: './subgrid-head.component.html',
  styleUrls: ['./subgrid-head.component.scss'],
})
export class SubgridHeadComponent implements OnInit {
  @Input()
  configs: DefaultConfigs = new DefaultConfigs();

  @Input()
  row_data: any;

  constructor() { }

  ngOnInit() { }

  sortColumn(row_data: { children: any[] }, column: Column) {
    const sort_by = column.name;

    // If already sorted then reverse.
    column.sort_type = column.sorted ? +!column.sort_type : 1;
    column.sorted = 1;

    column.sort_type
      ? row_data.children.sort((a, b) =>
        a[sort_by] > b[sort_by] ? 1 : b[sort_by] > a[sort_by] ? -1 : 0
      )
      : row_data.children.sort((a, b) =>
        a[sort_by] < b[sort_by] ? 1 : b[sort_by] < a[sort_by] ? -1 : 0
      );
  }
}
