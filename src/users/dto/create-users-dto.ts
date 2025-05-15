import { Type } from "class-transformer";
import { IsString , IsBoolean, IsNotEmpty, IsEmail, min, Min, Max, MinLength, MaxLength, IsDate } from "class-validator";

export class CreateUsersDTO {
    @IsString({message : "First Name should be a valid string"})
    @IsNotEmpty()
    first_name: string;
    @IsString()
    last_name: string;
    @IsEmail()
    email: string;
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    password: string;
   
    @IsString()
    user_code: string;
    @IsBoolean()
    is_active: boolean;
}


export class ShipmentGraphQuery {
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate({ message: 'startDate must be a valid ISO date string' })
    startDate: Date;
  
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate({ message: 'endDate must be a valid ISO date string' })
    endDate: Date;
  }