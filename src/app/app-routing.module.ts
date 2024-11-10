import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {ProductsComponent} from "./pages/products/products.component";
import {ProductDetailsComponent} from "./pages/product-details/product-details.component";
import {ProductCardComponent} from "./shared/product-card/product-card.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'product-details',component:ProductDetailsComponent  },
  { path: 'product-card', component: ProductCardComponent},
  // {path: 'lecturer/:id', component: LecturerComponent},
  // {path: 'lecturers', component: LecturersComponent},
   {path: 'profile', component: ProfileComponent},
  // {path: 'course/:id', component: CourseComponent},
  // {path: 'courses-schedule', component: CalendarComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
