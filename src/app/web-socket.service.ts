import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  socket: SocketIOClient.Socket;

  constructor(private toastr: ToastrService) {}

  connect() {
    const connectOpts: SocketIOClient.ConnectOpts = {
      query: {
        Id: `R${sessionStorage.getItem('restaurantId')}`,
      },
    };
    if (!this.socket) {
      this.socket = io(environment.socketUrl, connectOpts);
    }
  }

  listen(eventName: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        this.toastr.success(`OrderId: ${data.orderId}`, 'New Order!!!');
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, data: any): void {
    this.socket.emit(eventName, data);
  }
}
