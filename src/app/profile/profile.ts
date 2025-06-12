import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnChanges {
  @Input() pUserName: string = ''

  ngOnChanges() {
    console.log('ng- triggered')
  }

}
