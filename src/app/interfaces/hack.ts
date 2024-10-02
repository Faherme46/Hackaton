export interface Usuario {
  idUsuario:number;
  nombre:string;
  cedula:string;
}
export interface LavadoDeManos {
  idlavadodemanos:number
  idUsuario:number
  HoradeInicio:Date
  HoradeSalida:Date
  Lugarlavado:string
}

export interface LavadoConAlcohol {
  idlavadoConAlcohol :number;
  idUsuario:number;
  Horadeuso:Date;
  Lugarlavado :string;
}


