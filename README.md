# Angular-Notes

# What is Angular?
- Angular is a TypeScript-based front-end framework developed by Google for building single-page web applications (SPAs). It uses components, dependency injection, and two-way data binding to create dynamic and scalable web apps.
- A framework building client application in HTML, CSS Javascript/Typescript.

**SPA(Single Page Application):** An app that doesn't need to reload the page during it's use and work with the browswer. 

# Why use
- Give our application a clean structure
- Re-usable lots of Code
- Single page application
- Easy to maintain and Read
- Make our application more testable
1. Two-Way Data Binding – Keeps UI and data in sync automatically.
2. Component-Based Architecture – Reusable and maintainable code.
3. Dependency Injection – Easy to manage services and dependencies.
4. Built-in Routing – Helps build single-page apps with multiple views.
5. TypeScript Support – Better tooling, type checking, and cleaner code.
6. Powerful CLI – Speeds up development with commands for components, services, etc.
7. Cross-Platform – Can build web, mobile, and desktop apps.

# Architecture
![image](https://github.com/user-attachments/assets/39a613f9-5c52-4de1-a3b9-c1bd76d78475)

## Modules
- A Module is a unit that consists of a separate block to perform specific functionality and enables us to break down the application into smaller chunks.
- In a module, we can export & import the components and services from other modules.
- Modules are created using the @NgModule decorator.
### Types of Modules:
1. Core Module/Root Module:
- Every Angular application must have at least one root module, which is called the AppModule, defined in the app.module.ts file.
- The root module is the top-level module in an Angular application.
- It imports all of the other modules in the application.
2. Feature Module:
- Feature modules are used to group related components, directives, pipes, and services together.
3. Shared Module:
- The most commonly used functionality will be present in the shared module which can be imported by the feature module whenever needed.

```
import { NgModule } from '@angular/core';
import { BrowserModule } 
    from '@angular/platform-browser';

import { AppRoutingModule }
    from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Components
- A Component is the building block of the angular application.
- A component consists of a template(HTML view of UI), styles(CSS appearance/design) and a typescript class which contains business logic.
- To indicate a class as component @Component decorator is used.
- The @Component decorator provides metadata to the component.
- The component metadata properties consist of selectors, directives, providers, styleUrls and templateUrls.
```
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'AngularApp';
}
```
## Templates
- The user interface or the view of the end users is defined using the template.
- Templates are created using HTML and it binds the component properties and methods thus helping us to render data dynamically.
- Template syntax includes directives, interpolation, built-in directives, template expression operators, property binding, and event binding for creating dynamic and interactive views.
```
<h2>Welcome to GeeksForGeeks</h2>

<p>Angular Architecture consists of :</p>
<ul>
    <li>Modules</li>
    <li>Components</li>
    <li>Templates</li>
    <li>Directives</li>
    <li>Services</li>
    <li>Dependency Injection(DI)</li>
    <li>Router</li>
    <li>HTTP Client</li>
    <li>State Management</li>
</ul>
```
## Directives
- Directives are instructions in the DOM (Document Object Model).
- Directives are used in templates to customize the behaviour of the elements.
- Angular provides built-in directives like *ngIf and *ngFor, as well as custom directives created by developers.
### Types of directives:
1. Component Directives
  - These directives are associated with the template(view) of a component.
2. Structural Directives
  - These directives are used to change the structure of the DOM using *ngFor,*ngSwitch and *ngIf.
3. Attribute Directives
  - These directives are used to change the behaviour of the DOM using ngStyle,ngModel and ngClass.
4. Custom Directives
  - We can create custom directives using @Directive decorator and define the desired behaviour in the class.

## Services
- Services are used when specific data or logic needs to be used across different components.
- Services are typically used to centralize data access, HTTP requests, state management, and other common tasks.
- Services are singleton and are registered with Angular's dependency injection system.
- Components can inject services to access their functionality and data.
- command to create:
```ng generate service counter```
```
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CounterService {
    private count = 0;

    increment(): void {
        this.count++;
    }

    getCount(): number {
        return this.count;
    }
}
```
## Dependency Injection(DI)
- Dependency injection simplifies dependency management, facilitates code reusability and simplifies testing.
- DI is a design pattern which increases the flexibility and modularity of the applications by producing and distributing specific parts of the application to other parts of the application that need them.
- We can inject services, configuration values, and other objects into components and services.
- Components and services can declare their dependencies and have them injected automatically using @Injectable decorator.
  
## Router
- The Angular Router manages navigation within the application for changing from one view to another view.
- Routes are defined in the app-routing.module.ts file and map to specific components.
- The router also supports route parameters, route guards, and child routes for creating complex navigation structures.
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } 
    from '@angular/router';
import { EmployeeListComponent } 
    from './employee-list/employee-list.component';
import { CreateEmployeeComponent } 
    from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } 
    from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } 
    from './employee-details/employee-details.component';

const routes: Routes = [
    { path: 'employees', 
      component: EmployeeListComponent },
    { path: 'create-employee', 
      component: CreateEmployeeComponent },
    { path: '', redirectTo: 'employees', 
      pathMatch: 'full' },
    { path: 'update-employee/:id',
      component: UpdateEmployeeComponent },
    { path: 'employee-details/:id', 
      component: EmployeeDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
```
## State Management
- State management in angular is achieved using RxJS (Reactive Extensions for JavaScript).
- RxJS is used for handling asynchronous operations, such as handling HTTP requests, user interactions, and event-driven programming.
- Streams of data and events are managed by Observables which is provided by RxJS.
  
## HTTP Client
- HTTP client module in angular is used for making HTTP requests to interact with backend services(API calls) to fetch or send data.
```
import { Component, OnInit } 
    from '@angular/core';
import { HttpClient } 
    from '@angular/common/http';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
    posts: any[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http
            .get < any[] > (
            'https://jsonplaceholder.typicode.com/posts')
                .subscribe((data) => {
                    this.posts = data;
                });
    }
}
```


# 1 Start Created Angular App
- install node
- instal angular cli - [npm install -g @angular/cli], [sudo npm install @angular/cli]  (So If you not using / here then angular cli will be install only for current folder)
- ng new project_name
- goto vs code and install code path click - shift+cmd+p then enter code and install shell commond
- goto project path in terminal and code . (Now your vs code will be open)
- ng serve ( terminal to run application)
  
# 2 Steps to Create the Application

1. Step 1 : Install the Angular CLI using the following command
    - npm install -g @angular/cli
2. Step 2: Create a new Angular Project.
    - ng new new-project
    - cd new-project
3. Step 3: To start the application run the following command.
    - ng serve














