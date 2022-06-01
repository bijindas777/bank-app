import { Component, OnInit } from '@angular/core';
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

 

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }


login(){
  var acno = this.acno
  var pswd = this.pswd

   const result= this.ds.login(acno,pswd)

  if(result ){
      alert("login successfully")
      this.router.navigateByUrl('dashboard')
    }
   
  }
  
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
  // }

