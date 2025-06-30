import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [ FormsModule, ReactiveFormsModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  fName = new FormControl();
  constructor(){
    console.log('pritii', this.fName)
  }

}
