import { Component, ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { FormsModule } from '@angular/forms';
import { NgComponentOutlet, NgIf, NgTemplateOutlet } from '@angular/common';
import { PostsList } from './posts-list/posts-list';
import { Card } from "./card/card";
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [Login, PostsList,Card, FormsModule, NgIf, NgTemplateOutlet, Card, NgComponentOutlet, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
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
  userName: string = 'Priti Modanwal'
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


  @ViewChild(PostsList) childMessage: any;
  message: string = '';

  // constructor(){
  //   console.log(this.childMessage);
  // }

  ngAfterViewInit(){
        console.log(this.childMessage);
        this.message = this.childMessage.childMessage
  }

  messageFromChild: string = ''
  receiveMessage(msg: string){
    console.log(msg)
    this.messageFromChild = msg

  }
// ------------------------LifeCycle--------------------------
// Loading(){
//   return PostsList;
// }

constructor(private viewContainer: ViewContainerRef){}
loadComponent(){
  this.viewContainer.createComponent(PostsList)
}

removeComponent(){
  this.viewContainer.remove()
}


changeUser(){
  this.userName = 'John Doe'
}


}

