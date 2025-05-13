import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

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
     findUser(@Param('id') id : string)  {
        return this.userService.findUser(id);
     }

     @Post()
     createUser(@Body() user : {}) {
        return this.userService.createUser(user);
     } 

     @Patch(':id') // checking how to use query params
     updateUser(@Param('id') id : string , @Body() user : {}) {
        return {
            id,
            ...user
        };
     }

    //  @Patch() // checking how to use query params
    //  updateUser(@Query('firstName') firstName : string, @Query('lastName') lastName : string ) {
    //     return {firstName , lastName};
    //  }

}
