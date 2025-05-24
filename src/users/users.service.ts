import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    getUsers() {
        return [
            { id: 1, nombre: 'Pepito' },
            { id: 2, nombre: 'carlos' },
            { id: 3, nombre: 'nicolas' }
        ];;
    }

    createUser(nombre: string) {

    }


}
