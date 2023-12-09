import { Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AuthComponent } from './components/Auth/auth.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { ClientesComponent } from './components/clientes/clientes.component';



export const routes: Routes = [ 
    {
        path: 'usuarios',
        component: UsuariosComponent,
    },
    {
        path: 'auth',
        component: AuthComponent,
    },
    {
        path: 'productos',
        component: ProductosComponent,
    },
    {
        path: 'facturas',
        component: FacturasComponent,
    },
    {
        path: 'clientes',
        component: ClientesComponent,
    },
];
