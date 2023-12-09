import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service'; 
//import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    ReactiveFormsModule,
   
    //Router
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  formAuth:FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder, private authService: AuthService, ){
    this. formAuth= this.formBuilder.group({
      usuario:['',[Validators.required,Validators.minLength(1)]],
      contraseña:['',[Validators.required,Validators.minLength(6), Validators.maxLength(16)]],
    })
  }

  Log(){
    this.authService.login(this. formAuth.value.email).subscribe(res=>{
      console.log(res);
      if(res){
        if(res.usuario=='Admin'){
          if(res.contraseña==this. formAuth.value.contraseña){
            alert("Bienvenido Admin");
            //this.router.navigateByUrl('admin');
          }
        }else{
          if(res.contraseña==this. formAuth.value.contraseña){
            alert("Bienvenido Cajero");
            //this.router.navigateByUrl('cajero');
          }
        }
      }else{
        //this.router.navigateByUrl('admin');
        alert("Error de crerdenciales");
      }
    });
  }



}