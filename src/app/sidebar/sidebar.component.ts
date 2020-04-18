import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { RestaurantDetailsInterface } from './RestaurantDetails.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, private service: AdminService) { }

  ngOnInit() {
    const userId = Number(sessionStorage.getItem('userId'));
    this.service.getRestaurantByUserId(userId).subscribe((res: RestaurantDetailsInterface) => {
      const restaurantId: number = res.RestaurantId;
      sessionStorage.setItem('restaurantId', restaurantId.toString());
    });
  }
  navigateToMenu() {
    this.router.navigateByUrl('menu');
  }
}
