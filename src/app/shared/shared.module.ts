import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableLightComponent } from './components/table-light/table-light.component';
import { SharedRoutingModule } from './shared-routing.module';
import { PageTemplateComponent } from './components/page-template/page-template.component';

@NgModule({
  declarations: [TableLightComponent, PageTemplateComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [TableLightComponent],
})
export class SharedModule {}
