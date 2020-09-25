import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateAComponent } from './compenent/template-a/template-a.component';
import { TemplateBComponent } from './compenent/template-b/template-b.component';
import { TemplatesRoutingModule } from './templates-routing.module';

@NgModule({
  declarations: [TemplateAComponent, TemplateBComponent],
  imports: [CommonModule, TemplatesRoutingModule],
  exports: [TemplateAComponent, TemplateBComponent],
})
export class TemplatesModule {}
