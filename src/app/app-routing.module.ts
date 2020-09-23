import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';

const routes: Routes = [
{ path: "login", component: PageLoginComponent},
{ path: "clients", loadChildren:()=> import('./clients/clients.module').then (module=>module.ClientsModule) },
{ path: "orders", loadChildren:()=> import('./orders/orders.module').then (module=>module.OrdersModule) },


{ path: "", redirectTo: "/login", pathMatch: "full"},
{
  path: "**", loadChildren:()=> import('./page-not-found/page-not-found.module').then (module=>module.PageNotFoundModule) },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
