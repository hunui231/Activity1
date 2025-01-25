import { Schema, model } from "mongoose";


const Esquema = new Schema ({

name: String,

apepat: String,

edad: Number
 })

export const Tabla = new model(

"Reprobados", Esquema

)