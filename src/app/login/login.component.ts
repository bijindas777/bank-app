import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
aim="Perfect Banking Partner"
accno="Account Number please"
acno =""
pswd =""
//form group
loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],

})

 

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


login(){
  var acno = this.loginForm.value.acno
  var pswd = this.loginForm.value.pswd
  
if(this.loginForm.valid){
  //asynchronus
  this.ds.login(acno,pswd)
  .subscribe((result:any)=>{
if(result){
  localStorage.setItem('currentUser',result.currentUser)
  localStorage.setItem('currentAcno',result.currentAcno)
  localStorage.setItem('token',result.token)

  alert(result.message)
  this.router.navigateByUrl('dashboard')


}

  },result=>{
    alert(result.error.message)
  })


}

//   if(result ){
//       alert("login successfully")
//       this.router.navigateByUrl('dashboard')
//     }
   
//   }
  
}

  // login(a:any,p:any){
  //   console.log(a.value);
    
  //   var acno = a.value
  //   var pswd = p.value
  
  //   let db = this.db
  
  //   if(acno in db ){
  //     if(pswd ==db[acno]["password"]){
  //       alert("login successfully")
  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //   }
  //   else{
  //     alert("user does not exist")
  //   }
  }

