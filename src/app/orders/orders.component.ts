import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  editOrderForm = this.fb.group({
    OrderId: [''],
    MenuId: [''],
    TableNo: [''],
    Amount: [''],
    PreparationTime: [''],
    OrderedTime: ['']
  });

  constructor(private service: AdminService, private location: Location, private fb: FormBuilder) { }
  // orders: any;
orders = [
  {OrderId: '1234', MenuId: ['Chicken tikka kebab', 'Butter naan1'], TableNo: 2, Amount: 200, PreparationTime: 45 , OrderedTime: '10:00'},
  {OrderId: '1235', MenuId: ['Chicken tikka kebab', 'Butter naan2'], TableNo: 3, Amount: 300, PreparationTime: 35, OrderedTime: '11:00'},
  {OrderId: '1236', MenuId: ['Chicken tikka kebab', 'Butter naan3'], TableNo: 4, Amount: 250, PreparationTime: 60, OrderedTime: '11:30'},
  {OrderId: '1237', MenuId: ['Chicken tikka kebab', 'Butter naan4'], TableNo: 1, Amount: 450, PreparationTime: 40, OrderedTime: '12:00'}
];
  ngOnInit() {
    // this.getAllOrders();
      }

      editOrder(order) {
        console.log('order');
        this.editOrderForm.patchValue({
          OrderId: order.OrderId,
          MenuId: order.MenuId,
          TableNo: order.TableNo,
          Amount: order.Amount,
          PreparationTime: order.PreparationTime,
          OrderedTime: order.OrderedTime
        });
      }

      navigateBack() {
        this.location.back();
      }

      SaveOrder(order) {
        console.log('Details', order);
      }
      // getAllOrders() {
      //   this.service.getAllOrders(1).subscribe(res => {
      //     console.log('resres', res);
      //     this.orders = res;
      //   });
      // }
    }

