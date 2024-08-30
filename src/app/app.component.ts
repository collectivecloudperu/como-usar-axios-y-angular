import { Component } from '@angular/core';

// Importamos nuestro servicio
import { LeerApiService } from './leer-api.service';

@Component({
  selector: 'app-root',
  template: `
  <!-- Presionamos un botón para obtener los datos de la API -->
    <button (click)="leerDatos()">Obtener Datos</button>
    <p>{{ nombre }}</p>
    <p>{{ precio }}</p>
    <p>{{ stock }}</p>
  `
})
export class AppComponent {

  // Función para pedir los datos llamando a nuestro servicio
  leerDatos() {
    this.leerApiService.llamarDatos()
    .then(response => {

      // Recibimos los datos
      this.datos = response.data;

      // Mostramos los datos obtenidos en la consola 
      console.log(this.datos);

      // Accedemos al 'nombre' del primer producto
      this.nombre = response.data[0].nombre;

      // Accedemos al 'precio' del primer producto
      this.precio = response.data[0].precio;

      // Accedemos al 'stock' del primer producto
      this.stock = response.data[0].stock;

    })
    .catch(function (error) {
  
      // Si hubo algun error mostramos algo 
      console.log(error);
  
    })
    .finally(function () {
  
      // Se ejecuto sin problemas 
      
    });
    
  }

  // Variables 
  title = 'miapp';
  datos: any;
  nombre: any;
  precio: any;
  stock: any;

  constructor(private leerApiService: LeerApiService) {}

}

