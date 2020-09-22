import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListClientComponent } from './clients/pages/page-list-client/page-list-client.component';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';

const routes: Routes = [
{ path: "login", component: PageLoginComponent},
{ path: "clients", component: PageListClientComponent},

{ path: "", redirectTo: "/login", pathMatch: "full"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
