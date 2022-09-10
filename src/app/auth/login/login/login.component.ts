import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../../../services/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  hide = true;
  form!: FormGroup;
  user!:any;
  constructor(private fb:FormBuilder, private loginService:LoginService) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      email:['',[Validators.required,Validators.minLength(10)]],
      password:['',[Validators.required,Validators.minLength(8)]],
    })
  }
  get controleSaisie(){
    return this.form.controls;
  }

  submit() {
    const formData=this.form.getRawValue();
    const data={
      email:formData.email,
      password:formData.password
    }
    this.loginService.generateToken(data).subscribe({
      next:(data)=>{
        this.user=data;
        console.log("result: ",this.user[0]);
        this.loginService.loginUser(this.user[0]);
        this.loginService.setUser(this.user[1]);
        if (this.user[1].profil_id==1){
          window.location.href="/admin";
        }else if(this.user[1].profil_id==3){
          window.location.href="userDashboard";
        }else {
          this.loginService.logout();
        }

      },error:(error)=>{
        console.log("error: ",error);
      }
    })
      /*if (result!=null){
        console.log('success');
        console.log(result->);
      }else {
        console.log('user not found')
      }
    },error => {
      console.log("error: ",error);
    })*/
  }
}
