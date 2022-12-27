import { Injectable } from '@angular/core';
import { Articulos } from './db/articulos.db';
import { Articulo } from './models/articulo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }

  getAll(): Articulo[] {
    return Articulos;
  }

  getAllPromise(): Promise<Articulo[]> {
    return new Promise((resolve, reject) => {
      resolve(Articulos);
    });
  }

  addArti(articulo: Articulo) {
    Articulos.push(articulo);
  }
}
