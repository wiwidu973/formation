import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClientsModule } from './clients/clients.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { OrdersModule } from './orders/orders.module';
import { TemplatesModule } from './templates/templates.module';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { UIModule } from './ui/ui.module';
import { IconsModule } from './icons/icons.module';
import { TextModule } from './text/text.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,

    ClientsModule,
    CoreModule,
    LoginModule,
    OrdersModule,
    TemplatesModule,
    SharedModule,
    PageNotFoundModule,
    UIModule,

    IconsModule,
    TextModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
