import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	url = 'https://gabe205.tk/nulbulk';
//url = 'http://localhost/nulbulk/nulbulk_backend';

constructor(private http: HttpClient) {}

register(data){
  return  this.http.post(this.url+'/siginUpUser.php',data)  
}
login(data){
  return  this.http.post(this.url+'/loginUser.php',data)  
}


track(data){
  console.log(data)
  return  this.http.post(this.url+'/postTrackingData.php',data)  
}

getrack(){
  return this.http.get(this.url+'/getTrackingData.php')
} 

getrackByNum(num){
  return  this.http.post(this.url+'/getrackByNum.php',num)  
} 

showAlert(type, msg){
//  const type = ['','info','success','warning','danger'];

  var color = Math.floor((Math.random() * 4) + 1);
  $.notify({
      icon: "pe-7s-like2",
      message: msg
  },{
      type: type,
      timer: 5000,
      placement: {
          from: 'top',
          align: 'right'
      }
  });
}
}
