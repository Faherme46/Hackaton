import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { elementAt } from 'rxjs';


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  public firebaseConfig: any;
  public defaultLavado:any;
  public defaultDocs:any;
  public defaultAlcohol:any;
  constructor() {

    this.firebaseConfig = {
      apiKey: "AIzaSyDL6_b5CigukPtghhtcouIDs1S-gd-62Sg",
      authDomain: "hackaton-b6eed.firebaseapp.com",
      projectId: "hackaton-b6eed",
      storageBucket: "hackaton-b6eed.appspot.com",
      messagingSenderId: "846392014157",
      appId: "1:846392014157:web:bbbdc13dd8736bb2c13304",
      measurementId: "G-NS6VREYTSW"
    };

    this.defaultDocs=[
      {
        "idUsuario": 1,
        "nombre": "Carlos Díaz",
        "cedula": 1437579990,
        "area": "Medicina"
      },
      {
        "idUsuario": 2,
        "nombre": "Isabel Pérez",
        "cedula": 1631524860,
        "area": "Enfermería"
      },
      {
        "idUsuario": 3,
        "nombre": "Sofía López",
        "cedula": 1598592484,
        "area": "Medicina"
      },
      {
        "idUsuario": 4,
        "nombre": "Carlos Pérez",
        "cedula": 1577142091,
        "area": "Enfermería"
      },
      {
        "idUsuario": 5,
        "nombre": "Pedro Pérez",
        "cedula": 1622627095,
        "area": "Ginecología"
      },
      {
        "idUsuario": 6,
        "nombre": "Ana Hernández",
        "cedula": 1425831830,
        "area": "Cardiología"
      },
      {
        "idUsuario": 7,
        "nombre": "María Díaz",
        "cedula": 1919969444,
        "area": "Cirugía"
      },
      {
        "idUsuario": 8,
        "nombre": "Ana Sánchez",
        "cedula": 1908564593,
        "area": "Enfermería"
      },
      {
        "idUsuario": 9,
        "nombre": "Isabel Fernández",
        "cedula": 1545123424,
        "area": "Cardiología"
      },
      {
        "idUsuario": 10,
        "nombre": "Juan Hernández",
        "cedula": 1300652029,
        "area": "Medicina"
      },
      {
        "idUsuario": 11,
        "nombre": "Isabel García",
        "cedula": 1433130839,
        "area": "Ginecología"
      },
      {
        "idUsuario": 12,
        "nombre": "Luis Rodríguez",
        "cedula": 1980026559,
        "area": "Enfermería"
      },
      {
        "idUsuario": 13,
        "nombre": "Juan Sánchez",
        "cedula": 1531573899,
        "area": "Cirugía"
      },
      {
        "idUsuario": 14,
        "nombre": "Carlos García",
        "cedula": 1417126534,
        "area": "Medicina"
      },
      {
        "idUsuario": 15,
        "nombre": "Isabel Martínez",
        "cedula": 1199652584,
        "area": "Ginecología"
      },
      {
        "idUsuario": 16,
        "nombre": "Luis García",
        "cedula": 1421220186,
        "area": "Ginecología"
      },
      {
        "idUsuario": 17,
        "nombre": "Carlos López",
        "cedula": 1528853859,
        "area": "Medicina"
      },
      {
        "idUsuario": 18,
        "nombre": "María Fernández",
        "cedula": 1157256712,
        "area": "Cirugía"
      },
      {
        "idUsuario": 19,
        "nombre": "Ana García",
        "cedula": 1244208268,
        "area": "Cirugía"
      },
      {
        "idUsuario": 20,
        "nombre": "Ana Sánchez",
        "cedula": 1515502220,
        "area": "Cardiología"
      }
    ]

    this.defaultLavado=[
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:10:12.725Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:11:12.725Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:21:12.725Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:19:12.725Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:21:12.725Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:21:12.725Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:20:12.725Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:10:12.725Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:20:12.725Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:22:12.725Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:11:12.725Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:24:12.725Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:23:12.725Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:23:12.725Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:10:12.725Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:11:12.725Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:10:12.725Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:23:12.725Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:11:12.725Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:13:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:21:12.725Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:13:12.725Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:21:12.725Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:24:12.725Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:10:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:21:12.725Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:11:12.725Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:21:12.725Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:10:12.725Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:20:12.725Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:19:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:13:12.725Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:24:12.725Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:13:12.725Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:23:12.725Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:22:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:21:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:21:12.725Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:23:12.725Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:13:12.725Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:15:12.725Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:15:12.725Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:20:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:10:12.725Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:23:12.725Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:24:12.725Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:22:12.725Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:21:12.725Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:15:12.725Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:23:12.725Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:10:12.725Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:19:12.725Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:10:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:21:12.725Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:20:12.725Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:11:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:13:12.725Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:13:12.725Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:20:12.725Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:15:12.725Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:13:12.725Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:21:12.725Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:23:12.725Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:15:12.725Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:15:12.725Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:20:12.725Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:23:12.725Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:23:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:19:12.725Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:15:12.725Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:19:12.725Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:20:12.725Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:19:12.725Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:20:12.725Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:15:12.725Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:19:12.725Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:21:12.725Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:11:12.725Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:15:12.725Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:13:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:22:12.725Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:24:12.725Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:10:12.725Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:19:12.725Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:23:12.725Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:21:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:13:12.725Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:20:12.725Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:10:12.725Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:23:12.725Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:22:12.725Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:24:12.725Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:23:12.725Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:13:12.725Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:20:12.725Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:19:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:15:12.725Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:20:12.725Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:19:12.725Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:13:12.725Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:15:12.725Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:20:12.725Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:10:12.725Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:24:12.725Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:15:12.725Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:11:12.725Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:12:12.725Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:24:12.725Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:11:12.725Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:11:12.725Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:23:12.725Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:13:12.725Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:22:12.725Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:13:12.725Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:20:12.725Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:20:12.725Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:15:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:22:12.725Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:13:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:10:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:19:12.725Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:13:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:21:12.725Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:14:12.725Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:11:12.725Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:24:12.725Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:18:12.725Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:22:12.725Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:20:12.725Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:22:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:16:12.725Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:23:12.725Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:19:12.725Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:11:12.725Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.725Z",
        "horaSalida": "2024-10-03T02:17:12.725Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:11:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:22:12.726Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:22:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:11:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:11:12.726Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:11:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:11:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:22:12.726Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:22:12.726Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:18:12.726Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:18:12.726Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:18:12.726Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:22:12.726Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:11:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:11:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:18:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:18:12.726Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:11:12.726Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:11:12.726Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:22:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:11:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:22:12.726Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:22:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:18:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:11:12.726Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:18:12.726Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:18:12.726Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:18:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:18:12.726Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:22:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:22:12.726Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:22:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:18:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:18:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:23:12.726Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:18:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:18:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:22:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:18:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:22:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:22:12.726Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:22:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:18:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:24:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:12:12.726Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:14:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:22:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:10:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:19:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:21:12.726Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:15:12.726Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:20:12.726Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:13:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:16:12.726Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.726Z",
        "horaSalida": "2024-10-03T02:17:12.726Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:23:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:14:12.727Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:24:12.727Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:22:12.727Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:13:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:10:12.727Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:16:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:11:12.727Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:17:12.727Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:18:12.727Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:20:12.727Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:15:12.727Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:12:12.727Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:21:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.727Z",
        "horaSalida": "2024-10-03T02:19:12.727Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:19:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:19:12.728Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:19:12.728Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:19:12.728Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:19:12.728Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:19:12.728Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:19:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:19:12.728Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:19:12.728Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:19:12.728Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:19:12.728Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:19:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:19:12.728Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:21:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:13:12.728Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:14:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:11:12.728Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:19:12.728Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:12:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:10:12.728Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:23:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:18:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:24:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:19:12.728Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:15:12.728Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:16:12.728Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:17:12.728Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:19:12.728Z",
        "idUsuario": 3,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:20:12.728Z",
        "idUsuario": 1,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2024-10-03T02:09:12.728Z",
        "horaSalida": "2024-10-03T02:22:12.728Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 3"
      }
    ]
    this.defaultAlcohol=[
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.728Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2024-10-03T02:09:12.729Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 1"
    }
  ]
    // Initialize Firebase

  }


  public listenToUsuarios(callback: Function) {
    const app = initializeApp(this.firebaseConfig);
    const db = getFirestore(app);

    // Escuchar la colección "Usuarios"
    const usuariosCollection = collection(db, "Usuarios");

    // `onSnapshot` escucha cualquier cambio en tiempo real en la colección "Usuarios"
    const unsubscribe = onSnapshot(usuariosCollection, (querySnapshot) => {
      const list: any = {};

      querySnapshot.forEach((doc) => {
        list[doc.get('id')] = doc.data();
      });

      // Ejecutar la función callback con los datos actualizados
      callback(list);
    });

    // Puedes devolver `unsubscribe` si deseas detener la escucha en algún momento
    return unsubscribe;
  }

  public listenToDoctores(callback: Function) {
    const app = initializeApp(this.firebaseConfig);
    const db = getFirestore(app);

    // Escuchar la colección "Doctores"
    const usuariosCollection = collection(db, "Doctores");

    // `onSnapshot` escucha cualquier cambio en tiempo real en la colección "Usuarios"
    const unsubscribe = onSnapshot(usuariosCollection, (querySnapshot) => {
      const list: any = {};
      querySnapshot.forEach((doc) => {
        list[doc.id] = doc.data();
      });

      this.defaultDocs.forEach((element:any) => {
        list[element.idUsuario]=element;
      });


      // Ejecutar la función callback con los datos actualizados
      callback(list);
    });

    // Puedes devolver `unsubscribe` si deseas detener la escucha en algún momento
    return unsubscribe;
  }

  public listenToLavado(callback: Function) {
    const app = initializeApp(this.firebaseConfig);
    const db = getFirestore(app);

    // Escuchar la colección "Lavado"
    const usuariosCollection = collection(db, "Lavado");

    // `onSnapshot` escucha cualquier cambio en tiempo real en la colección "Usuarios"
    const unsubscribe = onSnapshot(usuariosCollection, (querySnapshot) => {
      const list: any[] = [];
      querySnapshot.forEach((doc) => {
        let dates = this.getTime(doc.get('horaInicio'))
        let data = doc.data();
        data["dates"] = dates;

        data["duracion"]=(this.getSeconds(doc.get('horaSalida'))-this.getSeconds(doc.get('horaInicio')))/1000
        list.push(data)
      });
      this.defaultLavado.forEach((element:any) => {
        let dates = this.getTime(element.horaInicio)
        element["dates"] = dates;
        element["duracion"]=(this.getSeconds(element['horaSalida'])-this.getSeconds(element['horaInicio']))/1000
        list.push(element)
      });

      // Ejecutar la función callback con los datos actualizados
      callback(list);
    });

    // Puedes devolver `unsubscribe` si deseas detener la escucha en algún momento
    return unsubscribe;
  }
  public listenToAlcohol(callback: Function) {
    const app = initializeApp(this.firebaseConfig);
    const db = getFirestore(app);

    // Escuchar la colección "Alcohol"
    const usuariosCollection = collection(db, "Alcohol");

    // `onSnapshot` escucha cualquier cambio en tiempo real en la colección "Usuarios"
    const unsubscribe = onSnapshot(usuariosCollection, (querySnapshot) => {
      const list: any[] = [];
      querySnapshot.forEach((doc) => {
        let dates = this.getTime(doc.get('horaUso'))
        let data = doc.data();
        data["dates"] = dates;
        list.push(data)
      });
      // this.defaultAlcohol.forEach((element:any) => {
      //   let dates = this.getTime(element.horaUso)

      //   element["dates"] = dates;
      //   list.push(element)
      // });

      // Ejecutar la función callback con los datos actualizados
      callback(list);
    });

    // Puedes devolver `unsubscribe` si deseas detener la escucha en algún momento
    return unsubscribe;
  }

  getTime(str: string) {
    // Obtener la hora y los minutos
    let date = new Date(str);
    let horas = date.getHours().toString().padStart(2, '0');   // Devuelve las horas en formato 2 dígitos
    let minutos = date.getMinutes().toString().padStart(2, '0'); // Devuelve los minutos en formato 2 dígitos

    let dates = {
      "y": date.getFullYear(),
      "m": date.getMonth(),
      "d": date.getDay(),
      "h": `${horas}:${minutos}`
    };
    // Formato hh:mm
    return dates;
  }

  getSeconds(str: string) {
    let date = new Date(str);
    return date.getTime()

  }

}
