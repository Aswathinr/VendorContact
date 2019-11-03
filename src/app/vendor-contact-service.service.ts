import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VendorContact } from './vendor-contact';

@Injectable({
  providedIn: 'root'
})
export class VendorContactServiceService {
  baseUrl='http://localhost:8383/RestVendor/api';

 vId:number;

  constructor(private http:HttpClient) { }
 getVendors(): Observable<VendorContact[]>{
    console.log('vendor1');
    return this.http.get<VendorContact[]>(this.baseUrl+'/vendordetails/null');
  }

  deleteVendor(vId: number,  vendorcontact: VendorContact): Observable<any> {
    return this.http.put(this.baseUrl+'/disablevendor/'+vId, vendorcontact);
  }

  insertDetails(vendorcontact: VendorContact): Observable<Object> {
    
    console.log(vendorcontact);
    return this.http.post(this.baseUrl+'/insertvendordetails', vendorcontact);
   }

 
  //  getVendorById(vId: number): Observable<any> {
    
  //   return this.http.get(this.baseUrl+'/vendorbyid/'+vId);
  // }

  getVendorById(vId:number): Observable<VendorContact>{
  console.log("va");
   console.log(vId);
    return this.http.get<VendorContact>(this.baseUrl+'/vendorbyid/'+vId);
  }

  updateVendor(vId: number, vendorcontact: VendorContact): Observable<any> {
   
    console.log(vId);
    return this.http.put(this.baseUrl+'/updatevendor/'+vId, vendorcontact);
  
  }

  search(searchString:String):Observable<VendorContact[]>
{
  return this.http.get<VendorContact[]>(this.baseUrl+'/vendordetails/'+searchString);
}


}
