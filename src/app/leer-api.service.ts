import { Injectable } from '@angular/core';

// Importamos Axios
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LeerApiService {

  constructor() { }

  // Función para llamar al endpoint o URL de la API 
  llamarDatos() {
    
    return axios.get('http://localhost:8000/api/v1/postres')
    
  }

}

