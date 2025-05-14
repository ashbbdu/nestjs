import { Body, Controller, Get, Param, Patch, Post, Query , ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDTO } from './dto/create-users-dto';
import { UpdateUsersDTO } from './dto/update-users-dto';

@Controller('users')
export class UsersController {
     constructor(private readonly userService: UsersService) {
        // let userS=new UsersService();
     }
     @Get()
     getUsers() : any {
        return this.userService.getUsers();
     }

     @Get('/user-details')
     getUserDetails() : string {
        return this.userService.getUserDetails();
     }

     @Get(':id')
     findUser(@Param('id' , ParseIntPipe) id : string)  {
        return this.userService.findUser(id);
     }

     @Post()
     createUser(@Body(ValidationPipe) createUserDto : CreateUsersDTO) {
        return this.userService.createUser(createUserDto);
     } 

     @Patch(':id') 
     updateUser(@Param('id' , ParseIntPipe) id : string , @Body(ValidationPipe) updateUserDto : UpdateUsersDTO) {
        return {
            id,
            ...updateUserDto
        };
     }

    //  @Patch() // checking how to use query params
    //  updateUser(@Query('firstName') firstName : string, @Query('lastName') lastName : string ) {
    //     return {firstName , lastName};
    //  }

}
