import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VendorContactListComponent } from './vendor-contact-list/vendor-contact-list.component';
import { UpdateVendorcontactComponent } from './update-vendorcontact/update-vendorcontact.component';
import { CreateVendorcontactsComponent } from './create-vendorcontacts/create-vendorcontacts.component';

const routes: Routes = [
 
    // {path:'',pathMatch:'full',redirectTo:'loginuser'},                        
     {path:'loginuser',component: LoginComponent,canActivate:[AuthGuard]},
     {path:'home',component:HomeComponent,
     children:[
       {path:'vendorcontact',component:VendorContactListComponent},
       {path:'vendorcontact/createvendor',component:CreateVendorcontactsComponent},
       {path:'updatevendorcontact/:vId',component:UpdateVendorcontactComponent},
     ],canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
