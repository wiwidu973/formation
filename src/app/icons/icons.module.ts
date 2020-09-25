import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconMenuComponent } from './components/icon-menu/icon-menu.component';
import { IconUpdateComponent } from './components/icon-update/icon-update.component';
import { IconsRoutingModule } from './icons-routing.module';

@NgModule({
  declarations: [IconMenuComponent, IconDeleteComponent, IconUpdateComponent],
  imports: [CommonModule, IconsRoutingModule, FontAwesomeModule],
  exports: [IconMenuComponent, IconUpdateComponent, IconDeleteComponent],
})
export class IconsModule {}
