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
  orders: any;
// orders = [
//   {orderId: '1234', menuItems: [{item:'Chicken tikka kebab', quantity: 3, price: 120},{item: 'Butter naan1', quantity: 2, price: 30}]
//   , TableNo: 2, phoneNumber:'9999999999', name: 'hello',tableNo: 1, amount: 200, preparationTime: 45 , orderedTime: '10:00'},
//   {orderId: '1235', menuItems: [{item:'Chicken tikka kebab', quantity: 3, price: 120},
//   {item: 'Butter naan1', quantity: 2, price: 30}], tableNo: 3, phoneNumber:'9999999999', name: 'hello', amount: 300, preparationTime: 35, orderedTime: '11:00'},
//   {orderId: '1236', menuItems: [{item:'Chicken tikka kebab', quantity: 3, price: 120},
//   {item: 'Butter naan1', quantity: 2, price: 30}], tableNo: 4, phoneNumber:'9999999999', name: 'hello', amount: 250, preparationTime: 60, orderedTime: '11:30'},
//   {orderId: '1237', menuItems: [{item:'Chicken tikka kebab', quantity: 3, price: 120},
//   {item: 'Butter naan1', quantity: 2, price: 30}], tableNo: 1, phoneNumber:'9999999999', name: 'hello', amount: 450, preparationTime: 40, orderedTime: '12:00'}
// ];
  ngOnInit() {
    this.getAllOrders();
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
      getAllOrders() {
        const restId = sessionStorage.getItem('restaurantId');
        this.service.getAllOrders(restId).subscribe(res => {
          this.orders = res;
        });
      }
    }

