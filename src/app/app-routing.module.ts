import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FeaturesComponent } from "./features/features.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: "full"},
    {path: 'home', component: HomeComponent, data: {animation: 'HomePage'}},
    {path: 'features', component: FeaturesComponent, data: {animation: 'FeaturesPage'}},
    {path: 'about', component: AboutComponent, data: {animation: 'AboutPage'}},
    {path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'}}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
