import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { ComponentsComponent } from './components/form-client.component';

@NgModule({
  declarations: [PageListClientComponent, PageEditClientComponent, PageAddClientComponent, ComponentsComponent],
  imports: [CommonModule, ClientsRoutingModule, SharedModule, TemplatesModule,
    ReactiveFormsModule,
    IconsModule],
})
export class ClientsModule {}
