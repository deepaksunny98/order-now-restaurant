import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  addItemForm = this.fb.group({
    Name: ['', Validators.required],
    ImageUrl: ['', Validators.required],
    PreparationTime: ['', Validators.required],
    Amount: ['', Validators.required],
    Type: ['', Validators.required],
  });
  food = {
    type1: 'Starters',
    type2: 'MainCourse',
    type3: 'Beverages',
    type4: 'Others',
  };
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private service: AdminService
  ) {}
  Staters: any[] = [];
  maincourse: any[] = [];
  beverages: any[] = [];
  others: any[] = [];


  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.service.getMenu(1).subscribe((res: any) => {
      if (res) {
        this.Staters = res.Starters || [];
        this.maincourse = res.MainCourse || [];
        this.beverages = res.Beverages || [];
        this.others = res.Others || [];
      }
    });
  }

  openPopUp() {
    this.addItemForm.reset();
  }
  SaveItem(data) {
    data.RestaurantId = 1;
    console.log(data);
    this.service.createMenu(data).subscribe((res) => {
      this.getMenu();
    });
  }
  editItem(data) {
    this.service.updatemenu(data).subscribe((res) => {
      this.getMenu();
    });
  }

  deleteItem(data, i) {
    this.service.deleteMenu(data.MenuId).subscribe((res) => {
      this.getMenu();
    });
  }
  add(data) {
    data.PreparationTime = data.PreparationTime + 1;
  }

  subtract(data) {
    console.log('data', data);
    data.PreparationTime = data.PreparationTime - 1;
  }

  navigateBack() {
    this.location.back();
  }
}
