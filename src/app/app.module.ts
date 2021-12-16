import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartModule } from './cart/cart.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './feature/components/first/first.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
