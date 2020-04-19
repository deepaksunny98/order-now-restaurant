import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { RestaurantDetailsInterface } from './RestaurantDetails.model';
import { WebSocketService } from '../web-socket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, OnDestroy {

  UserSocket;

  constructor(
    private router: Router,
    private service: AdminService,
    private webSocketService: WebSocketService
  ) {}

  ngOnInit() {
    const userId = Number(sessionStorage.getItem('userId'));
    this.service
      .getRestaurantByUserId(userId)
      .subscribe((res: RestaurantDetailsInterface) => {
        const restaurantId: number = res.RestaurantId;
        sessionStorage.setItem('restaurantId', restaurantId.toString());
        this.webSocketService.connect();
        this.UserSocket = this.webSocketService.listen('NewOrder').subscribe(res => {});
      });
  }
  navigateToMenu() {
    this.router.navigateByUrl('menu');
  }

  ngOnDestroy(): void {
    this.UserSocket.unsubscribe();
  }

}
