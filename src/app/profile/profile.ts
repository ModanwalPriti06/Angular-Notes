import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy{

  // ngOnChange
  @Input() pUserName: string = ''

  ngOnChanges() {
    console.log('-----ngOnChanges-----')
  }

  // ngOnInit
  ngOnInit(){
    console.log('---ngOnInit----')
  }

  // ngDOCheck
  ngDoCheck() {
    console.log('----ngDoCheck----')
  }

  // ngAfterContentInit
  ngAfterContentInit(){
    console.log('----ngAfterContentInit----')
  }

  // ngAFtercontentchcked
  ngAfterContentChecked(){
        console.log('---ngAfterContentChecked----')
  }

  // ngAfterview chcked
  ngAfterViewChecked(): void {
    console.log('------ngAfterViewChecked -----')
  }

  // ngOndestroy
  ngOnDestroy(){
    console.log('----ngOnDestroy----')
  }
}
