import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableLightComponent implements OnInit {
  @Input() public headers: string[];
  @Input() public collections: any[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.headers);
  }
}
