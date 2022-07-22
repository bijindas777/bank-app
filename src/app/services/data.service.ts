import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // currentUser:any
  // currentAcno:any
  // db :any= {
  //   1000:{"acno":1000,"username":"sreekanth","password":1000,"balance":5000,transaction:[]},
  //   1001:{"acno":1001,"username":"aswin","password":1000,"balance":3000,transaction:[]},
  //   1002:{"acno":1002,"username":"ajesh","password":1000,"balance":2000,transaction:[]},

  // }

  constructor(private http:HttpClient) {
  //  this.getDetails()
   }

  //get details from local storge
  // getDetails(){
  //   if(localStorage.getItem("database")){
  //     this.db=JSON.parse(localStorage.getItem("database")|| '')
  //   }
  //   if(localStorage.getItem("currentuser")){
  //     this.currentUser=JSON.parse(localStorage.getItem("currentuser")|| '')

  //   }
  //   if(localStorage.getItem("currentAcno")){
  //     this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")|| '')
  //   }

  // }

//save details()
// saveDetails(){
//   if (this.db){
//     localStorage.setItem("database",JSON.stringify(this.db))

//   }if(this.currentUser){
//   localStorage.setItem("currentuser",JSON.stringify(this.currentUser))
//   }
// if(this.currentAcno){
//   localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
//   }
// }
  


  login(acno:any,pswd:any){
      const data = {
        acno,
        pswd
      }
  
    // let db = this.db
  
    // if(acno in db ){
    //   if(pswd == db[acno]["password"]){
    //     this.currentUser=db[acno]["username"]
    //     this.currentAcno=acno
    //     this.saveDetails()
    //     return true
    //   }
    //   else{
    //     alert("incorrect password")
    //     return false
    //   }
    // }
    // else{
    //   alert("user does not exist")
    //   return false
    // }

    //asynchronus
    return this.http.post('http://localhost:3000/login',data)
}

//register
register(username:any,acno:any,password:any){
  const data={
    username,
    acno,
    password
  }
  //asynchronus
  return this.http.post('http://localhost:3000/register',data)
}
deposit(acno:any,password:any,amt:any){
  // var amount = parseInt(amt)
  // let db = this.db
  // if(acno in db){
  //   if(password==db[acno]["password"]){
  //     db[acno]["balance"]+=amount
  //     db[acno].transaction.push({
  //       type:"CREDIT",
  //       amount:amount
  //     })
  //     this.saveDetails()
  //     return db[acno]["balance"]
  //   }
  //   else{
  //     alert("incorrect password")
  //     return false

  //   }
    
  // }
  // else{
  //   alert("user doesnot exist")
  //   return false
  // }
  const data={
    acno,password,amt
  }
  return this.http.post('http://localhost:3000/deposit',data,this.getOptions())
}
getOptions(){
const token = localStorage.getItem('token')
let headers=new HttpHeaders()
if(token){
  headers=headers.append('x-token',token)
  options.headers=headers
}
return options
}

//withdraw

withdraw(acno:any,password:any,amt:any){

  const data={
    acno,
    password,
    amt
  }
  return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())

//   var amount = parseInt(amt)
//   let db = this.db
//   if(acno in db){
//     if(password==db[acno]["password"]){
//       if( db[acno]["balance"]>amount){

//       db[acno]["balance"]-=amount
//       db[acno].transaction.push({
//         type:"DEBIT",
//         amount:amount
//       })
//       this.saveDetails()
//       return db[acno]["balance"]
//     }
//     else{
//       alert("insufficant balance")
//       return false

//     }
    
//   }
//   else{
//     alert("incorrect password")
//     return false
//   }
// }
// else{
//   alert("user doesnot exist")
//   return false
// }
}
getTransaction(acno:any){
  const data ={
    acno
  }
  return this.http.post('http://localhost:3000/transaction',data,this.getOptions())

}
deleteAcc(acno:any){
return this.http.delete('http://localhost:3000/deleteAcc/'+acno,this.getOptions())
}
}
