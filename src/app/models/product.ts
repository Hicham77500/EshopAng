export class Product {
    public idProd: number;
    public idCat: number;
    public title: string;
    public description: string;
    public quantity: number;
    public urlImage: string;
    public price: number;

    constructor() {
        this.idProd = 0;
        this.idCat = 0;
        this.title = "";
        this.description = "";
        this.quantity = 0;
        this.urlImage = "";
        this.price= 0; 
    }
}