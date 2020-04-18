import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  socket: SocketIOClient.Socket;

  constructor() {
    const abc: SocketIOClient.ConnectOpts = {
      query: {
        Id: 'bcd',
        clientType: 'Restaurant'
      },
    };
    this.socket = io(environment.socketUrl, abc);
  }

  listen(eventName: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, data: any): void {
    this.socket.emit(eventName, data);
  }
}
