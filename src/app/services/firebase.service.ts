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
      "nombre": "Pedro Díaz",
      "cedula": 1901957805,
      "area": "Enfermería"
    },
    {
      "idUsuario": 2,
      "nombre": "María Fernández",
      "cedula": 1675640982,
      "area": "Cardiología"
    },
    {
      "idUsuario": 3,
      "nombre": "Carlos García",
      "cedula": 1250151265,
      "area": "Enfermería"
    },
    {
      "idUsuario": 4,
      "nombre": "Juan Martínez",
      "cedula": 1729157809,
      "area": "Pediatría"
    },
    {
      "idUsuario": 5,
      "nombre": "Miguel Rodríguez",
      "cedula": 1589423941,
      "area": "Cardiología"
    },
    {
      "idUsuario": 6,
      "nombre": "Luis Fernández",
      "cedula": 1215729913,
      "area": "Ginecología"
    },
    {
      "idUsuario": 7,
      "nombre": "Ana Rodríguez",
      "cedula": 1938274574,
      "area": "Medicina"
    },
    {
      "idUsuario": 8,
      "nombre": "Juan Rodríguez",
      "cedula": 1060262561,
      "area": "Medicina"
    },
    {
      "idUsuario": 9,
      "nombre": "Sofía González",
      "cedula": 1866632126,
      "area": "Ginecología"
    },
    {
      "idUsuario": 10,
      "nombre": "Luis González",
      "cedula": 1404720456,
      "area": "Cardiología"
    },
    {
      "idUsuario": 11,
      "nombre": "Isabel Díaz",
      "cedula": 1539031217,
      "area": "Enfermería"
    },
    {
      "idUsuario": 12,
      "nombre": "Carlos Pérez",
      "cedula": 1608867080,
      "area": "Ginecología"
    },
    {
      "idUsuario": 13,
      "nombre": "Carlos González",
      "cedula": 1155015212,
      "area": "Medicina"
    },
    {
      "idUsuario": 14,
      "nombre": "Juan García",
      "cedula": 1161612292,
      "area": "Enfermería"
    },
    {
      "idUsuario": 15,
      "nombre": "Laura Martínez",
      "cedula": 1594491325,
      "area": "Cardiología"
    },
    {
      "idUsuario": 16,
      "nombre": "Isabel Rodríguez",
      "cedula": 1201982488,
      "area": "Pediatría"
    },
    {
      "idUsuario": 17,
      "nombre": "María Hernández",
      "cedula": 1320471686,
      "area": "Enfermería"
    },
    {
      "idUsuario": 18,
      "nombre": "Isabel Rodríguez",
      "cedula": 1139958700,
      "area": "Enfermería"
    },
    {
      "idUsuario": 19,
      "nombre": "Laura Hernández",
      "cedula": 1230895232,
      "area": "Cardiología"
    },
    {
      "idUsuario": 20,
      "nombre": "Sofía Sánchez",
      "cedula": 1178118243,
      "area": "Medicina"
    }
  ]
    this.defaultLavado=[
      {
        "horaInicio": "2022-07-01T19:42:46.154Z",
        "horaSalida": "2022-07-01T20:19:46.154Z",
        "idUsuario": 8,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2022-02-04T02:29:56.893Z",
        "horaSalida": "2022-02-04T03:25:56.893Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2022-05-17T02:49:17.260Z",
        "horaSalida": "2022-05-17T03:29:17.260Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-09-19T03:28:39.004Z",
        "horaSalida": "2022-09-19T04:21:39.004Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-03-23T19:19:57.269Z",
        "horaSalida": "2022-03-23T20:00:57.269Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-06-07T22:30:39.534Z",
        "horaSalida": "2022-06-07T23:15:39.534Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-05-31T19:46:44.458Z",
        "horaSalida": "2022-05-31T20:36:44.458Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2022-10-18T07:04:35.450Z",
        "horaSalida": "2022-10-18T07:47:35.450Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-06-28T16:01:00.822Z",
        "horaSalida": "2022-06-28T16:45:00.822Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-09-22T05:35:06.512Z",
        "horaSalida": "2022-09-22T06:10:06.512Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-08-13T01:02:32.948Z",
        "horaSalida": "2022-08-13T01:41:32.948Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-05-04T08:50:09.800Z",
        "horaSalida": "2022-05-04T09:43:09.800Z",
        "idUsuario": 9,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2022-01-22T10:11:59.802Z",
        "horaSalida": "2022-01-22T11:08:59.802Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-03-13T20:56:10.958Z",
        "horaSalida": "2022-03-13T21:45:10.958Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2022-02-11T18:23:37.511Z",
        "horaSalida": "2022-02-11T19:04:37.511Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-10-08T08:12:34.242Z",
        "horaSalida": "2022-10-08T09:06:34.242Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-12-12T00:22:26.866Z",
        "horaSalida": "2022-12-12T00:56:26.866Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-03-12T21:04:07.781Z",
        "horaSalida": "2022-03-12T21:41:07.781Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-05-21T05:21:39.992Z",
        "horaSalida": "2022-05-21T06:04:39.992Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-06-19T17:15:26.134Z",
        "horaSalida": "2022-06-19T18:01:26.134Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2022-04-22T18:07:17.415Z",
        "horaSalida": "2022-04-22T19:07:17.415Z",
        "idUsuario": 2,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2022-03-18T13:53:37.320Z",
        "horaSalida": "2022-03-18T14:43:37.320Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2022-11-29T01:17:59.641Z",
        "horaSalida": "2022-11-29T02:04:59.641Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-09-28T02:47:12.592Z",
        "horaSalida": "2022-09-28T03:37:12.592Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-03-19T07:14:44.670Z",
        "horaSalida": "2022-03-19T08:05:44.670Z",
        "idUsuario": 4,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2022-12-25T12:28:45.479Z",
        "horaSalida": "2022-12-25T13:15:45.479Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-06-09T23:48:08.096Z",
        "horaSalida": "2022-06-10T00:21:08.096Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-08-31T03:56:38.062Z",
        "horaSalida": "2022-08-31T04:34:38.062Z",
        "idUsuario": 4,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-06-24T03:20:11.866Z",
        "horaSalida": "2022-06-24T04:12:11.866Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-11-05T11:56:43.872Z",
        "horaSalida": "2022-11-05T12:36:43.872Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-03-02T22:17:11.517Z",
        "horaSalida": "2022-03-02T23:15:11.517Z",
        "idUsuario": 18,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-05-01T23:25:54.525Z",
        "horaSalida": "2022-05-02T00:09:54.525Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-06-13T08:35:45.604Z",
        "horaSalida": "2022-06-13T09:08:45.604Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-07-01T18:17:47.724Z",
        "horaSalida": "2022-07-01T18:47:47.724Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-04-19T15:01:12.622Z",
        "horaSalida": "2022-04-19T15:58:12.622Z",
        "idUsuario": 15,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2022-03-19T04:27:01.562Z",
        "horaSalida": "2022-03-19T05:23:01.562Z",
        "idUsuario": 13,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-09-01T22:40:33.007Z",
        "horaSalida": "2022-09-01T23:27:33.007Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2022-10-09T00:22:17.740Z",
        "horaSalida": "2022-10-09T01:18:17.740Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-10-22T20:09:14.527Z",
        "horaSalida": "2022-10-22T20:59:14.527Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-10-06T05:49:56.508Z",
        "horaSalida": "2022-10-06T06:26:56.508Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-05-15T00:50:43.726Z",
        "horaSalida": "2022-05-15T01:39:43.726Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2022-05-20T06:31:25.728Z",
        "horaSalida": "2022-05-20T07:29:25.728Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-05-28T16:52:15.578Z",
        "horaSalida": "2022-05-28T17:42:15.578Z",
        "idUsuario": 15,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-11-22T10:16:52.644Z",
        "horaSalida": "2022-11-22T10:53:52.644Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2022-10-29T01:10:01.964Z",
        "horaSalida": "2022-10-29T01:54:01.964Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2022-04-21T06:01:46.785Z",
        "horaSalida": "2022-04-21T07:00:46.785Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-01-19T20:54:52.296Z",
        "horaSalida": "2022-01-19T21:39:52.296Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-05-14T10:16:52.229Z",
        "horaSalida": "2022-05-14T11:05:52.229Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2022-03-03T12:06:34.878Z",
        "horaSalida": "2022-03-03T12:40:34.878Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-08-25T11:02:42.653Z",
        "horaSalida": "2022-08-25T11:54:42.653Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2022-09-27T16:28:37.280Z",
        "horaSalida": "2022-09-27T17:24:37.280Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-08-28T09:11:42.436Z",
        "horaSalida": "2022-08-28T09:59:42.436Z",
        "idUsuario": 11,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-04-16T20:39:14.639Z",
        "horaSalida": "2022-04-16T21:26:14.639Z",
        "idUsuario": 16,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-01-13T10:36:11.641Z",
        "horaSalida": "2022-01-13T11:08:11.641Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-12-12T11:06:13.408Z",
        "horaSalida": "2022-12-12T11:39:13.408Z",
        "idUsuario": 10,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2022-03-06T08:30:10.214Z",
        "horaSalida": "2022-03-06T09:30:10.214Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-06-01T21:59:50.858Z",
        "horaSalida": "2022-06-01T22:39:50.858Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-10-22T01:55:07.776Z",
        "horaSalida": "2022-10-22T02:41:07.776Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-12-17T09:25:48.911Z",
        "horaSalida": "2022-12-17T10:14:48.911Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-05-05T15:39:36.230Z",
        "horaSalida": "2022-05-05T16:26:36.230Z",
        "idUsuario": 13,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2022-02-24T08:56:42.423Z",
        "horaSalida": "2022-02-24T09:26:42.423Z",
        "idUsuario": 18,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2022-09-05T04:49:20.877Z",
        "horaSalida": "2022-09-05T05:24:20.877Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-06-28T01:42:32.374Z",
        "horaSalida": "2022-06-28T02:19:32.374Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-12-25T03:44:32.642Z",
        "horaSalida": "2022-12-25T04:33:32.642Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-03-01T14:52:11.659Z",
        "horaSalida": "2022-03-01T15:47:11.659Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-07-14T21:22:06.367Z",
        "horaSalida": "2022-07-14T22:18:06.367Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-07-01T02:20:38.193Z",
        "horaSalida": "2022-07-01T03:14:38.193Z",
        "idUsuario": 6,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2022-05-12T11:23:37.588Z",
        "horaSalida": "2022-05-12T12:08:37.588Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-09-29T12:28:31.656Z",
        "horaSalida": "2022-09-29T13:14:31.656Z",
        "idUsuario": 5,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2022-10-09T20:01:55.940Z",
        "horaSalida": "2022-10-09T20:44:55.940Z",
        "idUsuario": 8,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-11-01T23:59:29.045Z",
        "horaSalida": "2022-11-02T00:58:29.045Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-04-19T21:46:43.402Z",
        "horaSalida": "2022-04-19T22:37:43.402Z",
        "idUsuario": 3,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-07-15T06:56:19.561Z",
        "horaSalida": "2022-07-15T07:53:19.561Z",
        "idUsuario": 7,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2022-02-03T09:05:28.485Z",
        "horaSalida": "2022-02-03T10:05:28.485Z",
        "idUsuario": 2,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-10-10T08:08:20.665Z",
        "horaSalida": "2022-10-10T08:59:20.665Z",
        "idUsuario": 19,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-10-26T17:58:03.764Z",
        "horaSalida": "2022-10-26T18:53:03.764Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2022-12-07T06:07:23.648Z",
        "horaSalida": "2022-12-07T06:58:23.648Z",
        "idUsuario": 17,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-02-02T01:40:18.425Z",
        "horaSalida": "2022-02-02T02:31:18.425Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2022-11-24T23:34:06.330Z",
        "horaSalida": "2022-11-25T00:15:06.330Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2022-04-28T17:53:11.781Z",
        "horaSalida": "2022-04-28T18:53:11.781Z",
        "idUsuario": 16,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2022-03-12T13:32:24.114Z",
        "horaSalida": "2022-03-12T14:15:24.114Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2022-03-21T17:11:13.982Z",
        "horaSalida": "2022-03-21T18:06:13.982Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-06-22T16:32:32.667Z",
        "horaSalida": "2022-06-22T17:20:32.667Z",
        "idUsuario": 10,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-11-11T05:34:21.178Z",
        "horaSalida": "2022-11-11T06:20:21.178Z",
        "idUsuario": 12,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2022-07-04T03:55:47.025Z",
        "horaSalida": "2022-07-04T04:26:47.025Z",
        "idUsuario": 12,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-10-10T19:28:36.738Z",
        "horaSalida": "2022-10-10T20:10:36.738Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-07-24T12:50:50.969Z",
        "horaSalida": "2022-07-24T13:36:50.969Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-02-12T11:57:20.606Z",
        "horaSalida": "2022-02-12T12:29:20.606Z",
        "idUsuario": 19,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2022-09-15T02:03:38.687Z",
        "horaSalida": "2022-09-15T02:41:38.687Z",
        "idUsuario": 9,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-11-14T22:47:17.318Z",
        "horaSalida": "2022-11-14T23:38:17.318Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-02-18T20:29:48.290Z",
        "horaSalida": "2022-02-18T21:26:48.290Z",
        "idUsuario": 14,
        "lugarLavado": "Baño 1"
      },
      {
        "horaInicio": "2022-04-22T02:03:21.379Z",
        "horaSalida": "2022-04-22T02:41:21.379Z",
        "idUsuario": 20,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2022-04-14T00:12:32.569Z",
        "horaSalida": "2022-04-14T01:06:32.569Z",
        "idUsuario": 14,
        "lugarLavado": "Estación 2"
      },
      {
        "horaInicio": "2022-12-01T02:49:46.511Z",
        "horaSalida": "2022-12-01T03:28:46.511Z",
        "idUsuario": 11,
        "lugarLavado": "Estación 1"
      },
      {
        "horaInicio": "2022-04-03T13:31:10.455Z",
        "horaSalida": "2022-04-03T14:06:10.455Z",
        "idUsuario": 7,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-12-27T14:24:39.943Z",
        "horaSalida": "2022-12-27T15:16:39.943Z",
        "idUsuario": 6,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-08-12T14:19:30.198Z",
        "horaSalida": "2022-08-12T15:18:30.198Z",
        "idUsuario": 20,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-01-06T17:57:38.348Z",
        "horaSalida": "2022-01-06T18:45:38.348Z",
        "idUsuario": 1,
        "lugarLavado": "Baño 3"
      },
      {
        "horaInicio": "2022-11-18T00:20:24.252Z",
        "horaSalida": "2022-11-18T00:59:24.252Z",
        "idUsuario": 5,
        "lugarLavado": "Baño 2"
      },
      {
        "horaInicio": "2022-06-05T16:23:52.527Z",
        "horaSalida": "2022-06-05T16:55:52.527Z",
        "idUsuario": 17,
        "lugarLavado": "Estación 1"
      }
    ]
    this.defaultAlcohol=[

    {
      "horaUso": "2022-06-25T14:23:36.707Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-03-08T01:30:11.618Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-09-24T11:19:15.834Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-01-16T12:52:09.717Z",
      "idUsuario": 20,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-11-08T22:03:45.603Z",
      "idUsuario": 10,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-06-16T11:54:09.510Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-01-20T10:36:48.606Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-01-17T13:30:19.690Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-01-19T02:56:58.628Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-05-05T15:25:40.650Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-03-07T04:43:04.779Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-06-19T23:26:19.405Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-08-28T13:38:46.077Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-09-24T14:03:18.033Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2022-10-29T13:30:48.647Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2022-08-05T02:30:05.763Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-10-16T04:07:53.762Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-03-23T23:09:33.417Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-11-16T20:12:16.051Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-11-24T14:16:00.678Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2022-02-26T13:39:08.457Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-07-12T08:35:55.119Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-11-29T06:17:50.283Z",
      "idUsuario": 19,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-06-15T09:46:53.315Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-07-25T11:24:29.697Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-12-30T11:25:01.665Z",
      "idUsuario": 12,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-08-22T07:03:15.235Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-01-20T17:37:36.907Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-12-30T21:19:15.659Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-08-06T20:23:09.430Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2022-07-10T15:35:00.285Z",
      "idUsuario": 7,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-01-09T03:31:24.186Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-04-07T17:32:40.398Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2022-04-04T11:43:01.503Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-10-14T10:00:48.171Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-06-17T23:01:58.765Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2022-06-22T10:44:38.471Z",
      "idUsuario": 10,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-12-08T15:44:50.499Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-12-07T14:50:07.661Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2022-04-29T10:51:02.202Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-07-15T02:14:30.951Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-09-16T15:38:43.624Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2022-07-30T04:41:01.462Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2022-10-26T01:27:03.541Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-10-13T22:56:02.056Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-08-16T08:50:43.953Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-12-18T05:14:45.382Z",
      "idUsuario": 4,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-09-20T14:06:59.157Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2022-09-26T12:32:06.334Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-11-27T00:56:02.337Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-11-23T03:24:57.046Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-11-01T01:50:13.702Z",
      "idUsuario": 13,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-03-16T15:24:29.918Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-10-23T00:06:11.730Z",
      "idUsuario": 1,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-12-01T16:56:30.217Z",
      "idUsuario": 7,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-02-24T11:47:42.474Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-04-24T17:08:11.770Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-05-10T03:38:48.059Z",
      "idUsuario": 2,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-06-10T02:03:53.584Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-02-01T01:19:45.821Z",
      "idUsuario": 11,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-11-14T14:22:31.892Z",
      "idUsuario": 9,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2022-02-15T11:41:41.955Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-09-30T19:48:34.102Z",
      "idUsuario": 12,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-04-17T08:23:15.515Z",
      "idUsuario": 2,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-09-19T00:59:43.350Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2022-05-01T07:12:05.955Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-12-07T00:21:12.751Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-07-31T06:07:05.119Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-03-29T14:11:28.392Z",
      "idUsuario": 6,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2022-09-02T10:57:07.120Z",
      "idUsuario": 15,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-08-28T06:56:36.409Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-11-19T09:36:07.079Z",
      "idUsuario": 6,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-09-01T17:01:07.958Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-02-09T02:33:59.308Z",
      "idUsuario": 8,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-02-16T00:49:13.807Z",
      "idUsuario": 17,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-03-14T10:10:19.671Z",
      "idUsuario": 1,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-11-07T05:08:49.471Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-12-07T17:43:41.200Z",
      "idUsuario": 5,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-11-25T04:42:37.185Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-05-19T14:08:58.151Z",
      "idUsuario": 4,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-05-07T03:41:48.429Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-11-30T05:57:15.306Z",
      "idUsuario": 14,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-04-27T06:56:14.834Z",
      "idUsuario": 17,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-04-12T09:24:34.391Z",
      "idUsuario": 8,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-03-27T00:39:44.544Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-03-10T05:45:52.776Z",
      "idUsuario": 18,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-10-01T11:43:36.459Z",
      "idUsuario": 3,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-08-11T06:35:39.653Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-05-22T15:35:20.636Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2022-04-22T09:46:36.819Z",
      "idUsuario": 15,
      "lugarLavado": "Baño 2"
    },
    {
      "horaUso": "2022-06-04T16:22:54.867Z",
      "idUsuario": 13,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-08-24T16:33:11.385Z",
      "idUsuario": 11,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-05-31T06:17:38.660Z",
      "idUsuario": 20,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-11-24T07:12:20.518Z",
      "idUsuario": 16,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-11-12T00:32:45.917Z",
      "idUsuario": 14,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-02-24T14:31:29.412Z",
      "idUsuario": 9,
      "lugarLavado": "Estación 1"
    },
    {
      "horaUso": "2022-11-24T00:13:07.148Z",
      "idUsuario": 16,
      "lugarLavado": "Baño 3"
    },
    {
      "horaUso": "2022-01-11T20:10:26.729Z",
      "idUsuario": 19,
      "lugarLavado": "Baño 1"
    },
    {
      "horaUso": "2022-09-02T09:07:53.036Z",
      "idUsuario": 3,
      "lugarLavado": "Estación 2"
    },
    {
      "horaUso": "2022-04-18T13:42:31.238Z",
      "idUsuario": 18,
      "lugarLavado": "Baño 3"
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
      this.defaultAlcohol.forEach((element:any) => {
        let dates = this.getTime(element.horaUso)

        element["dates"] = dates;
        list.push(element)
      });

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
