import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: Login;

  constructor(private authservice:AuthService,private router:Router,private formbuilder:FormBuilder) { }

  loginForm: FormGroup;
    isSubmitted = false;
  
    ngOnInit() {
      
      this.loginForm=this.formbuilder.group({
        username:['',Validators.required],
        password:['',Validators.required]
      });
  }
  //get formControls() { return this.loginForm.controls; }

  login()
  {
    console.log(this.loginForm.value);
    this.isSubmitted=true;
    if(this.loginForm.invalid){
      return;
    
    // this.authservice.login(this.loginForm.value)
    // this.router.navigateByUrl('/admin')
    }  
    else  if(this.loginForm.valid){
      this.authservice.login(this.loginForm.value).subscribe(
        data => {
          this.loginUser = data;
          console.log(data);
          console.log(data.rollId);
          if(data.rollId!=null && data.rollId==100){
            this.isSubmitted=true;
            console.log('admin');
            this.router.navigateByUrl('/home');
  
          }
          else{
            console.log('LoginUser');
            window.alert("invalid username or password");
        }
      }
    )
  
    }
  }

}
