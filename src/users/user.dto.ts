import { IsNotEmpty, IsNumber } from "class-validator";

export class CrearUsuarioDto{

    @IsNotEmpty({message: 'El id es obligatorio'})
    identificacion: number;

    @IsNotEmpty({message: 'El nombre es obligatorio'})
    nombre: string;
}