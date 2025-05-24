import { Body, Controller, Post } from '@nestjs/common';
import { FeaturesService } from 'src/features/features.service';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {

    constructor(
        private readonly productoService: ProductoService,
        private readonly featureService: FeaturesService
    ){}

    @Post()
    createProduct(@Body('nombre') nombre: string) {
        if(!this.featureService.isEnable('crearProducto')){
            return { message: 'Funcionalidad en Construccion'}
        }

        return this.productoService.crearProducto(nombre);
    }

}
