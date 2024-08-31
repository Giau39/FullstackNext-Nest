import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateAuthDto {

    @IsNotEmpty({ message: "email không được để trống" })
    email: string;

    @IsNotEmpty({ message: "password không được để trống" })
    password: string;

    @IsOptional()
    name: string;
}

export class CodeAuthDto {

    @IsNotEmpty({ message: "_id không được để trống" })
    _id: string;

    @IsNotEmpty({ message: "code không được để trống" })
    code: string;

}


export class ChangePasswordAuthDto {
    @IsNotEmpty({ message: "code không được để trống" })
    code: string;

    @IsNotEmpty({ message: "password không được để trống" })
    password: string;

    @IsNotEmpty({ message: "confirmPassword không được để trống" })
    confirmPassword: string;

    @IsNotEmpty({ message: "email không được để trống" })
    email: string;

}
