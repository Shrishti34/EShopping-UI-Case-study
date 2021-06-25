export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description ='', price = 0, imageUrl = 'https://cdn4.vectorstock.com/i/1000x1000/58/48/blank-photo-icon-vector-3265848.jpg'){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl =imageUrl;

    }
}
