import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  imports: [],
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
}
