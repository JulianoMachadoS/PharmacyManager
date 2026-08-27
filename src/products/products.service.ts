import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {

    findAll() {
        return 'Lista de produtos vindo do service, entendeu??';
    }

    findOne(id: number) {
        return `Produto com ID ${id} vindo do service, entendeu??`;
    }

}