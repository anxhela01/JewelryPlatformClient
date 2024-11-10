import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SliderComponent } from './pages/home/slider/slider.component';
import {NgbCarouselModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { MostSoldComponent } from './pages/home/most-sold/most-sold.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./interceptor/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    SliderComponent,
    MostSoldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
