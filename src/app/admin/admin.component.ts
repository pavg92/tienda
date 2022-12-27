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
  articulo = {
    codigo : 0,
    descrip : '',
    precio: 0,
    imgURL: ''
  };

  disCod = false;
  indexArt = -1;
  
  constructor(private artiService: ArticulosService){}

  ngOnInit():void {
    // this.arrArti = this.artiService.getAll();
    this.artiService.getAllPromise()
      .then(articulos =>{
        this.articulos =articulos;
      })
  }


  agregar() {
    if(this.validaciones(1)){
      this.artiService.addArti(new Articulo(this.articulo.codigo,this.articulo.descrip,this.articulo.precio,this.articulo.imgURL));
      this.reset();
      alert('Producto agregado');
    }
  }

  borrar(index: number) {
    this.articulos.splice(index, 1);
    alert('Producto eliminado');
  }

  seleccionar(art: Articulo, index: number) {
    this.articulo.codigo = art.codigo;
    this.articulo.descrip = art.descrip;
    this.articulo.precio = art.precio;
    this.articulo.imgURL = art.imgURL;
    this.disCod = true;
    this.indexArt = index;
  }

  modificar() {
    if(this.validaciones(2)) {
      this.articulos[this.indexArt].descrip = this.articulo.descrip;
      this.articulos[this.indexArt].precio = this.articulo.precio;
      this.reset();
      alert('Producto modificado');
    }
  }

  reset() {
    this.articulo.codigo = 0;
    this.articulo.descrip = '';
    this.articulo.precio = 0;
    this.articulo.imgURL = '';
    this.disCod =false;
    this.indexArt = -1;
  }

  validaciones(op: number) {
    if(!Object.values(this.articulo).every(data => data !== '')){
      alert('Favor de completar los campos');
      return false;
    }
    if(op == 1){//si la op es igual a 1 significa que es un nuevo producto
      if(this.articulo.codigo == 0){
        alert('Debe ingresar un código de articulo distinto a cero');
        return false;
      }
      if(this.articulos.find(art => art.codigo == this.articulo.codigo)){
        alert('Ya existe un articulo con dicho codigo');
        return false;
      }
    }

    return true;
  }
}
