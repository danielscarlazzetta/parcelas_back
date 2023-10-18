import { IsArray, IsNumber, IsString} from "class-validator";

export class CreateParcelaDto {

    @IsString()
    direccion: string;

    @IsNumber()
    valor: number;

    @IsString({each : true})
    @IsArray()
    ubicacion: string[];
}
