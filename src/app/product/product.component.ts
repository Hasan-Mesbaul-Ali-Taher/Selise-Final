import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlInterface } from '../reusable-table/control-interface';
import { CrudInterface } from '../reusable-table/crud-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  apiForTable: CrudInterface = {
    create: 'https://localhost:30278/api/add-Product',
    read: 'https://localhost:30278/api/',
    update: 'https://localhost:30278/api/update-Product/',
    delete: 'https://localhost:30278/api/delete-Product/',
    readInChunk: 'https://localhost:30278/api/chunk/',
  };
  controlForTable: ControlInterface = {
    pageSize: [10, 15, 20],
    sorting: false,
    filter: false,
    columns: [
      'productName',
      'productShortCode',
      'category',
      'price',
      'count',
      'createdDate',
      'origin',
      'action',
    ],
    actions: true,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  progressBar: boolean = true;
  stopProgressBar(val: boolean) {
    this.progressBar = val;
  }
}
