import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeaturesService } from 'src/features/features.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usuarioService: UsersService,
        private readonly featuresService: FeaturesService
    ){}

    @Get()
    getUsers(){
        if(!this.featuresService.isEnable('listarUsuarios')){
            return { message: 'Funcionalidad en construccion'}
        }

        return this.usuarioService.getUsers();
    }

}
