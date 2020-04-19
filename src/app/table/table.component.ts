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
  restuarentId: number;
  addTableForm = this.fb.group({
    TableNo: ['', Validators.required],
    Status: [''],
    Size: ['', Validators.required],
    Time: ['']
  });
  constructor(private location: Location, private fb: FormBuilder, private service: AdminService) { }
  Tables: any;
  ngOnInit() {
    this.restuarentId = +sessionStorage.getItem('restaurantId');
    this.getTables();
  }
  navigateBack() {
    this.location.back();
  }
  SaveTable(data) {
    const createTableJson = {
      TableNo: data.TableNo,
      RestaurantId: this.restuarentId,
      Size: data.Size
    };
    this.service.createTable(createTableJson).subscribe(res => {
      this.getTables();
    });
  }

  getTables() {
  this.service.getTables(this.restuarentId).subscribe( res => {
    this.Tables = res;
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
