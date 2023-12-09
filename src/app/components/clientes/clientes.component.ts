import { Component, OnInit } from '@angular/core';
import { ClientesModel } from '../../model/clientesModel';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { ClientesService } from '../../service/clientes.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [  
    CommonModule,
    NgFor,
    ReactiveFormsModule
  ],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
ListClientes: ClientesModel[] = [];
formClientes: FormGroup = new FormGroup({});
  isUpdate: boolean = false;
  constructor(private clientesService: ClientesService) { }
  ngOnInit(): void {
    this.list();
    this.formClientes = new FormGroup({
      cliente: new FormControl(''),
      tipo_identificacion: new FormControl(''),
      identificacion: new FormControl(''),
      razon_social: new FormControl(''),
      fecha_registro: new FormControl(''),
      estado: new FormControl(''),
    });
  }
  list() {
    this.clientesService.getClientes().subscribe(data => {
      if (data != null) {
        this.ListClientes = data;
      }
    })
  }
  newClientes() {
    this.isUpdate = false;
    this.formClientes.reset();
  }
  selectClientes(item: any) {
    this.isUpdate = true;
    this.formClientes.controls['cliente'].setValue(item.cliente);
    this.formClientes.controls['tipo_identificacion'].setValue(item.tipo_identificacion);
    this.formClientes.controls['identificacion'].setValue(item.identificacion);
    this.formClientes.controls['razon_social'].setValue(item.razon_social);
    this.formClientes.controls['fecha_registro'].setValue(item.fecha_registro);
    this.formClientes.controls['estado'].setValue(item.estado);
  }
  saveClientes() {
    this.clientesService.save(this.formClientes.value).subscribe(data => {
      if (data != null) {
        this.list();
      }
    })
  }
  updateClientes() {
    this.clientesService.update(this.formClientes.value).subscribe(data => {
      if (data != null) {
        this.list();
      }
    })
  }
  
}
