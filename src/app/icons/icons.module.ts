import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { IconMenuComponent as IconMenuComponent } from './components/icon-menu/icon-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [IconMenuComponent],
  imports: [
    CommonModule,
    IconsRoutingModule,
    FontAwesomeModule
  ],
  exports:[
    IconMenuComponent
  ]
})
export class IconsModule { }
