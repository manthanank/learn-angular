# Learn Angular

<!-- ![Logo](./assets/angular.svg) -->

## Contents

- [Introduction](#introduction)
- [Roadmap](#roadmap---link)
- [Configuration](#configuration)
- [Components](#components)
- [Data Binding](#data-binding)
- [Directives](#angular-directives)
- [Pipes](#pipes)
- [Decorators](#decorators)
- [Life Cycle Hooks](#life-cycle-hooks)
- [Forms](#forms)
- [Http](#http)
- [Module](#module)
- [Router](#router)
- [Observables](#observables-in-angular)
- [JIT](#jit)
- [AOT](#aot)
- [Learn From GitHub Repositories](#learn-more-from-github-repositories)
- [Learn From Websites](#learn-more-from-websites)
- [Learn From Books](#learn-more-from-books)
- [Learn From YouTube Channels](#learn-from-youtube-channels)
- [Learn More From Blogs Sites](#learn-more-from-blogs-sites)
- [List of Online Compilers/Editors](#list-of-online-editorscompiler)
- [List of Twitter Users](#list-of-twitter-users)
- [List of LinkedIn Users](#list-of-linkedin-users)

Other Pages

- [CLI Commands](/cli-commands.md)
- [Snippets](/snippets.md)
- [Imports](/imports.md)
- [RxJs](/rxjs.md)
- [TypeScript](/typescript.md)

## Introduction

**Angular** is a platform and framework for building single-page client applications using HTML and TypeScript.

AngularJS vs Angular

| AngularJS | Angular |
|-----|-----|
|Based on MVC Architecture|Based on Components|
|Uses JavaScript to build the application| Uses TypeScript to build the application|
|No Mobile Support|Mobile supports|
|Run on only client-side|Runs on both client-side as well as server-side|
|CLI not present|CLI present|
|No SEO Friendly|Seo Friendly|

## Roadmap - [Link](https://roadmap.sh/angular)

## Configuration

### Prerequisites

- Node.js

### Installation

Install the Angular CLI globally:

```jsx
npm install -g @angular/cli
```

Check version

```jsx
ng version
```

Create workspace:

```jsx
ng new [PROJECT NAME]
```

Run the application:

```jsx
cd [PROJECT NAME]
ng serve
```

## Components

Component is the main building block of an Angular Application.

### Three main building blocks

- Template
- Class
- Metadata

**Template** - Defines the layout and content of the View.

**Class** - Class provides the data & logic to the View.

**MetaData** - Metadata Provides additional information about the component to the Angular.

### Component metadata properties

- Selector
- Providers
- Styles
- StyleUrls
- Template
- TemplateUrl

**Selector** - Defines the element name or CSS selector that identifies the component in the HTML template.

**Providers** - Defines the providers of the component's dependencies.

**styles** - Defines the inline styles for the component.

**styleUrls** - Defines an array of URLs of the stylesheets for the component.

**template** - Defines the HTML template for the component.

**templateUrl** - Defines the URL of the HTML template for the component.

## Component Creation

Steps are:

1. Navigate to your Angular project directory.
2. Create a new file, `<component-name>`.component.ts.
3. At the top of the file, add the following import statement.

    ```jsx
    import { Component } from '@angular/core';
    ```

4. After the import statement, add a @Component decorator.

    ```jsx
    @Component({
    })
    ```

5. Choose a CSS selector for the component.

    ```jsx
    @Component({
      selector: 'test-component',
    })
    ```

6. Define the HTML template that the component uses to display information. In most cases, this template is a separate HTML file.

    ```jsx
    @Component({
      selector: 'test-component',
      templateUrl: './test-component.component.html',
    })
    ```

7. Select the styles for the component's template. In most cases, you define the styles for your component's template in a separate file.

    ```jsx
    @Component({
      selector: 'test-component',
      templateUrl: './component.component.html',
      styleUrls: ['./component.component.css']
    })
    ```

8. Add a class statement that includes the code for the component.

    ```jsx
    export class TestComponent {

    }
    ```

9. Register the Component in Angular Module -

    ```typescript
    import { TestComponent } from './app.component';
    ```

    ```typescript
    @NgModule({ 
      declarations: [ TestComponent ]
    })
    ```

Complete code for the component creation

```typescript
//test-component.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})

export class TestComponent {

}
```

```typescript
//app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import { TestComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**Creating the inline Template & StyleUrls** -

```typescript
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: '<h1> {{title}} works </h1>',
  styles: ['h1 { font-weight: bold; }']
})
export class AppComponent {
  title = 'app';
}
```

[Back to top??????](#contents)

## Data binding

### 1. One way binding

### a. From Component to View

**Interpolation** -

```html
<h1>{{ firstText }} {{ lastText }}</h1>
```

```jsx
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  firstText = 'Interpolation';
  lastText = 'Example';
}
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-zu564w?file=src%2Fapp%2Fapp.component.ts)

**Property binding** - This allows for binding a property of an HTML element to a property in the component's class. It is denoted by square brackets ([]).

```html
<h1 [innerText]="title"></h1>

<button [disabled]="isDisabled">I am disabled</button>
```

```jsx
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Property Binding Example';

  isDisabled = true;
}
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-vcpyoq?file=src/app/app.component.ts)

class binding

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
```

```html
<div [class.active]="isActive">This div is active.</div>
<button (click)="toggleActive()">Toggle Active</button>
```

```css
.active {
  background-color: yellow;
}
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-s1pkwg?file=src/app/app.component.ts)

style binding

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  backgroundColor = 'red';
  textColor = 'white';
}
```

```html
<div [style.background-color]="backgroundColor">
  <h1 [style.color]="textColor">Hello, world!</h1>
</div>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-w8nf7f?file=src/app/app.component.ts)

attribute binding

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imageUrl = 'https://example.com/image.jpg';
  imageAlt = 'Example image';
  isButtonDisabled = false;
}
```

```html
<img [attr.src]="imageUrl" [attr.alt]="imageAlt">
<button [attr.disabled]="isButtonDisabled">Click me</button>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-bhqsgc?file=src/app/app.component.html)

### b. From View to Component

**Event binding** - This allows for binding an event of an HTML element to a method in the component's class. It is denoted by parentheses (()).

```jsx
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  onClick() {
    console.log('Button was clicked');
  }
}
```

```html
<h1>Event Binding Example</h1>
<button (click)="onClick()">Click me</button>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-kxuxsk?file=src/app/app.component.ts)

### 2. Two ways binding

This allows for binding a property of an HTML element to a property in the component's class and vice-versa. This is done by using a combination of property binding and event binding. It is denoted by `[(ngModel)]`.

**ngModel** -

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
}
```

```html
<input [(ngModel)]="name" placeholder="Enter your name">
<p>Your name is: {{name}}</p>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-wrru3d?file=src/app/app.component.ts)

[Back to top??????](#contents)

## Angular Directives

Directives add behaviour to an existing DOM element or an existing component instance.

### Structural DIrectives -

**ngFor** -

```html
<h1>ngFor Example</h1>
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  items = ['item 1', 'item 2', 'item 3'];
}
```

**ngSwitch** -

```html
<h1>ngSwitch Example</h1>
<div [ngSwitch]="value">
  <div *ngSwitchCase="1">Case 1</div>
  <div *ngSwitchCase="2">Case 2</div>
  <div *ngSwitchCase="3">Case 3</div>
  <div *ngSwitchDefault>Default case</div>
</div>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value = 1;
}
```

**ngIf** -

```html
<h1>ngIf Example</h1>
<div *ngIf="showElement">
  This element will only be displayed if showElement is true.
</div>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showElement = true;
}
```

### Attribute Directives

**ngModel** -

```html
<h1>ngModel Example</h1>
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" [(ngModel)]="name" name="name" />
</form>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
}
```

**ngClass** -

```html
<h1>ngClass Example</h1>
<div [ngClass]="{ highlighted: isHighlighted }">
  This element will have the 'highlighted' class if isHighlighted is true.
</div>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isHighlighted = true;
}
```

**ngStyle** -

```html
<h1>ngStyle Example</h1>
<div [ngStyle]="{ color: color }">
  This element will have the color style set to the value of the color property.
</div>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  color = 'red';
}
```

### Custom Directives

```html
<h1>Custom Directive Element</h1>
<div appCustomDirective>
  This element will have a yellow background when the mouse is over it.
</div>
```

```typescript
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
})
export class CustomDirectiveDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './custom-directive.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CustomDirectiveDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

[Back to top??????](#contents)

## Pipes

A pipe takes in data as input and transforms it to a desired output.

Syntax

```bash
Expression | pipeOperator[:pipeArguments]

# Expression: is the expression, which you want to transform
# | : is the Pipe Character
# pipeOperator : name of the Pipe
# pipeArguments: arguments to the Pipe
```

Date Pipe

```html
<h1>Date Pipe Example</h1>
<p>{{ date | date: 'shortDate' }}</p>
```

```ts
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  date = new Date();

  constructor(private datePipe: DatePipe) {}

  formatDate() {
    return this.datePipe.transform(this.date, 'shortDate');
  }
}
```

```ts
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [DatePipe],
})
export class AppModule {}
```

Uppercase Pipe

```html
<h1>Upper Case Pipe Example</h1>
<p>{{ name | uppercase }}</p>
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Manthan Ank';
}
```

Lowercase Pipe

```html
<p>{{ name | lowercase }}</p>
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Manthan Ank';
}
```

Currency Pipe

```html
<h1>Currency Pipe Example</h1>
<p>{{ price | currency }}</p>
```

```ts
import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  price = 100;

  constructor(private currencyPipe: CurrencyPipe) { }

  formatCurrency() {
    return this.currencyPipe.transform(this.price, 'USD', true);
  }
}
```

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [CurrencyPipe],
})
export class AppModule {}
```

Percent Pipe

```html
<h1>Percent Pipe Example</h1>
<p>{{ percentage | percent }}</p>
```

```ts
import { PercentPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  percentage = 0.5;

  constructor(private percentPipe: PercentPipe) {}

  formatPercentage() {
    return this.percentPipe.transform(this.percentage, '2');
  }
}
```

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PercentPipe } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [PercentPipe],
})
export class AppModule {}
```

Slice Pipe

```typescript
<p>{{ ['apple', 'banana', 'orange', 'mango'] | slice:1:3 }}</p>
```

Decimal/number Pipe

```html
<p>{{ 123456.78 | number:'3.2-3' }}</p>
```

[Back to top??????](#contents)

## Decorators

Decorators are design patterns used to isolate the modification or decoration of a class without modifying the source code.

**Input** -

```ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message: string;
  constructor() { }

  ngOnInit() {
    
  }

}
```

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  parentMessage = 'Hello from the parent component!';
  constructor() {}

  ngOnInit() {}
}
```

```html
<p>{{ message }}</p>
```

```html
<app-child [message]="parentMessage"></app-child>
```

```html
<h1>@Input Example</h1>
<app-parent></app-parent>
```

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule],
  declarations: [AppComponent, ChildComponent, ParentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**Output** -

```ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  sendMessage() {
    this.messageEvent.emit('Hello from the child component!');
  }
}
```

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleMessage(message: string) {
    console.log(message);
  }
}
```

```html
<button (click)="sendMessage()">Send message</button>
```

```html
<app-child (messageEvent)="handleMessage($event)"></app-child>
```

```html
<h1>@Output Decorator Example</h1>
<app-parent></app-parent>
```

HostListener

```html
<h1>@HostListener Decorator Example</h1>
<p>Click the host element to trigger the 'click' event.</p>
```

```ts
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @HostListener('click')
  onClick() {
    console.log('The host element was clicked!');
  }
}
```

contentChild & contentChildren

```ts
import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  @ContentChild('childButton1', { static: true }) childButton1: ElementRef;
  @ContentChildren('childButton2') childButtons2: QueryList<ElementRef>;

  ngAfterContentInit() {
    console.log(this.childButton1.nativeElement.textContent);
    this.childButtons2.forEach((button) => {
      console.log(button.nativeElement.textContent);
    });
  }

  constructor() {}

  ngOnInit() {}
}
```

```html
<ng-content></ng-content>
```

```html
<h1>@ContentChild Decorator Example</h1>
<app-parent></app-parent>
```

viewChild & viewChildren

```ts
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('childButton1', { static: true }) childButton1: ElementRef;
  @ViewChildren('childButton2') childButtons2: QueryList<ElementRef>;

  ngAfterViewInit() {
    console.log(this.childButton1.nativeElement.textContent);
    this.childButtons2.forEach(button => {
      console.log(button.nativeElement.textContent);
    });
  }
}
```

```html
<h1>@viewChild & @viewChildren Example</h1>
<button #childButton1>Button 1</button>
<button #childButton2>Button 2</button>
```

[Back to top??????](#contents)

## Life Cycle Hooks

![lifecycle-hooks](/src/assets/lifecycle-hooks.png)

**ngOnChanges** - It is called when any data-bound property of a directive or component changes.

```html
<form>
  <input [(ngModel)]="message" name="message" />
  <button type="submit" (click)="onSubmit()">Submit</button>
</form>
<p>{{ message }}</p>
```

```ts
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnChanges {
  @Input() message: string;
  prevMessage: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.message) {
      console.log(
        `message changed from ${changes.message.previousValue} to ${changes.message.currentValue}`
      );
    }
  }

  onSubmit() {
    this.prevMessage = this.message;
  }
}
```

```html
<app-test  [message]="'Hello World'"></app-test>
```

[Stackblitz Link](https://stackblitz.com/edit/angular-ivy-19r5mc?file=src/app/test/test.component.ts)

**ngOnInit** - It is called after a component has been initialized and its data-bound properties have been checked for the first time.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  ngOnInit() {
    console.log('logged from ngOnInit');
  }
}
```

[Stackblits Link](https://stackblitz.com/edit/angular-ivy-hkmssz?file=src/app/app.component.html)

**ngDoCheck** - It is called during every change detection cycle. It allows a component to detect and act upon changes that Angular can't detect on its own.

```ts
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  ngDoCheck() {
    console.log('ngDoCheck Called');
  }
}
```

[Stackblitz Link](https://stackblitz.com/edit/angular-ivy-f5msas?file=src/app/app.component.ts)

**ngAfterViewInit** - It is called after app has fully initialized a component's view.

```ts
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit{
  
  ngAfterViewInit(){
    console.log("after view init")
  }
  clickMe(){
    console.log("link clicked")
  }
}
```

```html
<a (click)="clickMe()">Click me</a>
```

[Stackblitz Link](https://stackblitz.com/edit/angular-wscf59?file=src/main.ts)

**ngAfterViewChecked** - It is called after the default change detector has completed checking a component's view for changes.

```ts
import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewChecked {
  ngAfterViewChecked(){
    console.log("after view checked")
  }
  clickMe(){
    console.log("link clicked")
  }
}
```

```html
<a (click)="clickMe()">Click me</a>
```

[Stackblitz Link](https://stackblitz.com/edit/angular-wnwfnv?file=src/main.ts)

**ngAfterContentInit** - It is called after Angular has fully initialized all content of a directive.

```ts
import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentInit {
  ngAfterContentInit() {
    console.log('after content init');
  }
  clickMe() {
    console.log('clicked');
  }
}
```

```html
<a (click)="clickMe()">Click me</a>
```

[Stackblitz Link](https://stackblitz.com/edit/angular-qhy7cw?file=src/main.ts)

**ngAfterContentChecked** - It is called after the default change detector has completed checking all content of a directive.

```ts
import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentInit {
  ngAfterContentChecked() {
    console.log('after content init');
  }
  clickMe() {
    console.log('clicked');
  }
}
```

```html
<a (click)="clickMe()">Click me</a>
```

[Stackblitz Link](https://stackblitz.com/edit/angular-ryx2uh?file=src/main.ts)

**ngOnDestroy** - It is called just before a component or directive is destroyed. It is a good place to clean up any subscriptions or detach any event handlers to avoid memory leaks.

```ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  ngOnInit() {
    const someObservable = of(1, 2, 3);
    this.subscription = someObservable.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
```

[Stackblitz Link](https://stackblitz.com/edit/angular-ivy-urqida?file=src/app/app.module.ts)

[Back to top??????](#contents)

## Forms

### Template Driven Form

```html
<form (ngSubmit)="onSubmit()" #form="ngForm">
    <input [(ngModel)]="name" name="name" required>
    <button type="submit">Submit</button>
</form>
```

Example

```html
<!-- form template -->
<form (ngSubmit)="onSubmit(form)" #form="ngForm">
  <label>
    Name:
    <input type="text" [(ngModel)]="name" name="name" required>
  </label>
  <br>
  <label>
    Email:
    <input type="email" [(ngModel)]="email" name="email" required>
  </label>
  <br>
  <button type="submit" [disabled]="!form.valid">Submit</button>
</form>
```

```typescript
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  email: string;

  onSubmit(form: NgForm) {
    console.log(form.value); // { name: 'your name', email: 'your email' }
    console.log(form.valid); // true
  }
}
```

### Reactive Form

Basic Form Control

```typescript
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    // other imports ...
    ReactiveFormsModule
  ],
})
export class AppModule { }
```

```typescript
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  name = new FormControl('');
}
```

```html
<label for="name">Name: </label>
<input id="name" type="text" [formControl]="name">
```

To display form control values

```html
{{ name.value }}
```

To replace the form control value

```html
<button (click)="update()">Update</button>
```

```typescript
update(){
  this.name.setValue('Manthan');
}
```

Form Group

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}
```

```html
<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
  <div>
    <label for="first-name">First Name: </label>
    <input id="first-name" type="text" formControlName="firstName">
  </div>
  <div>
    <label for="last-name">Last Name: </label>
    <input id="last-name" type="text" formControlName="lastName">
  </div>
</form>
<p>Complete the form to enable button.</p>
<button type="submit" [disabled]="!profileForm.valid">Submit</button>
```

Nested form groups

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
}
```

```html
<div formGroupName="address">
  <h2>Address</h2>

  <label for="street">Street: </label>
  <input id="street" type="text" formControlName="street">

  <label for="city">City: </label>
  <input id="city" type="text" formControlName="city">

  <label for="state">State: </label>
  <input id="state" type="text" formControlName="state">

  <label for="zip">Zip Code: </label>
  <input id="zip" type="text" formControlName="zip">
</div>
```

## Forms Validation

```typescript

```

## HTTP

Import HttpClient Module in Root Module -

```typescript
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Import Required Module in Component/Service -

```typescript
import { HttpClient } from '@angular/common/http';
```

Inject HttpClient service -

```typescript
constructor(public http: HttpClient) {
}
```

### HTTP GET

```typescript
getData(){
  return this.http.get('url');
}
```

### HTTP POST

```typescript
sendData(data: any){
  return this.http.post('url', data);
}
```

### HTTP PUT

```typescript
updateData(data: any){
  return this.http.put('url', data);
}
```

### HTTP PATCH

```typescript
updateData(data: any){
  return this.http.patch('url', data);
}
```

### HTTP DELETE

```typescript
deleteData(id: string){
  return this.http.delete(`url/${id}`);
}
```

### HTTP Interceptor

Http Interceptors are part of @angular/common/http, which inspect and transform HTTP requests from your application to the server and vice-versa on HTTP responses. These interceptors can perform a variety of implicit tasks, from authentication to logging.

```typescript

```

### Using Observable

```typescript
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MyService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>('utl');
  }

  sendData(data: any): Observable<any> {
    return this.http.post<any>('utl', data);
  }

  updateData(data: any): Observable<any> {
    return this.http.put<any>('utl', data);
  }

  updateData(data: any): Observable<any> {
    return this.http.patch<any>('utl', data);
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`utl/${id}`);
  }
}
```

## Module

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page-1/page-1.component';
import { Page2Component } from './page-2/page-2.component';

const routes: Routes = [
  { path: 'page-1', component: Page1Component },
  { path: 'page-2', component: Page2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

```html
<h1>Routing Example</h1>
<a routerLink="page-1">Page-1</a> &nbsp;
<a routerLink="page-2">Page2-</a>
<router-outlet></router-outlet>
```

### Lazy loading

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'page-1',
    loadChildren: () =>
      import('./page-1/page-1.module').then((m) => m.Page1Module),
  },
  {
    path: 'page-2',
    loadChildren: () =>
      import('./page-2/page-2.module').then((m) => m.Page2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page-1.component';

const routes: Routes = [
  {
    path: '',
    component: Page1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page1RoutingModule {}
```

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page-1.component';
import { Page1RoutingModule } from './page-1-routing.module';

@NgModule({
  imports: [CommonModule, Page1RoutingModule],
  declarations: [Page1Component],
})
export class Page1Module {}
```

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './page-2.component';

const routes: Routes = [
  {
    path: '',
    component: Page2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page2RoutingModule {}
```

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page-2.component';
import { Page2RoutingModule } from './page-2-routing.module';

@NgModule({
  imports: [CommonModule, Page2RoutingModule],
  declarations: [Page2Component],
})
export class Page2Module {}
```

```html
<h1>Lazy Loading Example</h1>
<a routerLink="page-1">Page-1</a> &nbsp;
<a routerLink="page-2">Page-2</a>
<router-outlet></router-outlet>
```

## Router

Angular Router is a mechanism in which navigation happens from one view to the next as users perform application tasks. It borrows the concepts or model of browser's application navigation.

```typescript

```

### Params

```jsx

```

## Services & Dependency Injection

**Services** -

A service is used when a common functionality needs to be provided to various modules. Services allow for greater separation of concerns for your application and better modularity by allowing you to extract common functionality out of components.

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }
}
```

**Dependency Injection** -

Dependency injection (DI), is an important application design pattern in which a class asks for dependencies from external sources rather than creating them itself.

## Routing Module

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
 
import { HomeComponent } from './home.component';
 
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
  ],
  providers: [],
})
export class HomeModule { }
```

## Routing Module -

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

## Observables in Angular

An observable is a class that can be used to handle asynchronous data streams. Observables are used to handle data that can arrive over time, such as data received from a server, user input, or timed events.

## Standalone Components

A standalone component is a type of component which is not part of any Angular module. It provides a simplified way to build Angular applications.

## JIT

Just-in-Time (JIT) is a type of compilation that compiles your app in the browser at runtime.

## AOT

Ahead-of-Time (AOT) is a type of compilation that compiles your app at build time.

## JIT vs AOT

![jitvsaot](./src/assets/jitvsaot.png)

## Route Guards

CanActivate

```typescript
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return false;
  }
}
```

CanDeactivate

```typescript

