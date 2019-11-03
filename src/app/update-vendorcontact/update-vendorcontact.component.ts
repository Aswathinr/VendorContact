import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendorContact } from '../vendor-contact';
import { VendorContactServiceService } from '../vendor-contact-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-vendorcontact',
  templateUrl: './update-vendorcontact.component.html',
  styleUrls: ['./update-vendorcontact.component.css']
})
export class UpdateVendorcontactComponent implements OnInit {

  vId: number;
  vendorcontact: VendorContact;
  editVendorForm: FormGroup;

  constructor(private fb: FormBuilder,private vendorService: VendorContactServiceService,private toastr:ToastrService,
    private router: Router,private route: ActivatedRoute) { }

    vendors: Observable<VendorContact[]>;
    ngOnInit() {
      this.vendorcontact = new VendorContact();
      this.createForm();
      this.vId = this.route.snapshot.params['vId'];
      console.log("vendorid: "+this.route.snapshot.params['vId']);
  
      this.vendorService.getVendorById(this.vId)
      .subscribe(data => {
        console.log(this.vId)
        console.log(data)
        this.vendorcontact = data;
       }, error => console.log(error))
        
        
        //  this.vName =this.vendorcontact.vdAType;
        //  console.log(this.vdAtype);
   
      
    }
  
    // createForm()
    // {
    //  // this.editVendorForm=this.fb.group()
    //   this.vendorcontact.vName=null;
    //   this.vendorcontact.vAddress=null;
    //   this.vendorcontact.vLocation=null;
    //   this.vendorcontact.pincode=null;
    //   this.vendorcontact.email=null;
    //   this.vendorcontact.department=null;
    //   this.vendorcontact.phone=null;
    //   this.vendorcontact.cName=null;
    //   this.vendorcontact.vService=null;
  
    // }
    createForm() {
      this.editVendorForm = this.fb.group({
        vName: ['', Validators.required],
        vAddress: ['', Validators.required],
        vLocation: ['', Validators.required],
        pincode: ['', Validators.required],
        email: ['', Validators.required,Validators.email],
        department: ['', Validators.required],
       phone: ['', Validators.required],
        cName: ['', Validators.required],
        vService: ['', Validators.required]
      });
    }

    onSubmit() {
      this.updateVendor();
    }

    // updateVendor(){
    //   console.log(this.vId);
    //   this.vendorService.updateVendor(this.vId, this.vendorcontact)
    //   .subscribe(data =>  console.log(data), error => console.log(error));
    //   this.vendorcontact = new VendorContact();
    //   this.gotoList();
    // }
  

    updateVendor()
    {
      {
      
        console.log("update"+this.vId+this.vendorcontact);
        this.vendorService.updateVendor(this.vId,this.vendorcontact)
        .subscribe(data=>console.log(data),error=>console.log(error));
        this.vendorcontact=new VendorContact();
        this.toastr.success(' successfully updated!','toastrupdate');
        this.gotoList();
      }
    }
  
  
    gotoList(){
      this.vendors = this.vendorService.getVendors();
     // this.vendorService.getVendors();
      this.router.navigate(['/home/vendorcontact']);
    }
    // add():void{
    //   console.log(this.vendorcontact);
    //   this.vendorService.updateVendor(this.vId,this.vendorcontact).subscribe((response)=>
    //   {
    //     console.log(response);
    //     this.reset();
    //     this.getVendors();
    //   },(error)=>{
    //     console.log(error);
    //   }
    //   );
   
  

}
