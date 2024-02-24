import { IsNotEmpty, IsString, MinLength } from "class-validator";


export class CreateSchoolDto {
    @IsString() @IsNotEmpty() @MinLength(3) name: string;
    @IsString() @IsNotEmpty()  logoUrl: string;
 }

