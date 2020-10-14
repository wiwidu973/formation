import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { PageTemplateComponent } from './components/page-template/page-template.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { StateDirective } from './directive/state.directive';
import { SharedRoutingModule } from './shared-routing.module';
import { TotalPipe } from './total.pipe';
import { InvalidTypeDirective } from './directive/invalid-type.directive';
import { InvalidMessageDirective } from './directive/invalid-message.directive';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    TableLightComponent,
    PageTemplateComponent,
    TotalPipe,
    StateDirective,
    BtnComponent,
    TableDarkComponent,
    InvalidTypeDirective,
    InvalidMessageDirective,
    ModalComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, RouterModule],
  exports: [
    TableLightComponent,
    TotalPipe,
    StateDirective,
    BtnComponent,
    TableDarkComponent,
    InvalidMessageDirective,
    InvalidTypeDirective,
    ModalComponent
  ],
})
export class SharedModule {}
