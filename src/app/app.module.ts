import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductsComponent} from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import {ProductDialogComponent} from './products/product-dialog/product-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavBarComponent,
    ProductDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [
    ProductDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
