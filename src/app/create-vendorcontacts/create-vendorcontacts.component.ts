import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { VendorContactServiceService } from '../vendor-contact-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { VendorContact } from '../vendor-contact';

@Component({
  selector: 'app-create-vendorcontacts',
  templateUrl: './create-vendorcontacts.component.html',
  styleUrls: ['./create-vendorcontacts.component.css']
})
export class CreateVendorcontactsComponent implements OnInit {
  // vendorcontact: VendorContact = new VendorContact();
  submitted = false;
  addvendorForm: FormGroup;
  vendorcontact=new VendorContact();
  vendorcontacts:VendorContact[];
  vId:number;

  

  constructor(private fb: FormBuilder,private vendorService: VendorContactServiceService,private toastr:ToastrService,
    private router: Router) { }
    ngOnInit() {
      this.getVendorById();
    }
  
    private reset()
    {
      this.vendorcontact.vName=null;
      this.vendorcontact.vAddress=null;
      this.vendorcontact.vLocation=null;
      this.vendorcontact.pincode=null;
      this.vendorcontact.email=null;
      this.vendorcontact.department=null;
      this.vendorcontact.phone=null;
      this.vendorcontact.cName=null;
      this.vendorcontact.vService=null;
  
    }
  
    add():void{
      console.log(this.vendorcontact);
      this.vendorService.insertDetails(this.vendorcontact).subscribe((response)=>
      {
        console.log(response);
        this.reset();
        this.getVendors();
      },(error)=>{
        console.log(error);
      }
      );
    }
    getVendorById(): void{
    this.vendorService.getVendorById(this.vId).subscribe((Data)=>
    {
      this.vendorcontact=Data,
      console.log(Data);
    },(error)=>{
      console.log(error);
    }
    );
  }
  
  //method for getting vendor+ its contact details
  getVendors(): void{
    this.vendorService.getVendors().subscribe((Data)=>
    {
      this.vendorcontacts=Data,
      console.log(Data);
    },(error)=>{
      console.log(error);
    }
    );
  }
  

 
}
