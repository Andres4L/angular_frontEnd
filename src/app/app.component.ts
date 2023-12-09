import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AuthComponent } from './components/Auth/auth.component';
import { routes } from './app.routes';
import { ProductosComponent } from './components/productos/productos.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { ClientesComponent } from './components/clientes/clientes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    CommonModule, 
    UsuariosComponent,
    AuthComponent,
    ProductosComponent,
    FacturasComponent,
    ClientesComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  menuOption: string = '';
  onOption(menuOption: string){
    this.menuOption = menuOption;
  }
}

