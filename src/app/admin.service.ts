import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  login(body) {
    return this.httpClient
      .post(environment.API_URL + '/admin/login', body)
      .toPromise();
  }

  getRestaurantByUserId(userId: number) {
    return this.httpClient.get(`${environment.API_URL}/admin/getRestaurantByUserId?userId=${userId}`);
  }

  getTables(restaurantId) {
    return this.httpClient.get(environment.API_URL + '/admin/getTablesByResId?restaurantId=' + restaurantId);
  }
  editTable(data) {
    return this.httpClient.put(environment.API_URL + '/admin/tables', data);
  }
  deleteTable(tableId) {
    return this.httpClient.delete(environment.API_URL + `/admin/tables/${tableId}` );
  }
  createTable(data) {
    return this.httpClient.post(environment.API_URL + '/admin/tables', data);
  }

  getMenu(id) {
    return this.httpClient.get(
      environment.API_URL + '/admin/getMyMenu?restaurantId=' + id
    );
  }
  createMenu(data) {
    return this.httpClient.post(environment.API_URL + '/admin/menu', data);
  }
  deleteMenu(menuId) {
    return this.httpClient.delete(environment.API_URL + '/admin/menu/' + menuId);
  }
  updatemenu(data) {
    return this.httpClient.put(environment.API_URL + '/admin/menu', data);
  }

  getAllOrders(id) {
    return this.httpClient.get(environment.API_URL + '/admin/ordersByRestaurantId?restaurantId=' + id);
  }
}
