import { IsString , IsBoolean, IsNotEmpty, IsEmail, min, Min, Max, MinLength, MaxLength } from "class-validator";

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