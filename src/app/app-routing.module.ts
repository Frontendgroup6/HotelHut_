import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CovidComponent } from './covid/covid.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PlacesComponent } from './places/places.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TandcComponent } from './tandc/tandc.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'blog',component:BlogComponent},
  {path:'places',component:PlacesComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'pp',component:PrivacypolicyComponent},
  {path:'cd',component:CovidComponent},
  {path:'tc',component:TandcComponent},

  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}    //always put it at last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
