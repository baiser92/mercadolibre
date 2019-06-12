import { TestBed, async } from '@angular/core/testing';
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
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BreadcrumbComponent,
        DetailsComponent,
        ResultComponent,
        ProductComponent,
        SearchComponent,
        HomeComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,

      ],
      providers: [
        ProductsService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
 /* it(`should have as title 'mercadolibre'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mercadolibre');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to mercadolibre!');
  })); */
});
