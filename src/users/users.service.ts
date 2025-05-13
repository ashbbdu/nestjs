import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { CreateUser, CreateUserResult } from 'src/interface/test';
import { messages } from 'src/constants/returnMessages';
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

  async createUser(data: any): Promise<CreateUserResult> {
    try {
      const { firstName, lastName, email, isActive } = data;
      if (!firstName || !lastName || !email || !isActive) {
        return {
          success: false,
          message: messages.REQUIRED_FIELDS,
        };
      }

      const existingUser = await User.findOne({
        where: {
          email: email,
        },
       
      });
      if (existingUser) {
        return {
          success: false,
          message: messages.USER_EXIST,
        };
      }
      const user = await User.create(data);

      return user.dataValues;
    } catch (error) {
      return {
        success: false,
        message: messages.INTERNAL_SERVER_ERROR,
      };
    }
  }
}
