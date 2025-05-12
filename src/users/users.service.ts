import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUserDetails () : string {
        return "ASHISH"
    }
}
