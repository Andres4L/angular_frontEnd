import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../model/usuarioModel';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { UsuarioService } from '../../service/usuario.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports:[
    CommonModule,
    NgFor,
    ReactiveFormsModule
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  ListUsuarios: UsuarioModel[] = [];
  formUsuario: FormGroup = new FormGroup({});
  isUpdate: boolean = false;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.list();

    this.formUsuario = new FormGroup({
      idusuario: new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      usuario: new FormControl(''),
      contraseña: new FormControl(''),
      id_perfil: new FormControl(''),

    });
  } 
  
  list(){
    this.usuarioService.getUsuarios().subscribe(data => {
      if(data != null){
        this.ListUsuarios = data;
      }
    })
  }
  newUsuario(){
    this.isUpdate = false;
    this.formUsuario.reset();
  }

  selectUsuario(item: any){
    this.isUpdate = true;
    this.formUsuario.controls['idusuario'].setValue(item.idusuario);
    this.formUsuario.controls['nombre'].setValue(item.nombre);
    this.formUsuario.controls['apellido'].setValue(item.apellido);
    this.formUsuario.controls['usuario'].setValue(item.usuario);
    this.formUsuario.controls['contraseña'].setValue(item.contraseña);
    this.formUsuario.controls['id_perfil'].setValue(item.id_perfil);

  }

  saveUsuario(){
   this.usuarioService.save(this.formUsuario.value).subscribe(data => {
     if(data != null){
       this.list();
       this.formUsuario.reset();
     }
   })
  }

  updateUsuario(){
    this.usuarioService.update(this.formUsuario.value).subscribe(data => {
      if(data != null){
        this.list();
        this.formUsuario.reset();
      }
    })
  }

}
