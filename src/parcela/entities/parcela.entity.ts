import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Parcela {

    @Prop({
        unique: true,
        required: true,
    })
    direccion: string;

    @Prop({
        required: true,
    })
    valor: number;

    @Prop({
        type: [String],
        required: true,
        index: true,
    })
    ubicacion: string[];
}

export const ParcelaSchema = SchemaFactory.createForClass( Parcela );