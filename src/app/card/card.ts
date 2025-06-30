import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';

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
    address : new FormControl('', [Validators.required, Validators.minLength(10)]),
    hobbies: new FormArray([]),
  });

  hobbiesArray: FormArray =  this.userForm.get('hobbies') as FormArray; //get access outside
  constructor(){
  }

  handleSubmit(){
    console.log(this.userForm);
  }

  addHobby(hobby: string){
    // const hobbiesArray = this.userForm.get('hobbies') as FormArray;
    this.hobbiesArray.push(new FormControl(hobby))
    console.log(this.hobbiesArray.value); // ✅ will show the array
  }

  delete(index: number){
    this.hobbiesArray.removeAt(index)

  }
}
