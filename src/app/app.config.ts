import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"casamiento-421cf","appId":"1:918933786015:web:065c606e938ec852e7c1aa","storageBucket":"casamiento-421cf.appspot.com","apiKey":"AIzaSyBiDDOxN8uQGl4MOTH_Idzyy6o9zlT4w0I","authDomain":"casamiento-421cf.firebaseapp.com","messagingSenderId":"918933786015"})), provideFirestore(() => getFirestore())]
};
