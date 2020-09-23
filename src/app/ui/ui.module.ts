import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { UiComponent } from './components/ui/ui.component';
import { UIRoutingModule } from './ui-routing.module';




@NgModule({
  declarations: [UiComponent],
  imports: [
    CommonModule,
    UIRoutingModule,
    IconsModule,



  ],
  exports: [
    UiComponent,

  ],
})
export class UIModule { }
