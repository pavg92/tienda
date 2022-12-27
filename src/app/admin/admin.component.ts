import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';
import { Articulo } from '../models/articulo.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  articulos: Articulo[] = [];
  constructor(private artiService: ArticulosService){}

  ngOnInit():void {
    // this.arrArti = this.artiService.getAll();
    this.artiService.getAllPromise()
      .then(articulos =>{
        this.articulos =articulos;
      })
  }

  agregar() {

  }

  modificar() {
    
  }

  borrar(index:number) {

  }

  seleccionar(articulo:Articulo, index:number) {

  }
}
