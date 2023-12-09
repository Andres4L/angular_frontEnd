
import { Component, OnInit } from '@angular/core';
import { ProductosModel } from '../../model/productosModel';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { ProductosService } from '../../service/productos.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    ReactiveFormsModule
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
 ListProductos: ProductosModel[] = [];
 formProductos: FormGroup = new FormGroup({});
  isUpdate: boolean = false;
  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.list();

    this.formProductos = new FormGroup({
      id_producto: new FormControl(''),
      nombre: new FormControl(''),
      estado: new FormControl(''),
      valor_unitario: new FormControl(''),
    });
  }
  list() {
    this.productosService.getProductos().subscribe(data => {
      if (data != null) {
        this.ListProductos = data;
      }
    })
  }
  newProductos() {
    this.isUpdate = false;
    this.formProductos.reset();
  }

  selectProductos(item: any) {
    this.isUpdate = true;
    this.formProductos.controls['id_producto'].setValue(item.id_producto);
    this.formProductos.controls['nombre'].setValue(item.nombre);
    this.formProductos.controls['estado'].setValue(item.estado);
    this.formProductos.controls['valor_unitario'].setValue(item.valor_unitario);
  }

  saveProductos() {
    this.productosService.save(this.formProductos.value).subscribe(data => {
      if (data != null) {
        this.list();
        this.formProductos.reset();
      }
    })
 }
  updateProductos() {
    this.productosService.update(this.formProductos.value).subscribe(data => {
      if (data != null) {
        this.list();
        this.formProductos.reset();
      }
    })
  }
}
