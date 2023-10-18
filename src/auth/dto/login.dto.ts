import { MinLength, IsEmail, IsString } from "class-validator";

export class LoginDto{

    
    @IsEmail()
    email: string;


    @MinLength(6)
    password: string;
}
