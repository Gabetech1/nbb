import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form) {
    if(!(form.value.email && form.value.password)){
        alert('Enter user details')
    }else{
      const data ={
        email: form.value.email,
        password: form.value.password,
      }

      console.log (data)
      this.api.login(data).subscribe(res => {
        console.log(res)
        this.router.navigate(['/nul-admin/tracking_list'])
    //  this.api.showAlert('success','login successful')
      }, err => {
        console.log(err)
      })
    }

  
  }


   

}