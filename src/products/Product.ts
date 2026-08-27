class Products {
    public idProduct: number;
    public name: string;
    public amountStock: number;
    public description: string;
    public valueUnit: number;

    constructor(idProduct: number, name: string, amountStock: number, description: string, valueUnit: number) {
        this.idProduct = idProduct;
        this.name = name;
        this.amountStock = amountStock;
        this.description = description;
        this.valueUnit = valueUnit;
    }

}