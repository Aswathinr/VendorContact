import { Component, OnInit } from '@angular/core';
import { VendorContact } from '../vendor-contact';
import { VendorContactServiceService } from '../vendor-contact-service.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vendor-contact-list',
  templateUrl: './vendor-contact-list.component.html',
  styleUrls: ['./vendor-contact-list.component.css']
})
export class VendorContactListComponent implements OnInit {
  popoverMessage="Do you want to disable?"
 
  vendorContactDetail=new VendorContact();
    vendorcontacts: Observable<VendorContact[]>;
  vendorcontactss:VendorContact[];

  constructor(private vendorcontactService: VendorContactServiceService, private authservice: AuthService,
    private router: Router,private toastr: ToastrService) { }

    ngOnInit() {

      this.reloadData();
    
    }
  
    reloadData(){
      console.log("reloadata");
      this.vendorcontacts = this.vendorcontactService.getVendors();
      console.log(this.vendorcontacts);
    }
    // reloadData(): void{
    //   this.vendorcontactService.getVendors().subscribe((Data)=>
    //   {
    //     this.vendorcontacts=Data,
    //     console.log(Data);
    //   },(error)=>{
    //     console.log(error);
    //   }
    //   );
    // }
    deleteVendor(vId: number,vendorcontact:VendorContact){

      this.vendorcontactService.deleteVendor(vId,vendorcontact)
      .subscribe(
        data => {
            console.log(data);
            this.reloadData();
        },
        error => console.log(error));
        this.toastr.success(' Vendor successfully deleted','Vendor delete status');
}

updateVendor(vId: number){
  console.log(vId);
  this.router.navigate(['/home/updatevendorcontact',vId]);
}

getVendors(){
  console.log()
}

getVendorDetails(): void{
  this.vendorcontactService.getVendors().subscribe((Data)=>
  {
    this.vendorcontactss=Data,
    console.log(Data);
  },(error)=>{
    console.log(error);
  }
  );
}

searchString:String;
 

  search(searchString){
    console.log(searchString);
    if(searchString!=null){
      this.vendorcontacts=this.vendorcontactService.search(this.searchString);
   
  
  }else{
    console.log("Else :" +searchString);
    this.reloadData();
  }
}




}
