import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common'; // Needed for *ngIf


@Component({
  selector: 'app-login',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault,NgStyle, NgClass],
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
  isLogged: boolean = true;
  isAdmin: boolean = false;
  isMember: boolean = false;
  isGuest: boolean = true;

  // ngfor Array
  users: Array<string> = ['Andrew', 'abell', 'john']

  // Fetch object
  userObj: Array<any> = [
    {id:0, name: 'priti', email: 'priti2gmail.com'},
    {id:0, name: 'kirti', email: 'kirti4212gmail.com'},
    {id:0, name: 'john', email: 'john68932gmail.com'},
    {id:0, name: 'smith', email: 'smith832gmail.com'},
  ]

  // add one more user
addUser(){
  let obj =  {id:5, name: 'Andrew', email: 'andrewsometh2w12gmail.com'}
  this.userObj.push(obj);
}

// delete functionality
onDelete(user: object){
  let index = this.userObj.indexOf(user);
  this.userObj.splice(index,1);
}

deleteFor(index: number){
    this.userObj.splice(index,1);
}

// switch directive
userRole: string = 'Admin'


}