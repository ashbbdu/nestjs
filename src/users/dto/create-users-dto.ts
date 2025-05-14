import { IsString , IsBoolean, IsNotEmpty } from "class-validator";

export class CreateUsersDTO {
    @IsString({message : "First Name should be a valid string"})
    @IsNotEmpty()
    first_name: string;
    @IsString()
    last_name: string;
    @IsString()
    email: string;
    @IsString()
    password: string;
    @IsString()
    user_code: string;
    @IsBoolean()
    is_active: boolean;
}