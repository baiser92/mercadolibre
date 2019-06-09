export class Detail {
    condition: string;
    description: string;
    free_shipping: string;
    id: string;
    picture: string;
    price: { currency: string, amount: number };
    sold_quantity: string;
    title: string;

    constructor(data) {
       
        this.condition = data.condition ? data.condition : '';
        this.description = data.description ? data.description : '';
        this.free_shipping = data.free_shipping ? data.free_shipping : '';
        this.id = data.id ? data.id : '';
        this.picture = data.picture ? data.picture : '';
        this.price.currency = data.price.currency ? data.price.currency : '';
        this.price.amount = data.price.amount ? data.price.amount : '';
        this.sold_quantity = data.sold_quantity ? data.sold_quantity : '';
        this.title = data.title ? data.title : '';
      }
}

