export class Product {
    public idProd: number;
    public idCat: number;
    public title: string;
    public description: string;
    public stock: number;
    public urlImage: string;
    public price: number;
    public quantity:number;

    constructor() {
        this.idProd = 0;
        this.idCat = 0;
        this.title = "";
        this.description = "";
        this.stock = 0;
        this.urlImage = "";
        this.price= 0; 
        this.quantity = 0;
    }
}