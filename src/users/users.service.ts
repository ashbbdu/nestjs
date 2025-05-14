import { ConflictException, HttpException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { User } from './user.model';
import { CreateUser, CreateUserResult } from 'src/interface/test';
import { messages } from 'src/constants/returnMessages';
import { CreateUsersDTO } from './dto/create-users-dto';
// import { CreateUser, CreateUserResult } from 'src/interface/test';

@Injectable()
export class UsersService {
  async getUsers(): Promise<any> {
    const users = await User.findAll({
        attributes : ['firstName' , 'lastName' , 'isActive'], // this will only work if in model we use declare
        raw : true
    });
    return {
      success: true,
      message: 'Users fetched successfully !',
      users,
    };
  }

  getUserDetails(): string {
    return 'ASHISH';
  }

  async findUser(id: string): Promise<any> {
    const user = await User.findByPk(Number(id));
    
    if (!user) {
      return 'User not found !';
    }
    return user;
  }

//   async createUser(createUsersDto: CreateUsersDTO): Promise<CreateUserResult> {
//       const existingUser = await User.findOne({
//         where: {
//           email: createUsersDto.email,
//         },
       
//       });
//       if (existingUser) {
//         // return {
//         //   success: false,
//         //   message: messages.USER_EXIST,
//         // };
//         // throw new Error 
//         throw new ConflictException('User already exists').getResponse();
//       }
//       const user = await User.create({...createUsersDto});

//       return user.dataValues;
    
//   }
async createUser(createUsersDto: CreateUsersDTO): Promise<CreateUserResult> {
    try {
      const existingUser = await User.findOne({
        where: { email: createUsersDto.email },
      });

      if (existingUser) {
        throw new ConflictException('User already exists');
      }

      const user = await User.create({ ...createUsersDto });
      return user.dataValues;

    } catch (err) {
      // If it’s already an HttpException (e.g. our ConflictException), re-throw it
      if (err instanceof HttpException) {
        throw err;
      }
      throw new InternalServerErrorException();
    }
  }
}
