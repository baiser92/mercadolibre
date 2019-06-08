import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './shared/components/search/search.component';
import { HomeComponent } from './home/home/home.component';
import { ResultComponent } from './result/result/result.component';
import { ProductComponent } from './result/componet/product/product.component';
import { DetailsComponent } from './details/details/details.component';
import {ProductsService} from './service/products.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    ResultComponent,
    ProductComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
