import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // Needed for *ngIf


@Component({
  selector: 'app-login',
  imports: [NgIf],
  templateUrl: './login.html',
  standalone: true,
  styleUrl: './login.css',

})
export class Login {

  // String Interpolation
  name : string = 'Priti'
  email : string = 'pritivns612@gmail.com'

  // property Binding 
  imgUrl: string = 'https://images.unsplash.com/photo-1742832599361-7aa7decd73b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
  isDisabled: boolean = true

  // Directive
  isLogged:boolean = false

}
