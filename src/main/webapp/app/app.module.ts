import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PierwszyjhipsterSharedModule } from 'app/shared/shared.module';
import { PierwszyjhipsterCoreModule } from 'app/core/core.module';
import { PierwszyjhipsterAppRoutingModule } from './app-routing.module';
import { PierwszyjhipsterHomeModule } from './home/home.module';
import { PierwszyjhipsterEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PierwszyjhipsterSharedModule,
    PierwszyjhipsterCoreModule,
    PierwszyjhipsterHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PierwszyjhipsterEntityModule,
    PierwszyjhipsterAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class PierwszyjhipsterAppModule {}
