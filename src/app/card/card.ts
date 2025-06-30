import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [ FormsModule, ReactiveFormsModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  
  userForm  = new FormGroup({
    fName : new FormControl('', [Validators.required, Validators.minLength(3)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    address : new FormControl('', [Validators.required, Validators.minLength(10)])

  });
  constructor(){
  }

  handleSubmit(){
    console.log(this.userForm);
  }
}
