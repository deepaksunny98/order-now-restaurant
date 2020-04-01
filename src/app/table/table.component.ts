import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  addTableForm = this.fb.group({
    TableNo: ['', Validators.required],
    Status: ['', Validators.required],
    Size: ['', Validators.required],
    Time: ['', Validators.required]
  });
  constructor(private location: Location, private fb: FormBuilder, private service: AdminService) { }
  // Tables: any;
  Tables = [
    {TableNo: 1, Status: 'RES', Size: 4, Time: '40'},
    {TableNo: 1, Status: 'RES', Size: 4, Time: '40'},
    {TableNo: 1, Status: 'RES', Size: 4, Time: '40'},
    {TableNo: 1, Status: 'RES', Size: 4, Time: '40'}
  ];
  ngOnInit() {
    // this.getTables();
  }
  navigateBack() {
    this.location.back();
  }
  SaveTable(data) {
    data.RestaurantId = 2;
    this.service.createTable(data).subscribe(res => {
      this.getTables();
    });
  }

  getTables() {
  this.service.getTables().subscribe( res => {
    // this.Tables = res;
    });
  }
  add(data) {
    data.Size = data.Size + 1;
  }

  subtract(data) {
    data.Size = data.Size - 1;
  }
  editTable(data) {
    this.service.editTable(data).subscribe(res => {
      this.getTables();
    });
  }

  deleteTable(data) {
    this.service.deleteTable(data.TableId).subscribe(res => {
      this.getTables();
    });
  }
}
