import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {
    crearProducto(nombre: string){
        return { message: `Producto ${nombre} creado exitosamente`}
    }
}
