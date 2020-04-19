import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from '../admin.service';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit, OnDestroy {
  editOrderForm = this.fb.group({
    OrderId: [''],
    MenuId: [''],
    TableNo: [''],
    Amount: [''],
    PreparationTime: [''],
    OrderedTime: [''],
  });

  constructor(
    private service: AdminService,
    private location: Location,
    private fb: FormBuilder,
    private webSocketService: WebSocketService,
  ) {}

  UserSocket;
  orders: any;

  ngOnInit() {
    this.getAllOrders();
    this.UserSocket = this.webSocketService.listen('NewOrder').subscribe((res) => {
      this.getAllOrders();
    });
  }

  editOrder(order) {
    console.log('order');
    this.editOrderForm.patchValue({
      OrderId: order.OrderId,
      MenuId: order.MenuId,
      TableNo: order.TableNo,
      Amount: order.Amount,
      PreparationTime: order.PreparationTime,
      OrderedTime: order.OrderedTime,
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
    this.service.getAllOrders(restId).subscribe((res: any) => {
      this.orders = res;
      this.orders = this.orders.map((order) => {
        order.orderedTime = new Date(order.orderedTime).toString();
        return order;
      });
    });
  }

  ngOnDestroy(): void {
    this.UserSocket.unsubscribe();
  }
}
