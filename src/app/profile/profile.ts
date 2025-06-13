import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked {

  // ngOnChange
  @Input() pUserName: string = ''

  ngOnChanges() {
    console.log('ng- triggered')
  }

  // ngOnInit
  ngOnInit(){
    console.log('ng on init triggered')
  }

  // ngDOCheck
  ngDoCheck() {
    console.log('ng do check log triggered')
  }

  // ngAfterContentInit
  ngAfterContentInit(){
    console.log('after content triggered')
  }

  // ngAFtercontentchcked
  ngAfterContentChecked(){
        console.log('after content checked')
  }

}
