import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FoodApp';
  login = false;
  constructor(private readonly webSocketService: WebSocketService) {}
  showDashboard = false;
  ngOnInit() {
    // const profileForm = this.fb.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
    if (!!sessionStorage.getItem('restaurantId')) {
      this.webSocketService.connect();
    }
    // this.webSocketService.emit('SendOrder', 'order details comes here');
  }
}
