import { Type } from "class-transformer";
import { IsString , IsBoolean, IsNotEmpty, IsEmail, MinLength, MaxLength, IsDate, IsEnum } from "class-validator";

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


export class ShipmentGraphQueryDTO {
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate({ message: 'startDate must be a valid ISO date string' })
    startDate: Date;
  
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate({ message: 'endDate must be a valid ISO date string' })
    endDate: Date;
  }


  export class ShipmentTeusChargeableDTO {
    @IsNotEmpty()
    startDate : string
    @IsNotEmpty()
    endDate : string
    @IsNotEmpty()
    @IsString()
    company : string
    @IsNotEmpty()
    @IsString()
    mode : string
  }



export class ShipmentGraphQueryDTOFirst {
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate({ message: 'firstDate must be a valid ISO date string' })
    firstDate: Date;
  
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate({ message: 'lastDate must be a valid ISO date string' })
    lastDate: Date;
  }