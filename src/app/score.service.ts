import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { inflateRaw } from 'zlib';

interface Score {
  puntaje: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private firestore: Firestore) { }

  addScore(score: any) {
    const placeRef = collection(this.firestore, 'score');
    return addDoc(placeRef, score);
  }
  
}
