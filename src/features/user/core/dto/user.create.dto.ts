import { IsBoolean, IsDateString, IsNumber, IsString } from "class-validator";

export class UserCreateDto {

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    phone: string;

    @IsDateString()
    dateOfBirth: string;
}