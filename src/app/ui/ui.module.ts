import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIRoutingModule } from './ui-routing.module';
import { UiComponent } from './components/ui/ui.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [UiComponent],
  imports: [
    CommonModule,
    UIRoutingModule,
    IconsModule
  ],
  exports: [
    UiComponent,

  ],
})
export class UIModule { }
