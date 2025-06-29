import { Component, ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, NgComponentOutlet, NgIf, NgTemplateOutlet, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { PostsList } from './posts-list/posts-list';
import { Card } from "./card/card";
import { Profile } from './profile/profile';
import {UserService} from './services/user.service'
import {PostService} from './services/post'
import { Post } from './interfaces/post';

@Component({
  selector: 'app-root',
  imports: [Login, PostsList,Card, FormsModule, NgIf, NgTemplateOutlet, Card, NgComponentOutlet, Profile, UpperCasePipe, LowerCasePipe, TitleCasePipe, DecimalPipe, PercentPipe, CurrencyPipe, DatePipe, JsonPipe, 
    SlicePipe, FormsModule
  ],
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
        console.log('ngAfterViewInit-----',this.childMessage);
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

// NgOnChange  can uncomment but using another constructir that is why comment
// constructor(private viewContainer: ViewContainerRef){}
// loadComponent(){
//   this.viewContainer.createComponent(PostsList)
// }

// removeComponent(){
//   this.viewContainer.remove()
// }

changeUser(){
  this.userName = 'John Doe'
}

// NgOnInit check in profile.ts

// pipe
uppercasePipe: string = 'Upper Case Pipe'
lowercasePipe: string = 'HELLO PRITI LOWERCASE PIPE'
today: Date =  new Date();
  myUser: any = {
    name: 'Kizie',
    age: 23
  }

  convertJson(){
    this.myUser = JSON.stringify(this.myUser)
  }

  // services
  users: Array<any> = [
  { name: 'John Doe', age: 30, email: 'john@doe.com' },
  { name: 'John Smith', age: 20, email: 'john@smith.com' },
  { name: 'Lisa Ann', age: 50, email: 'lisa@ann.com' },
  { name: 'Sam Smith', age: 40, email: 'sam@smith.com' }
];


// userServices example
userService: any;
posts: Array<any> = [];

// constructor(){
//   this.userService = new UserService();
//   console.log('this.userService',this.userService)
// }

constructor(private userServiceDI: UserService, private postServiceDI: PostService){
  this.userService = userServiceDI;
  this.posts = postServiceDI.getPost();
}

addPost(){
  let postData:Post = {
    id:7,
    title: 'Lorem',
    post: 'Dummy Post'
  }

  this.postServiceDI.addPostService(postData)
}


// Angular From

formSubmit(event: any){
  // event.preventDefault();
  console.log(event.value);
  console.log('form submitted successfully!')
}

getValue(fullName: any){
  console.log(fullName)
}
}

