import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastrModule,ToastrService} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VendorContactListComponent } from './vendor-contact-list/vendor-contact-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import{ConfirmationPopoverModule}from 'angular-confirmation-popover';
import { CreateVendorcontactsComponent } from './create-vendorcontacts/create-vendorcontacts.component';
import { UpdateVendorcontactComponent } from './update-vendorcontact/update-vendorcontact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    VendorContactListComponent,
    CreateVendorcontactsComponent,
    UpdateVendorcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'}),
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'danger'
  })
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
