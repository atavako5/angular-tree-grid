import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { DefaultConfigs } from '../../../../default-classes/default-config';
import { Configs } from '../../../../models/Configs.model';

@Component({
  selector: '[db-subgrid-body]',
  templateUrl: './subgrid-body.component.html',
  styleUrls: ['./subgrid-body.component.scss'],
})
export class SubgridBodyComponent implements OnInit {
  @Input()
  configs: Configs = new DefaultConfigs();

  @Input()
  expand_tracker: any;

  @Input()
  row_data: any;

  @Input()
  cellclick!: EventEmitter<any>;

  constructor() { }

  ngOnInit() { }
}
