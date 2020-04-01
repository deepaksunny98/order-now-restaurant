import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'menu', component: MenuComponent},
{path: 'sidebar', component: SidebarComponent},
{path: 'order', component: OrdersComponent},
{path: 'table', component: TableComponent},
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
