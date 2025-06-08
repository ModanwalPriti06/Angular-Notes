import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { FormsModule } from '@angular/forms';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, FormsModule, NgIf, NgTemplateOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'hello-world';

  // Class Binding
  isActive : boolean = false
  fruitName : string = 'Apple'

  // Event Binding
  eventButtonClick(){
    console.log('button clicked')
  }

  keyUpFunc(event: any){
    console.log('hii',event.target.value)
  }

  keyUpFilter(event: any){
      console.log(event.target.value)
  }

   keyUpAFilter(event: any){
      console.log(event.target.value)
  }
  
  // template variable
  tempVariable(user: HTMLInputElement){
    console.log(user.value)
  }

  // two way bindinf
  userName: string = 'Priit Modanwal'
  userRole: string = 'Admin1'

  twoWayDataBind(username: HTMLInputElement){
    this.userName = username.value
    console.log(this.userName)
  }

  loginCount: number = 0;
  countLoginItem(){
    this.loginCount++;
    console.log(this.loginCount)
  }

}

