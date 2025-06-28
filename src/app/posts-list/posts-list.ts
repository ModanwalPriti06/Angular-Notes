import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { User } from "../user/user";

@Component({
  selector: 'app-posts-list',
  imports: [JsonPipe, User],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css'
})
export class PostsList {

  childMessage: string = 'Hello from Child Data'
  postCount: number = 0
  parentMessage: string = 'Button click from child and send to parent'

  @Output() MessageEvent = new EventEmitter();
  sendMessage(){
    this.MessageEvent.emit(this.parentMessage) 
  }

  @Input() childUser : any;
}
