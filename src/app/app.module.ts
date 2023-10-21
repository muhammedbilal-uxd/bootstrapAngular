import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapTableComponent } from './component';
import { VendorListPageComponent } from './pages';
import { SharedModule } from './shared/component/share.module';

const PAGES = [VendorListPageComponent];
const COMPONENTS = [BootstrapTableComponent];

@NgModule({
  declarations: [AppComponent, ...PAGES, ...COMPONENTS],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
