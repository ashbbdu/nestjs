import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { CreateUser, CreateUserResult } from 'src/interface/test';
// import { CreateUser, CreateUserResult } from 'src/interface/test';

@Injectable()
export class UsersService {
    async getUsers () : Promise<any> {
        const users = await User.findAll();
        return {
            success : true,
            message : "Users fetched successfully !",
            users
        };
    }

    getUserDetails () : string {
        return "ASHISH"
    }

   async findUser (id : string) : Promise<any> {
        const user = await User.findByPk(Number(id));
        if(!user) {
            return "User not found !"
        }
        return user;
    }

    async createUser (data : any) : Promise<CreateUserResult> {
        const { firstName , lastName , isActive } = data;
        console.log(firstName , lastName , isActive , "data");    
        if(!firstName || !lastName || !isActive) {
            return {
                success : false,
                message : "Please fill all the fields !"
            }
        }
        const user = await User.create(data)
        console.log(user.dataValues ,"user");
        
        return user.dataValues;
    }
}
