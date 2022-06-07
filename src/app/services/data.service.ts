import { Injectable } from '@angular/core';
// /import { ArgumentOutOfRangeError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  db :any= {
    1000:{"acno":1000,"username":"sreekanth","password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001,"username":"aswin","password":1000,"balance":3000,transaction:[]},
    1002:{"acno":1002,"username":"ajesh","password":1000,"balance":2000,transaction:[]},

  }

  constructor() {
   this.getDetails()
   }

  //get details from local storge
  getDetails(){
    if(localStorage.getItem("database")){
      this.db=JSON.parse(localStorage.getItem("database")|| '')
    }
    if(localStorage.getItem("currentuser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentuser")|| '')
    }
  }

//save details()
saveDetails(){
  if (this.db){
    localStorage.setItem("database",JSON.stringify(this.db))

  }if(this.currentUser){
  localStorage.setItem("currentuser",JSON.stringify(this.currentUser))
  }
}
  


  login(acno:any,pswd:any){
    
  
    let db = this.db
  
    if(acno in db ){
      if(pswd == db[acno]["password"]){
        this.currentUser=db[acno]["username"]
        this.saveDetails()
        return true
      }
      else{
        alert("incorrect password")
        return false
      }
    }
    else{
      alert("user does not exist")
      return false
    }
}

//register
register(username:any,acno:any,password:any){
  let db = this.db
  if(acno in db){
    return false
  }
  else{
    // insert in db
    db[acno]={
      acno,
      username
      ,password,
      "balance":0,
      transaction:[]
    }
    this.saveDetails()
    return true
  }
}
deposit(acno:any,password:any,amt:any){
  var amount = parseInt(amt)
  let db = this.db
  if(acno in db){
    if(password==db[acno]["password"]){
      db[acno]["balance"]+=amount
      db[acno].transaction.push({
        type:"CREDIT",
        amount:amount
      })
      this.saveDetails()
      return db[acno]["balance"]
    }
    else{
      alert("incorrect password")
      return false

    }
    
  }
  else{
    alert("user doesnot exist")
    return false
  }
}
withdraw(acno:any,password:any,amt:any){
  var amount = parseInt(amt)
  let db = this.db
  if(acno in db){
    if(password==db[acno]["password"]){
      if( db[acno]["balance"]>amount){

      db[acno]["balance"]-=amount
      db[acno].transaction.push({
        type:"DEBIT",
        amount:amount
      })
      this.saveDetails()
      return db[acno]["balance"]
    }
    else{
      alert("insufficant balance")
      return false

    }
    
  }
  else{
    alert("incorrect password")
    return false
  }
}
else{
  alert("user doesnot exist")
  return false
}
}
}
