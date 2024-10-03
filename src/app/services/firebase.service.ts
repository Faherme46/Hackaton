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
    this.firebaseConfig = {
      apiKey: "AIzaSyAzk5jJJIDZc0HKoI_NtLHDIP9u7y-HXEo",
      authDomain: "hackaton-188e9.firebaseapp.com",
      projectId: "hackaton-188e9",
      storageBucket: "hackaton-188e9.appspot.com",
      messagingSenderId: "662436821049",
      appId: "1:662436821049:web:05543140281cc38db4f5e8",
      measurementId: "G-SBD25CY4RH"
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
        list.push(doc.data());
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
        list.push(doc.data());
      });

      // Ejecutar la función callback con los datos actualizados
      callback(list);
    });

    // Puedes devolver `unsubscribe` si deseas detener la escucha en algún momento
    return unsubscribe;
  }

  public getDate(str:string ){
    
  }

}
