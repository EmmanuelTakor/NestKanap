import { ProductsService } from './products.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  products: any;
  constructor(private productservice: ProductsService) {}
  @Get()
  async getAllProducts() {
    return await this.productservice.getAllProducts();
  }
  @Get('/:id')
  getProductById(@Param('id') id: string) {
    return this.productservice.getProductById(id);
  }
}
