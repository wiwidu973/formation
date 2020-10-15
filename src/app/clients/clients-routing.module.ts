import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';

const routes: Routes = [
  {
    path: '', component: PageListClientComponent
  },
  { path: 'add', component: PageAddClientComponent },
  { path: 'edit/:id', component: PageEditClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
