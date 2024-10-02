import { Injectable } from '@angular/core';
import { LavadoDeManos, LavadoConAlcohol, User, Users} from '../interfaces/hack'

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  public users;
  public lavado: LavadoDeManos[]
  public alcohol: LavadoConAlcohol[]
  constructor() {
    this.users = {
      1: {
        idUsuario: 1,
        nombre: "Juan Pérez",
        cedula: '123456789',
      },
      2: {
        idUsuario: 2,
        nombre: "María López",
        cedula: '987654321'
      },
      3: {
        idUsuario: 3,
        nombre: "Carlos Ramírez",
        cedula: '456789123'
      }
    };

    this.lavado = [{
      idlavadodemanos: 1,
      idUsuario: 1,
      HoradeInicio: new Date("2024-10-02T08:30:00"),
      HoradeSalida: new Date("2024-10-02T08:35:00"),
      Lugarlavado: "Baño Central"
    },
    {
      idlavadodemanos: 2,
      idUsuario: 2,
      HoradeInicio: new Date("2024-10-02T09:00:00"),
      HoradeSalida: new Date("2024-10-02T09:05:00"),
      Lugarlavado: "Baño Sur"
    },
    {
      idlavadodemanos: 3,
      idUsuario: 3,
      HoradeInicio: new Date("2024-10-02T10:15:00"),
      HoradeSalida: new Date("2024-10-02T10:20:00"),
      Lugarlavado: "Baño Norte"
    }];

    this.alcohol = [{
      idlavadoConAlcohol: 1,
      idUsuario: 1,
      Horadeuso: new Date("2024-10-02T11:00:00"),
      Lugarlavado: "Recepción"
    },
    {
      idlavadoConAlcohol: 1,
      idUsuario: 1,
      Horadeuso: new Date("2024-10-02T11:00:00"),
      Lugarlavado: "Recepción"
    },
    {
      idlavadoConAlcohol: 2,
      idUsuario: 2,
      Horadeuso: new Date("2024-10-02T11:30:00"),
      Lugarlavado: "Sala de reuniones"
    },
    {
      idlavadoConAlcohol: 3,
      idUsuario: 3,
      Horadeuso: new Date("2024-10-02T12:00:00"),
      Lugarlavado: "Oficina Central"
    }
    ];
  }


}
