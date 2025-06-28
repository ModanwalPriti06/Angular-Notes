import { Injectable } from "@angular/core";

@Injectable({
  providedIn : 'root'
})

export class UserService {
    // services
  users: Array<any> = [
  { name: 'John Doe', age: 30, email: 'john@doe.com' },
  { name: 'John Smith', age: 20, email: 'john@smith.com' },
  { name: 'Lisa Ann', age: 50, email: 'lisa@ann.com' },
  { name: 'Sam Smith', age: 40, email: 'sam@smith.com' }
];

constructor(){
  console.log('user services new instance created')
}

}