import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';
import { Articulo } from '../models/articulo.model';

@Component({
  selector: 'app-list-arti',
  templateUrl: './list-arti.component.html',
  styleUrls: ['./list-arti.component.css']
})
export class ListArtiComponent implements OnInit {

  arrArti: Articulo[] = [];
  constructor(private artiService: ArticulosService){}

  ngOnInit():void {
    // this.arrArti = this.artiService.getAll();
    this.artiService.getAllPromise()
      .then(articulos =>{
        this.arrArti =articulos;
      })
  }
}
