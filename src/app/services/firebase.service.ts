import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  public firebaseConfig:any;
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDL6_b5CigukPtghhtcouIDs1S-gd-62Sg",
      authDomain: "hackaton-b6eed.firebaseapp.com",
      projectId: "hackaton-b6eed",
      storageBucket: "hackaton-b6eed.appspot.com",
      messagingSenderId: "846392014157",
      appId: "1:846392014157:web:bbbdc13dd8736bb2c13304",
      measurementId: "G-NS6VREYTSW"
    };
    // Initialize Firebase

  }


  public listenToUsuarios(callback: Function) {
    const app = initializeApp(this.firebaseConfig);
    const db = getFirestore(app);

    // Escuchar la colección "Usuarios"
    const usuariosCollection = collection(db, "Usuarios");

    // `onSnapshot` escucha cualquier cambio en tiempo real en la colección "Usuarios"
    const unsubscribe = onSnapshot(usuariosCollection, (querySnapshot) => {
      const list: any={};
      querySnapshot.forEach((doc) => {
        list[doc.get('id')]=doc.data();
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
      const list: any={};
      querySnapshot.forEach((doc) => {
        list[doc.id]=doc.data();
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
        let dates=this.getTime(doc.get('horaInicio'))
        let data=doc.data();
        data["dates"]=dates;

        // data["duracion"]=this.getSeconds(doc.get('horaSalida'))-this.getSeconds(doc.get('horaInicio'))/1000
        list.push(data)
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
        let dates=this.getTime(doc.get('horaUso'))
        let data=doc.data();
        data["dates"]=dates;
        list.push(data)
      });

      // Ejecutar la función callback con los datos actualizados
      callback(list);
    });

    // Puedes devolver `unsubscribe` si deseas detener la escucha en algún momento
    return unsubscribe;
  }

  getTime(str:string){
    // Obtener la hora y los minutos
    let date= new Date(str);
    let horas = date.getHours().toString().padStart(2, '0');   // Devuelve las horas en formato 2 dígitos
    let minutos = date.getMinutes().toString().padStart(2, '0'); // Devuelve los minutos en formato 2 dígitos

    let dates={
      "y":date.getFullYear(),
      "m":date.getMonth(),
      "d":date.getDay(),
      "h":`${horas}:${minutos}`
    };
    // Formato hh:mm
    return dates;
 }

 getSeconds(str:string){
  let date=new Date(str);
  return date.getTime()

 }

}
