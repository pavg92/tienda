export class Articulo {
    codigo:number;
    descrip: string;
    precio: number;
    imgURL: string;
    
    constructor(
        codigo:number,
        descrip: string,
        precio: number,
        imgURL: string
    ){
        this.codigo = codigo;
        this.descrip = descrip;
        this.precio = precio;
        this.imgURL = imgURL;
    }

    

}