import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';
interface Card {
  image: string;
  flipped: boolean;
  matched: boolean;
}
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  cards: Card[] = [];
  flippedCards: number[] = [];
  matchedCards: number[] = [];
  isFlipping = false;
  moves = 0;
  flippedIndexes: any;

  constructor(
    private scoreService: ScoreService) {
    this.loadImages()
    this.shuffleCards();
  }

  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5);
  }

  loadImages() {
    // Supongamos que tienes un arreglo de nombres de imágenes
    const imageNames = ['x1.jpeg', 'x2.jpeg', 'x3.jpeg', 'x4.jpeg', 'x5.jpeg', 'x6.jpeg'];

    // Duplica cada nombre de imagen para tener dos cartas de cada tipo
    const images = [...imageNames, ...imageNames];

    // Crea un objeto de carta para cada imagen y añádelo al arreglo de cartas
    this.cards = images.map(image => ({ image, flipped: false, matched: false }));
  }

  

  flipCard(index: number) {
    const card = this.cards[index];
    if (!this.isFlipping && this.flippedCards.length < 2 && !card.flipped && !card.matched) {
      card.flipped = true;
      this.flippedCards.push(index);

      if (this.flippedCards.length === 2) {
        this.isFlipping = true;
        setTimeout(() => {
          this.checkMatch();
          this.moves++;
        }, 500);
      }
    }
  }

  checkMatch() {
    const [cardIndex1, cardIndex2] = this.flippedCards;
    const card1 = this.cards[cardIndex1];
    const card2 = this.cards[cardIndex2];
    const isMatch = card1.image === card2.image;

    if (isMatch) {
      card1.matched = true;
      card2.matched = true;
      this.matchedCards.push(cardIndex1, cardIndex2);

      if (this.matchedCards.length === this.cards.length) {
        const playerName = prompt('¡Felicidades! Has ganado el juego. Por favor, ingresa tu nombre:');
        this.saveScore(playerName, this.moves);
        alert('Tu puntaje ha sido guardado en la nube. ¡Gracias por jugar!');
      }
    } else {
      card1.flipped = false;
      card2.flipped = false;
    }

    this.flippedCards = [];
    this.isFlipping = false;
  }





  async saveScore(playerName: string | null, moves: number) {
    await this.scoreService.addScore({ playerName, moves });
  }

}
