import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageTemplateComponent } from './components/page-template/page-template.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { StateDirective } from './directive/state.directive';
import { SharedRoutingModule } from './shared-routing.module';
import { TotalPipe } from './total.pipe';

@NgModule({
  declarations: [
    TableLightComponent,
    PageTemplateComponent,
    TotalPipe,
    StateDirective,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [TableLightComponent, TotalPipe, StateDirective],
})
export class SharedModule {}