```

Resolve

```typescript

```

CanLoad

```typescript

```

CanActivateChild

```typescript

```

**ng-container** - A special element that can hold structural directives without adding new elements to the DOM.

```html
<ng-container>
  ......
</ng-container>
```

## Angular Universal

Angular Universal is a server-side rendering module for Angular applications in various scenarios. This is a community driven project and available under @angular/platform-server package.

```jsx
// create the application
ng add @nguniversal/express-engine

//run the application
npm run dev:ssr
```

## Angular Animations

Angular's animation system is built on CSS functionality in order to animate any property that the browser considers animatable. These properties includes positions, sizes, transforms, colors, borders etc. The Angular modules for animations are @angular/animations and @angular/platform-browser.

## Learn more from GitHub Repositories

- [Awesomw Angular](https://github.com/PatrickJS/awesome-angular)
- [Angular JumpStart](https://github.com/DanWahlin/Angular-JumpStart)
- [Angular Interview Questions by Sudheerj](https://github.com/sudheerj/angular-interview-questions)
- [Angular Learning Resources](https://github.com/avatsaev/angular-learning-resources)
- [CodAffection](https://github.com/CodAffection)
- [Bezkoder](https://github.com/bezkoder)
- [Angular Interview Questions by Yonet](https://github.com/Yonet/Angular-Interview-Questions)

## Learn more from Websites

- [Official Documentation](https://angular.io/)
- [Tektutorialshub](https://www.tektutorialshub.com/)
- [W3School](https://www.w3schools.com/)
- [GeeksForGeeks](https://www.geeksforgeeks.org/)
- [DevDocs](https://devdocs.io/)
- [Freecodecamp](https://www.freecodecamp.org/)
- [Javatpoint](https://www.javatpoint.com/)
- [Tutorialspoint](https://www.tutorialspoint.com/index.htm)
- [Udemy](https://www.udemy.com/)
- [YouTube](https://www.youtube.com)
- [Stackoverflow](https://stackoverflow.com)
- [NX Blog](https://blog.nrwl.io/angular/home)
- [Indepthdev](https://indepth.dev/angular)
- [Angular University](https://blog.angular-university.io/)
- [Bezkoder](https://www.bezkoder.com/)

## Learn more from Books

- [Angular From Theory To Practice](https://www.amazon.in/gp/product/B01N9S0CZN/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B01N9S0CZN&linkCode=as2&tag=tektutorialsh-21&linkId=80a3add2d10e438ee877f0812a370f80)
- [Angular in Action](https://www.amazon.in/gp/product/1617293318/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=1617293318&linkCode=as2&tag=tektutorialsh-21&linkId=03b773dca252208c495a23ff9a7a9658)
- [Ng-Book: The Complete Guide to Angular](https://www.amazon.in/gp/product/1985170280/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=1985170280&linkCode=as2&tag=tektutorialsh-21&linkId=61634c765c76ef908e150a0890dee4ab)
- [Pro Angular 6](https://www.amazon.in/gp/product/1484236483/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=1484236483&linkCode=as2&tag=tektutorialsh-21&linkId=5782a77503f4cbb8ec775b4f3dff8e2b)
- [Beginning Angular with Typescript](https://www.amazon.in/dp/B01N9ZUHBA/ref=olp-opf-redir?aod=1&ie=UTF8&camp=3638&creative=24630&creativeASIN=B01N9ZUHBA&linkCode=am2&tag=tektutorialsh-21&linkId=904b107f5a59c4150a4c1f414ad3bbe5)
- [Angular 6 for Enterprise-Ready Web Applications](https://www.amazon.in/dp/B078PNWRDN/ref=olp-opf-redir?aod=1&ie=UTF8&camp=3638&creative=24630&creativeASIN=B078PNWRDN&linkCode=am2&tag=tektutorialsh-21&linkId=920065d52a27f89347011de7586867ff)
- [ASP.NET Core 2 and Angular 5](https://www.amazon.in/dp/B0778LXCCQ/ref=olp-opf-redir?aod=1&ie=UTF8&camp=3638&creative=24630&creativeASIN=B0778LXCCQ&linkCode=am2&tag=tektutorialsh-21&linkId=dd160acb0338cf2704adbbf8e4d95126)
- [Angular Up & Running](https://www.amazon.in/gp/product/9352137426/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=9352137426&linkCode=as2&tag=tektutorialsh-21&linkId=1a5a75d4af830585e3f935a6b5c9a083)
- [Codecraft](https://codecraft.tv/courses/angular/)
- [Rangle.io](https://angular-training-guide.rangle.io/)
- [Angular 2 Succinctly](https://www.syncfusion.com/succinctly-free-ebooks/angular2-succinctly)
- [Angular2Book](https://goalkicker.com/Angular2Book/)

## Learn from YouTube Channels

- [Freecodecamp](https://www.youtube.com/@freecodecamp)
- [Programming With Mosh](https://www.youtube.com/@programmingwithmosh)
- [Traversy Media](https://www.youtube.com/@TraversyMedia)
- [Code With Harry](https://www.youtube.com/@CodeWithHarry)
- [Fireship](https://www.youtube.com/@Fireship)
- [Academind](https://www.youtube.com/@academind)
- [Decoded Frontend](https://www.youtube.com/@DecodedFrontend)
- [Brandon Roberts](https://www.youtube.com/@BrandonRobertsDev)
- [ARC Tutorials](https://www.youtube.com/@ARCTutorials)
- [Edureka](https://www.youtube.com/@edurekaIN)
- [Simplilearn](https://www.youtube.com/@SimplilearnOfficial)
- [Joshua Morony](https://www.youtube.com/@JoshuaMorony)
- [Codevolution](https://www.youtube.com/@Codevolution)
- [Code Step By Step](https://www.youtube.com/@codestepbystep)
- [UX Trendz](https://www.youtube.com/@uxtrendz)
- [Devstackr](https://www.youtube.com/@Devstackr)
- [David Acosta](https://www.youtube.com/@davidacosta4611)
- [Testy Codiez](https://www.youtube.com/@TestyCodiez)

## Learn More From Blogs Sites

- [Freecodecamp](https://www.freecodecamp.org/news)
- [Medium](https://medium.com/)
- [Dev.to](https://dev.to/)
- [Hashnode](https://hashnode.com/)

## List of Online Editors/Compiler

- [Stackblitz](https://stackblitz.com/)
- [CodeSandbox](https://codesandbox.io/)

## List of Twitter Users

- [Mosh](https://twitter.com/moshhamedani)
- [Minko Gechev](https://twitter.com/mgechev)

## List of LinkedIn Users

- [Kevin Kreuzer](https://www.linkedin.com/in/kevin-kreuzer-a63b39121/)
- [Aristeidis Bampakos](https://www.linkedin.com/in/aristeidisbampakos/)
- [Dmytro Mezhenskyi](https://www.linkedin.com/in/dmezhenskyi/)
- [Santosh Yadav](https://www.linkedin.com/in/santoshyadavdev/)
- [Tomas Trajan](https://www.linkedin.com/in/tomastrajan/)
- [Marko Stanimirovi??](https://www.linkedin.com/in/markostanimirovic/)
- [Teja Gandhamu](https://www.linkedin.com/in/tejagandhamu/)

### ????????Please Support and Don't Forget to give star???, Also Feel free to contribute
