# Learn Angular

This repository contains a list of resources to learn Angular. It includes tutorials, articles, videos, books, and other resources to help you learn Angular from scratch.

![npm](https://img.shields.io/npm/dw/learn-angular)
![npm](https://img.shields.io/npm/dm/learn-angular)
![npm](https://img.shields.io/npm/dy/learn-angular)
![npm](https://img.shields.io/npm/dt/learn-angular)
![GitHub issues](https://img.shields.io/github/issues/manthanank/learn-angular)
![GitHub pull requests](https://img.shields.io/github/issues-pr/manthanank/learn-angular)
![GitHub](https://img.shields.io/github/license/manthanank/learn-angular)
![GitHub last commit](https://img.shields.io/github/last-commit/manthanank/learn-angular)
![GitHub top language](https://img.shields.io/github/languages/top/manthanank/learn-angular)
![GitHub repo size](https://img.shields.io/github/repo-size/manthanank/learn-angular)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/manthanank/learn-angular)
![GitHub contributors](https://img.shields.io/github/contributors/manthanank/learn-angular)
![GitHub forks](https://img.shields.io/github/forks/manthanank/learn-angular)
![GitHub stars](https://img.shields.io/github/stars/manthanank/learn-angular)
![GitHub watchers](https://img.shields.io/github/watchers/manthanank/learn-angular)

## Table of Contents

- [Introduction](#introduction)
  - [Features of Angular](#features-of-angular)
  - [Difference between AngularJS vs Angular](#difference-between-angularjs-vs-angular)
  - [Angular vs React](#angular-vs-react)
- [Roadmap](#roadmap)
- [Configuration](#configuration)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Components](#components)
  - [Three main building blocks](#three-main-building-blocks)
  - [Component Creation](#component-creation)
    - [Using Angular CLI](#using-angular-cli)
    - [Manual Creation](#manual-creation)
    - [Example](#example)
  - [Scope](#scope)
  - [View Encapsulation](#view-encapsulation)
    - [Emulated View Encapsulation](#emulated-view-encapsulation)
    - [Shadow DOM View Encapsulation](#shadow-dom-view-encapsulation)
    - [None View Encapsulation](#none-view-encapsulation)
  - [Component Communication](#component-communication)
    - [Parent to Child](#parent-to-child)
    - [Child to Parent](#child-to-parent)
- [Data Binding](#data-binding)
  - [One Way Binding](#one-way-binding)
  - [Two Way Binding](#two-ways-binding)
- [Directives](#directives)
  - [Structural Directives](#structural-directives)
  - [Attribute Directives](#attribute-directives)
  - [Custom Directives](#custom-directives)
  - [Other Directives](#other-directives)
- [Pipes](#pipes)
  - [Date Pipe](#date-pipe)
  - [Uppercase Pipe](#uppercase-pipe)
  - [Lowercase Pipe](#lowercase-pipe)
  - [Currency Pipe](#currency-pipe)
  - [Percent Pipe](#percent-pipe)
  - [Slice Pipe](#slice-pipe)
  - [Decimal/number Pipe](#decimalnumber-pipe)
  - [JSON Pipe](#json-pipe)
  - [Async Pipe](#async-pipe)
- [Decorators](#decorators)
  - [Input](#input)
  - [Output](#output)
  - [HostListener](#hostlistener)
  - [ContentChild & ContentChildren](#contentchild--contentchildren)
  - [ViewChild & ViewChildren](#viewchild--viewchildren)
- [Life Cycle Hooks](#life-cycle-hooks)
  - [OnChanges](#onchanges)
  - [OnInit](#oninit)
  - [DoCheck](#docheck)
  - [AfterViewInit](#afterviewinit)
  - [AfterViewChecked](#afterviewchecked)
  - [AfterContentInit](#aftercontentinit)
  - [AfterContentChecked](#aftercontentchecked)
  - [OnDestroy](#ondestroy)
- [Forms](#forms)
  - [Template Driven Forms](#template-driven-forms)
  - [Reactive Forms](#reactive-forms)
- [Services](#services)
  - [Injectable Decorator](#injectable-decorator)
  - [Dependency Injection](#dependency-injection)
  - [Providers](#providers)
- [Routing](#routing)
  - [Router Outlet](#router-outlet)
  - [Router Link](#router-link)
  - [Router Link Active](#router-link-active)
  - [Router State](#router-state)
  - [Router Events](#router-events)
  - [Router Guards](#router-guards)
- [Lazy Loading](#lazy-loading)
- [HTTP Client](#http-client)
- [Destroy Ref](#destroy-ref)
- [Http](#http)
- [Module](#module)
- [Router](#router)
- [Route Parameter](#route-parameters)
- [Observables](#observables-in-angular)
  - [Creating Observables](#creating-observables)
  - [Subscribing to Observables](#subscribing-to-observables)
  - [Difference between Observables and Promises in Angular](#difference-between-observables-and-promises-in-angular)
- [Unsubscribe](#unsubscribe-in-angular)
- [Renderer2](#renderer2)
- [JIT](#jit)
- [AOT](#aot)
- [Deferrable Views](#deferrable-views)
- [Meta Tags](#meta-tags)
  - [Title Service](#title-service)
    - [Dynamic Title](#dynamic-title)
  - [Meta Service](#meta-service)
- [Security](#security)
  - [Preventing cross-site scripting (XSS)](#preventing-cross-site-scripting-xss)
  - [Angular's cross-site scripting security model](#angulars-cross-site-scripting-security-model)
  - [Preventing cross-site scripting (XSS)](#preventing-cross-site-scripting-xss)
  - [Angular's cross-site scripting security model](#angulars-cross-site-scripting-security-model)
  - [Sanitization and security contexts](#sanitization-and-security-contexts)
  - [Sanitization example](#sanitization-example)
  - [Direct use of the DOM APIs and explicit sanitization calls](#direct-use-of-the-dom-apis-and-explicit-sanitization-calls)
  - [Trusting safe values](#trusting-safe-values)
  - [Content security policy](#content-security-policy)
  - [Enforcing Trusted Types](#enforcing-trusted-types)
  - [Use the AOT template compiler](#use-the-aot-template-compiler)
  - [Server-side XSS protection](#server-side-xss-protection)
  - [HTTP-level vulnerabilities](#http-level-vulnerabilities)
  - [Cross-site request forgery](#cross-site-request-forgery)
  - [HttpClient XSRF/CSRF security](#httpclient-xsrfcsrf-security)
  - [Configure custom cookie/header names](#configure-custom-cookieheader-names)
  - [Disabling XSRF protection](#disabling-xsrf-protection)
  - [Cross-site script inclusion (XSSI)](#cross-site-script-inclusion-xssi)
  - [Auditing Angular applications](#auditing-angular-applications)
- [Standalone Components](#standalone-components)
- [Angular Signals](#angular-signals)
- [Angular Animations](#angular-animations)
  - [Installing Angular Animations](#installing-angular-animations)
- [Angular Universal](#angular-universal)
  - [Creating an Angular Universal application](#creating-an-angular-universal-application)
- [Bootstrap](#bootstrap)
  - [Installing Bootstrap](#installing-bootstrap)
  - [Importing Bootstrap](#importing-bootstrap)
- [Angular Material](#angular-material)
  - [Installing Angular Material](#installing-angular-material)
  - [Importing Angular Material](#importing-angular-material)
- [Tailwind CSS](#tailwind-css)
  - [Installing Tailwind CSS](#installing-tailwind-css)
  - [Importing Tailwind CSS](#importing-tailwind-css)
- [PrimeNG](#primeng)
  - [Installing PrimeNG](#installing-primeng)
  - [Importing PrimeNG](#importing-primeng)
- [SPA](#spa)
  - [Advantages of SPA](#advantages-of-spa)
- [PWA](#pwa)
  - [Installing PWA](#installing-pwa)
  - [Configuring PWA](#configuring-pwa)
  - [Building PWA](#building-pwa)
  - [Service Worker](#service-worker)
  - [Features of PWA](#features-of-pwa)
- [CLI Commands](#cli-commands)
- [Version compatibility](#version-compatibility)
- [Imports](#imports)
- [TypeScript](#typescript)
- [RxJS](#rxjs)
- [Learn From GitHub Repositories](#learn-more-from-github-repositories)
- [Learn From Websites](#learn-more-from-websites)
- [Learn From Books](#learn-more-from-books)
- [Learn From YouTube Channels](#learn-from-youtube-channels)
- [Learn More From Blogs Sites](#learn-more-from-blogs-sites)
- [List of Online Editors/Compiler for Angular](#list-of-online-editorscompiler-for-angular)
- [List of Twitter Users to Follow](#list-of-twitter-users-to-follow)
- [List of LinkedIn Users to Follow](#list-of-linkedin-users-to-follow)
- [List of Discord Servers to Join](#list-of-discord-servers-to-join)

## Introduction

**Angular** is a popular open-source framework by Google for building single-page and dynamic web applications. It offers tools and libraries for components, services, forms, routing, and HTTP client, all built with TypeScript. Angular is known for its performance, scalability, and developer productivity.

### Features of Angular

- **Component-Based Architecture**: Reusable, self-contained units of code that define the UI and behavior of a part of the application.
- **Two-Way Data Binding**: Automatic synchronization of data between the model and the view.
- **Dependency Injection**: Provides components with the services they need for better modularity and testability.
- **Routing**: Powerful system for navigation between different views, supporting deep linking, lazy loading, and route guards.
- **Forms**: Tools for template-driven and reactive forms, based on a model-driven approach.
- **HTTP Client**: Simple API for making HTTP requests and handling responses.
- **Observables**: Handles asynchronous operations and event handling.
- **TypeScript**: Superset of JavaScript with static typing, better tooling, error checking, and code completion.
- **Performance**: Optimized for performance with virtual DOM, lazy loading, tree shaking, and ahead-of-time compilation.
- **Mobile Support**: Tools for building responsive, touch-friendly mobile applications, including PWAs.
- **SEO Friendly**: Tools for server-side rendering, pre-rendering, and meta tags to improve search engine visibility.
- **Community Support**: Large, active community providing support and sharing knowledge.

### Difference between AngularJS vs Angular

| AngularJS | Angular |
|-----|-----|
|Based on MVC Architecture|Based on Components|
|Uses JavaScript to build the application| Uses TypeScript to build the application|
|No Mobile Support|Mobile supports|
|Run on only client-side|Runs on both client-side as well as server-side|
|CLI not present|CLI present|
|No SEO Friendly|Seo Friendly|
|Performance is slow|Performance is fast|

[Back to top⤴️](#table-of-contents)

### Angular vs React

- **Angular**: A full-fledged framework by Google for building web applications. It includes features like two-way data binding, routing, forms, and HTTP client. Ideal for large, complex applications needing a complete solution.

- **React**: A JavaScript library by Facebook focused on building user interfaces. It provides a simple, declarative way to build UI components. Suitable for small to medium-sized applications requiring flexibility and customization.

**Comparison**: Angular offers a complete solution with built-in features, while React focuses on the view layer, allowing developers to choose additional tools and libraries.

**When to use Angular**: Best for large, complex applications needing integrated tools and scalability.

**When to use React**: Best for small to medium-sized applications needing flexibility and a focus on the UI.

[Back to top⤴️](#table-of-contents)

## Roadmap

[Angular Roadmap](https://roadmap.sh/angular)

## Configuration

### Prerequisites

- Node.js
- NPM
- Angular CLI

### Installation

Install the Angular CLI globally:

```bash
npm install -g @angular/cli
```

If you have already installed the Angular CLI, you can update it to the latest version using the following command:

```bash
npm install -g @angular/cli@latest
```

Check version

```bash
ng version
```

Create a new Angular project: (Replace `[PROJECT NAME]` with your project name)

```bash
# with standalone component
ng new [PROJECT NAME]

# without standalone component
ng new [PROJECT NAME] --standalone=false
```

**Note**: In version v17 and later, the standalone component is default enabled. In version v16 and earlier, the standalone component is disabled by default. You can enable or disable the standalone component using the `--standalone` flag. (In this repository, an example repository is created with the latest version of Angular.)

Navigate to the project directory:

```bash
cd [PROJECT NAME]
```

Run the application:

```bash
ng serve
```

Open the browser and navigate to `http://localhost:4200/`.

Project structure:

```bash
[PROJECT NAME]
├── node_modules
├── public
│   ├── favicon.ico
│   └── ...
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── ...
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   └── ...
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── README.md
├── tsconfig.json
├── tslint.json
└── ...
```

[Back to top⤴️](#table-of-contents)

## Components

Component is the main building block of an Angular Application. It is a TypeScript class that interacts with the HTML template and provides the data and logic to the view.

### Three main building blocks

There are three main building blocks of an Angular component:

- Template
- Class
- Metadata

**Template** - Defines the layout and content of the View.

**Class** - Class provides the data & logic to the View.

**MetaData** - Metadata Provides additional information about the component to the Angular.

### Component metadata properties

There are several properties that can be defined in the component metadata:

- Selector
- Providers
- Styles
- StyleUrls
- Template
- TemplateUrl

**Selector** - Defines the element name or CSS selector that identifies the component in the HTML template.

```typescript
selector: 'app-root'
```

**Providers** - Defines the providers of the component's dependencies.

```typescript
providers: [MyService]
```

**styles** - Defines the inline styles for the component.

```typescript
styles: ['h1 { color: red; }']
```

**styleUrls** - Defines an array of URLs of the stylesheets for the component.

```typescript
styleUrls: ['./app.component.css']
```

**template** - Defines the HTML template for the component.

```typescript
template: '<h1>My Component</h1>'
```

**templateUrl** - Defines the URL of the HTML template for the component.

```typescript
templateUrl: './app.component.html'
```

## Component Creation

### Using Angular CLI

```bash
ng generate component [component-name]

# or

ng g c [component-name]
```

### Manual Creation

**Step 1** - Create a new folder for the component inside the `src/app` folder.

```bash
src/app/[component-name]
```

**Step 2** - Create a new TypeScript file for the component inside the new folder.

```bash
src/app/[component-name]/[component-name].component.ts
```

**Step 3** - Create a new HTML file for the component inside the new folder.

```bash
src/app/[component-name]/[component-name].component.html
```

**Step 4** - Create a new CSS file for the component inside the new folder.

```bash
src/app/[component-name]/[component-name].component.css
```

**Step 5** - Import the Component class from the `@angular/core` module.

```typescript
import { Component } from '@angular/core';
```

**Step 6** - Decorate the class with the `@Component` decorator.

```typescript
@Component({
  selector: 'app-[component-name]',
  standalone: true,
  templateUrl: './[component-name].component.html',
  styleUrls: ['./[component-name].component.css']
})
```

If you want to create a non-standalone component, set the `standalone` property to `false`. The standalone component is enabled by default in Angular v17 and later.

**Step 7** - Define the selector, template, and styles for the component.

```text
selector - The selector for the component.
templateUrl - The URL of the HTML template for the component.
styleUrls - An array of URLs of the stylesheets for the component.
```

**Step 8** - Export the class.

```typescript
export class [ComponentName]Component {
  // Component logic here
}
```

**Step 9** - Import the component class in the `app.module.ts` file.

```typescript
import { [ComponentName]Component } from './[component-name]/[component-name].component';
```

**Step 10** - Add the component to the `declarations` array in the `@NgModule` decorator.

```typescript
declarations: [
  AppComponent,
  [ComponentName]Component
]
```

If you created a standalone component, `app.module.ts` file is not required. You can import the component in the `app.component.ts` file.
as shown below.

```typescript
import { [ComponentName]Component } from './[component-name]/[component-name].component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [[ComponentName]Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'app';
}
```

**Step 11** - Use the component selector in the HTML template.

```typescript
<app-[component-name]></app-[component-name]>
```

**Step 12** - Run the application using the `ng serve` command.

```bash
ng serve

# or

ng serve --open
```

### Example

**Creating the component files (Version 16 and earlier)** -

```bash
//test-component.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})

export class TestComponent {
  // Component logic here
}
```

```html
<!--component.component.html-->
<h1>Test Component</h1>
```

```css
/*component.component.css*/
h1 {
  color: red;
}
```

**Creating the component files (Version 17 and later)** -

```bash
//test-component.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  standalone: true,
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})

export class TestComponent {
  // Component logic here
}
```

You can create a standalone component by setting the `standalone` property to `true`. The standalone component is enabled by default in Angular v17 and later. You can disable the standalone component by setting the `standalone` property to `false` in the `@Component` decorator of the component. If you disable the standalone component, you need to import the component in the `app.module.ts` file. If you created a non-standalone component, you will see no standalone property in the `@Component` decorator.

```html
<!--test-component.component.html-->
<h1>Test Component</h1>
```

```css
/*test-component.component.css*/
h1 {
  color: red;
}
```

**Importing the component in the app.module.ts file (Version 16 and earlier)** -

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

**Importing the component in the app.module.ts file (Version 17 and later without standalone component)** -

```typescript
//app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test-component/test-component.component';

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

In version 17 and later, the standalone component is enabled by default. You can disable the standalone component by setting the `standalone` property to `false`. Inside app folder, `app.config.ts` file is created by default.

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
```

You can import the component in the `app.component.ts` file and use the component selector in the HTML template.

```typescript
//app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test-component/test-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
```

```html
<!--app.component.html-->
<app-test-component></app-test-component>
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

[Back to top⤴️](#table-of-contents)

## Scope

In Angular, the scope of a variable determines where it can be accessed:

- **Global Scope**: Accessible anywhere in the application.
- **Local Scope**: Accessible only within a specific function or block.
- **Component Scope**: Accessible within a component and its child components.

### Global Scope

Accessible from anywhere in the application; defined outside any function or block.

Example :

```typescript
// Global Scope
let globalVariable = 'Global Variable';

function testFunction() {
  console.log(globalVariable); // Output: Global Variable
}

testFunction();
```

Example in Angular :

```typescript
import { Component } from '@angular/core';

// Global Scope
let globalVariable = 'Global Variable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = globalVariable;
}
```

```html
<!--app.component.html-->
<h1>{{ title }}</h1>
```

### Local Scope

Accessible only within the function or block where defined.

Example :

```typescript
function testFunction() {
  // Local Scope
  let localVariable = 'Local Variable';
  console.log(localVariable); // Output: Local Variable
}

testFunction();
console.log(localVariable); // Error: localVariable is not defined
```

Example in Angular :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  testFunction() {
    // Local Scope
    let localVariable = 'Local Variable';
    console.log(localVariable); // Output: Local Variable
  }
}
```

```html
<!--app.component.html-->
<button (click)="testFunction()">Test Function</button>
```

### Component Scope

Accessible within the component and its children.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // Component Scope
  title = 'app';
}
```

```html
<!--app.component.html-->
<h1>{{ title }}</h1>
```

[Back to top⤴️](#table-of-contents)

## View Encapsulation

Controls how styles are applied to components. By default, Angular uses Emulated View Encapsulation, scoping styles to the component.

### Emulated View Encapsulation

Default mode in Angular, emulating shadow DOM to scope styles to the component.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'app';
}
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-xfz4uk?file=src%2Fmain.ts)

### Shadow DOM View Encapsulation

Uses native shadow DOM to encapsulate styles within the component, preventing them from affecting other components.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'app';
}
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-cc1rfn?file=src%2Fmain.ts)

### None View Encapsulation

Disables encapsulation; styles can affect other components.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
}
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-gzsxag?file=src%2Fmain.ts)

[Back to top⤴️](#table-of-contents)

## Component Communication

Passing data between Angular components using Input/Output decorators, EventEmitter, and services.

### Parent to Child

**Input Decorator** - The `@Input` decorator is used to pass data from a parent component to a child component. It allows the parent component to bind a property to the child component.

Example :

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  @Input() message: string;
}
```

```html
<!--child.component.html-->
<p>{{ message }}</p>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  message = 'Hello from parent component';
}
```

```html
<!--parent.component.html-->
<app-child [message]="message"></app-child>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-qqjcgn?file=src%2Fmain.ts)

### Child to Parent

**Output Decorator** - The `@Output` decorator is used to pass data from a child component to a parent component. It allows the child component to emit events that the parent component can listen to.

Example :

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from child component');
  }
}
```

```html
<!--child.component.html-->
<button (click)="sendMessage()">Send Message</button>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  message: string;

  receiveMessage($event) {
    this.message = $event;
  }
}
```

```html
<!--parent.component.html-->
<app-child (messageEvent)="receiveMessage($event)"></app-child>
<p>{{ message }}</p>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-4qgrhm?file=src%2Fmain.ts)

[Back to top⤴️](#table-of-contents)

## Siblings to Siblings Communication

**Using Services** - Services are a way to share data and functionality between components in Angular. You can create a service that holds the data and methods that need to be shared between components.

Example 1 :

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  message: string;

  setMessage(message: string) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }
}
```

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})

export class Sibling1Component {
  message: string;

  constructor(private dataService: DataService) {}

  sendMessage() {
    this.dataService.setMessage('Hello from sibling1 component');
  }
}
```

```html
<!--sibling1.component.html-->
<button (click)="sendMessage()">Send Message</button>
```

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})

export class Sibling2Component {
  message: string;

  constructor(private dataService: DataService) {}

  receiveMessage() {
    this.message = this.dataService.getMessage();
  }
}
```

```html
<!--sibling2.component.html-->
<p>{{ message }}</p>
<button (click)="receiveMessage()">Receive Message</button>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-uvqypy?file=src%2Fmain.ts)

Example 2 :

**Using RxJS Subjects** - RxJS Subjects are a way to share data and events between components in Angular. You can create a Subject that emits events and subscribe to those events in the components.

```typescript
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  message = new Subject<string>();

  setMessage(message: string) {
    this.message.next(message);
  }
}
```

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})

export class Sibling1Component {
  message: string;

  constructor(private dataService: DataService) {}

  sendMessage() {
    this.dataService.setMessage('Hello from sibling1 component');
  }
}
```

```html
<!--sibling1.component.html-->
<button (click)="sendMessage()">Send Message</button>
```

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})

export class Sibling2Component {
  message: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.message.subscribe(message => {
      this.message = message;
    });
  }
}
```

```html
<!--sibling2.component.html-->
<p>{{ message }}</p>
```

Example 3 :

**Using ViewChild and ViewChildren** - ViewChild and ViewChildren are a way to access child components in Angular. You can use ViewChild to access a single child component and ViewChildren to access multiple child components.

```typescript
import { Component, ViewChild } from '@angular/core';
import { Sibling2Component } from './sibling2.component';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})

export class Sibling1Component {
  @ViewChild(Sibling2Component) sibling2: Sibling2Component;

  sendMessage() {
    this.sibling2.message = 'Hello from sibling1 component';
  }
}
```

```html
<!--sibling1.component.html-->
<button (click)="sendMessage()">Send Message</button>
<app-sibling2></app-sibling2>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})

export class Sibling2Component {
  message: string;
}
```

```html
<!--sibling2.component.html-->
<p>{{ message }}</p>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-nezkvf?file=src%2Fmain.ts)

[Back to top⤴️](#table-of-contents)

## Data binding

Data binding is a core feature of Angular that allows you to bind data between the component's class and the HTML template. There are two types of data binding in Angular:

There are two types of data binding in Angular:

- **One-way binding** - This allows for passing data from the component's class to the HTML template or vice-versa.

- **Two-way binding** - This allows for binding a property of an HTML element to a property in the component's class and vice-versa.

### One way binding

One-way binding allows for passing data from the component's class to the HTML template.

There are several ways to achieve one-way binding in Angular, including:

1. From Component to View
2. From View to Component

**1. From Component to View** - This allows for passing data from the component's class to the HTML template.

There are several ways to achieve one-way binding from the component to the view in Angular, including:

1. Interpolation
2. Property binding
3. Class binding
4. Style binding
5. Attribute binding

**Interpolation** - This allows for embedding expressions in the HTML template. It is denoted by double curly braces ({{}}).

Example :

```html
<h1>{{ firstText }} {{ lastText }}</h1>
```

```typescript
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

Example :

```html
<h1 [innerText]="title"></h1>

<button [disabled]="isDisabled">I am disabled</button>
```

```typescript
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

**class binding** - This allows for binding a class of an HTML element to a property in the component's class. It is denoted by square brackets ([]).

Example :

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

**style binding** - This allows for binding a style of an HTML element to a property in the component's class. It is denoted by square brackets ([]).

Example :

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

**attribute binding** - This allows for binding an attribute of an HTML element to a property in the component's class. It is denoted by square brackets ([]).

Example :

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

**b. From View to Component** - This allows for passing data from the HTML template to the component's class.

There are several ways to achieve one-way binding from the view to the component in Angular, including:

1. Event binding
2. ngModel

**Event binding** - This allows for binding an event of an HTML element to a method in the component's class. It is denoted by parentheses (()).

Example :

```typescript
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

**ngModel** - The `ngModel` directive is used to create two-way data binding between an input element and a property in the component's class. It is commonly used to bind form controls to properties in the component.

Example :

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

**Remeber💡** :

The (click) calls the specified function when a user clicks on the given element (in your example, when a user clicks on a row).

The (change) event binds to HTML's onChange event. This event is fired for `<input>`, `<select>`, and `<textarea>` elements when a change to the element's value is committed by the user.

The (change) event can also be specifically implemented by other Angular components. It is generally implemented on components where the contents of the component are changed by the user.

[☝️Source of Explaination](https://stackoverflow.com/a/51127794/14292971)

### Two ways binding

Two-way binding allows for binding a property of an HTML element to a property in the component's class and vice-versa. It is denoted by `[(ngModel)]`.

There are several ways to achieve two-way binding in Angular, including:

1. ngModel
2. ngModelChange
3. change event

**ngModel** - The `ngModel` directive is used to create two-way data binding between an input element and a property in the component's class. It is commonly used to bind form controls to properties in the component.

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

[Back to top⤴️](#table-of-contents)

**ngModelChange** - The `ngModelChange` event is emitted when the value of an input element bound to `ngModel` changes. It can be used to perform additional logic when the value changes.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name: string = '';

  onNameChange(value: string) {
    console.log('Name changed to:', value);
  }
}
```

```html
<input [(ngModel)]="name" (ngModelChange)="onNameChange($event)" placeholder="Enter your name">
<p>Your name is: {{name}}</p>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-s43hdu?file=src%2Fmain.ts)

**change event** - The `change` event is emitted when the value of an input element changes. It can be used to perform additional logic when the value changes.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name: string = '';

  onNameChange(value: string) {
    console.log('Name changed to:', value);
  }
}
```

```html
<input [(ngModel)]="name" (change)="onNameChange($event.target.value)" placeholder="Enter your name">
<p>Your name is: {{name}}</p>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-s43hdu?file=src%2Fmain.ts)

[Back to top⤴️](#table-of-contents)

## Directives

Directives add behaviour to an existing DOM element or an existing component instance.

### Types of Directives

There are three types of directives in Angular:

1. **Structural Directives** - Structural directives are used to add or remove elements from the DOM based on a condition. They are denoted by an asterisk (*) before the directive name.

2. **Attribute Directives** - Attribute directives are used to change the appearance or behavior of an element. They are denoted by square brackets [] before the directive name.

3. **Custom Directives** - Custom directives are user-defined directives that add custom behavior to an element. They can be used to encapsulate complex behavior and reuse it across multiple components.

### Structural Directives

There are several built-in structural directives in Angular, including:

1. NgIf
2. NgFor
3. NgSwitch

**ngIf** - The `ngIf` directive is used to conditionally display elements based on the value of a given expression. It is commonly used to show or hide elements in the UI based on certain conditions.

Example :

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

```html
<h1>ngIf Example</h1>
<div *ngIf="showElement">
  This element will only be displayed if showElement is true.
</div>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-bajfgs?file=src%2Fapp%2Fapp.component.ts)

**ngFor** - The `ngFor` directive is used to iterate over a list of items and create a template for each item. It is commonly used to display a list of items in the UI.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
}
```

```html
<h1>ngFor Example</h1>
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-sn3tgd?file=src%2Fapp%2Fapp.component.ts)

**ngSwitch** - The `ngSwitch` directive is used to conditionally display elements based on the value of a given expression. It is similar to a switch statement in JavaScript.

Example :

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

```html
<h1>ngSwitch Example</h1>
<div [ngSwitch]="value">
  <div *ngSwitchCase="1">Case 1</div>
  <div *ngSwitchCase="2">Case 2</div>
  <div *ngSwitchCase="3">Case 3</div>
  <div *ngSwitchDefault>Default case</div>
</div>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-xm8ztp?file=src%2Fapp%2Fapp.component.ts)

### Attribute Directives

There are several built-in attribute directives in Angular, including:

1. NgClass
2. NgStyle
3. NgModel

**ngClass** - The `ngClass` directive is used to conditionally apply CSS classes to an element based on the value of a given expression. It is commonly used to apply styles to elements based on certain conditions.

Example :

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

```html
<h1>ngClass Example</h1>
<div [ngClass]="{ highlighted: isHighlighted }">
  This element will have the 'highlighted' class if isHighlighted is true.
</div>
```

```css
.highlighted {
  background-color: yellow;
}
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-cn1fph?file=src%2Fapp%2Fapp.component.ts)

**ngStyle** - The `ngStyle` directive is used to conditionally apply inline styles to an element based on the value of a given expression. It is commonly used to apply dynamic styles to elements based on certain conditions.

Example :

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

```html
<h1>ngStyle Example</h1>
<div [ngStyle]="{ color: color }">
  This element will have the color style set to the value of the color property.
</div>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-zcgf1h?file=src%2Fapp%2Fapp.component.ts)

**ngModel** - The `ngModel` directive is used to create two-way data binding between an input element and a property in the component's class. It is commonly used to bind form controls to properties in the component.

Example :

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

```html
<h1>ngModel Example</h1>
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" [(ngModel)]="name" name="name" />
</form>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-wrru3d?file=src%2Fapp%2Fapp.component.ts)

### Custom Directives

Custom directives are user-defined directives that add custom behavior to an element. They can be used to encapsulate complex behavior and reuse it across multiple components.

Example :

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

```html
<h1>Custom Directive Element</h1>
<div appCustomDirective>
  This element will have a yellow background when the mouse is over it.
</div>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-xyv8qw?file=src%2Fapp%2Fapp.component.ts)

[Back to top⤴️](#table-of-contents)

### Other directives

There are several other built-in directives in Angular, including:

- **ngContainer**
- **ngTemplate**
- **ngContent**
- **ngTemplateOutlet**

**ngContainer** - The `ngContainer` directive is a simple container that doesn't generate any markup in the DOM. It's mainly used as a placeholder to group and structure content within Angular templates.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  condition = true;
}
```

```html
<h1>ngContainer Example</h1>
<div *ngIf="condition">
  <ng-container>
    <p>Content to be conditionally rendered</p>
    <p>More content...</p>
  </ng-container>
</div>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-zjr4xc?file=src%2Fmain.ts)

**ngTemplate** - The `ngTemplate` directive is used to define a reusable template block that can be used later within the same component or shared across components using the ngTemplateOutlet directive.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  selectedTemplate: any;
}
```

```html
<h1>ngTemplate Example</h1>
<ng-template #myTemplate>
  <p>This is a template</p>
  <p>It can be reused in multiple places</p>
</ng-template>

<div>
  <ng-container *ngTemplateOutlet="selectedTemplate"></ng-container>
</div>

<button (click)="selectedTemplate = myTemplate">Load Template</button>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-azqjxv?file=src%2Fmain.ts)

**ngContent** - The `ngContent` directive is used for content projection or transclusion. It allows you to create reusable components with customizable content.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})

export class ChildComponent {}
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})

export class ParentComponent {}
```

```html
<!-- Parent Component -->
<app-child>
  <p>Content projected into the child component</p>
</app-child>
```

```html
<!-- Child Component Template -->
<div>
  <ng-content></ng-content>
</div>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-8ddr3h?file=src%2Fmain.ts)

**ngTemplateOutlet** - The `ngTemplateOutlet` directive is used to render a template defined using ngTemplate. It allows you to dynamically render a template within a component's template.

Example :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  selectedTemplate: any;
}
```

```html
<h1>ngTemplateOutlet Example</h1>
<ng-container *ngTemplateOutlet="selectedTemplate"></ng-container>

<ng-template #template1>
  Template 1 content
</ng-template>

<ng-template #template2>
  Template 2 content
</ng-template>

<button (click)="selectedTemplate = template1">Load Template 1</button>
<button (click)="selectedTemplate = template2">Load Template 2</button>
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-yerwcu?file=src%2Fmain.ts)

## Pipes

A pipe takes in data as input and transforms it to a desired output.

Syntax:

```text
{{ data | pipe }}
```

```text
Expression | pipeOperator[:pipeArguments]

# Expression: is the expression, which you want to transform
# | : is the Pipe Character
# pipeOperator : name of the Pipe
# pipeArguments: arguments to the Pipe
```

### Built-in Pipes

There are several built-in pipes in Angular, including:

- **Date Pipe**
- **Uppercase Pipe**
- **Lowercase Pipe**
- **Currency Pipe**
- **Percent Pipe**
- **Slice Pipe**
- **Decimal/number Pipe**
- **JSON Pipe**
- **Async Pipe**

### Date Pipe

The `date` pipe is used to format a date value according to the locale rules specified in the application.

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

```html
<h1>Date Pipe Example</h1>
<p>{{ date | date: 'shortDate' }}</p>
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

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-fobnad?file=src%2Fapp%2Fapp.component.ts)

### Uppercase Pipe

The `uppercase` pipe is used to transform a string to uppercase.

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

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-hlmoxp?file=src%2Fapp%2Fapp.component.ts)

### Lowercase Pipe

The `lowercase` pipe is used to transform a string to lowercase.

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

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-6gcdgx?file=src%2Fapp%2Fapp.component.ts)

### Currency Pipe

The `currency` pipe is used to format a number as currency using the locale rules specified in the application.

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

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-3fhhzz?file=src%2Fapp%2Fapp.component.ts)

### Percent Pipe

The `percent` pipe is used to format a number as a percentage.

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

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-tccybj?file=src%2Fapp%2Fapp.component.ts)

### Slice Pipe

The `slice` pipe is used to create a new array or string containing a subset of the elements of the input array or string.

```typescript
<p>{{ ['apple', 'banana', 'orange', 'mango'] | slice:1:3 }}</p>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-q88gmm?file=src%2Fapp%2Fapp.component.ts)

### Decimal/number Pipe

The `number` pipe is used to format a number as text. It can be used to format a number as a percentage, currency, or decimal number.

```html
<p>{{ 123456.78 | number:'3.2-3' }}</p>
```

[Stackblitz Example](https://stackblitz.com/edit/angular-ivy-7cwk1u?file=src%2Fapp%2Fapp.component.ts)

### JSON Pipe

The `json` pipe is used to transform a JavaScript object into a JSON string.

```html
<p>{{data | json}}</p>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  data = { name: 'Manthan Ank', age: 25 };
}
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-jgc252?file=src%2Fmain.ts)

### Async Pipe

The `async` pipe is used to subscribe to an Observable or Promise and return the latest value it has emitted.

```html
<p>{{data$ | async}}</p>
```

```typescript
// DataService.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class DataService {
  private data$: Observable<string>;

  constructor() {
    // Simulating an asynchronous data source
    this.data$ = of('Hello, async pipe!').pipe(
      // Simulating delay
      delay(2000)
    );
  }

  getData(): Observable<string> {
    return this.data$;
  }
}
```

```typescript
// ExampleComponent.component.ts
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-example',
  template: '<div>{{ data$ | async }}</div>',
})
export class ExampleComponent {
  data$: Observable<string>;

  constructor(private dataService: DataService) {
    this.data$ = this.dataService.getData();
  }
}
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-iatcbn?file=src%2Fmain.ts)

### Impure Pipes

By default, Angular pipes are pure, meaning they are stateless and do not change unless the input value changes. However, you can create impure pipes by setting the pure property to false in the @Pipe decorator.

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe',
  pure: false,
})

export class ImpurePipe implements PipeTransform {
  transform(value: any): any {
    return value;
  }
}
```

```html
<p>{{ data | impurePipe }}</p>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  data = 'Hello, world!';
}
```

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ImpurePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

[Stackblitz Example](https://stackblitz.com/edit/stackblitz-starters-xy3hhp?file=src%2Fmain.ts)

[Back to top⤴️](#table-of-contents)

## Decorators

Decorators are design patterns used to isolate the modification or decoration of a class without modifying the source code.

There are several built-in decorators in Angular, including:

- **@Component**
- **@Directive**
- **@Injectable**
- **@Pipe**
- **@NgModule**
- **@Input**
- **@Output**
- **@HostListener**
- **@ContentChild**
- **@ContentChildren**
- **@ViewChild**
- **@ViewChildren**

### Component

The `@Component` decorator is used to define a new component in Angular.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'My App';
}
```

```html
<h1>{{ title }}</h1>
```

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule {}
```

### Directive

The `@Directive` decorator is used to define a new directive in Angular.

```ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
})

export class CustomDirective {
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

```html
<div appCustomDirective>
  This element will have a yellow background when the mouse is over it.
</div>
```

```typescript
import { NgModule } from '@angular/core';

import { CustomDirective } from './custom.directive';

@NgModule({
  declarations: [CustomDirective],
})

export class AppModule {}
```

### Injectable

The `@Injectable` decorator is used to define a new service in Angular.

```ts
import { Injectable } from '@angular/core';

@Injectable
export class DataService {
  getData() {
    return 'Hello, world!';
  }
}
```

```ts
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  data: string;

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}
```

```typescript
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  providers: [DataService],
})

export class AppModule {}
```

### Pipe

The `@Pipe` decorator is used to define a new pipe in Angular.

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})

export class CustomPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value;
  }
}
```

```html
<h1>{{ data | customPipe }}</h1>
```

```typescript
import { NgModule } from '@angular/core';

import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [CustomPipe],
})

export class AppModule {}
```

### NgModule

The `@NgModule` decorator is used to define a new module in Angular.

```ts
import { NgModule } from '@angular/core';

@NgModule({
  imports: [],
  declarations: [],
  providers: [],
  bootstrap: [],
})

export class AppModule {}
```

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule {}
```

### Input

The `@Input` decorator is used to pass data from a parent component to a child component.

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

  ngOnInit() {}

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

### Output

The `@Output` decorator is used to pass data from a child component to a parent component.

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

### HostListener

The `@HostListener` decorator is used to listen for events on the host element of a directive or component.

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

### contentChild & contentChildren

The `@ContentChild` and `@ContentChildren` decorators are used to query for content children in the component's view.

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

### viewChild & viewChildren

The `@ViewChild` and `@ViewChildren` decorators are used to query for view children in the component's view.

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

[Back to top⤴️](#table-of-contents)

## Life Cycle Hooks

Angular provides a set of lifecycle hooks that give you visibility into key moments in the component's lifecycle.

There are several lifecycle hooks in Angular, including:

- **ngOnChanges**
- **ngOnInit**
- **ngDoCheck**
- **ngAfterContentInit**
- **ngAfterContentChecked**
- **ngAfterViewInit**
- **ngAfterViewChecked**
- **ngOnDestroy**

### OnChanges

It is called when the data-bound properties of a directive/component are changed. It is called before ngOnInit and whenever one or more data-bound input properties change.

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

### OnInit

It is called after Angular has initialized all data-bound properties of a directive/component. It is called only once after the first ngOnChanges.

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

### DoCheck

It is called during every change detection run, and it is used to detect and act upon changes that Angular doesn't catch on its own.

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

### AfterViewInit

It is called after Angular has fully initialized a component's view. It is the perfect place to put any initialization logic that depends on the view.

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

### AfterViewChecked

It is called after Angular has checked the component's view and child views. It is called after ngAfterViewInit and every subsequent ngAfterContentChecked.

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

### AfterContentInit

It is called after Angular has fully initialized the content of a directive. It is the perfect place to put any initialization logic that depends on the content.

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

### AfterContentChecked

It is called after the default change detector has completed checking all content of a directive. It is called after ngAfterContentInit and every subsequent ngAfterContentChecked.

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

### OnDestroy

It is called just before Angular destroys the directive/component. It is used to cleanup any resources or subscriptions that the directive/component has created.

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

[Back to top⤴️](#table-of-contents)

## Forms

Angular provides two types of forms:

- **Template-driven forms**
- **Reactive forms**

### Template-driven Forms

Template-driven forms are created using directives in the template. Angular automatically tracks the value and validity of the form controls.

```html
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
  <input type="text" name="name" ngModel required />
  <button type="submit">Submit</button>
</form>
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
```

### Reactive Forms

Reactive forms are created programmatically using form controls and form groups. They provide more control and flexibility compared to template-driven forms.

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <input type="email" formControlName="email" />
  <button type="submit">Submit</button>
</form>
```

[Back to top⤴️](#table-of-contents)

Set Value in Template Driven forms in Angular

```html
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
  <input type="text" name="name" ngModel required />
  <button type="submit">Submit</button>
</form>
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  onSubmit(form: NgForm) {
    form.setValue({ name: 'John' });
  }
}
```

[Back to top⤴️](#table-of-contents)

FormBuilder in Reactive Forms
  
```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

SetValue & PatchValue in Angular
  
```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
    });

    this.form.setValue({
      name: 'John',
      email: 'john.doe@gmail.com',
    });

    this.form.patchValue({
      name: 'Jane',
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

StatusChanges in Angular Forms
  
```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
    });

    this.form.statusChanges.subscribe((status) => {
      console.log(status);
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

ValueChanges in Angular Forms

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
    });

    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

FormControl

```ts
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name = new FormControl('');

  onSubmit() {
    console.log(this.name.value);
  }
}
```

FormGroup

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

FormArray Example

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      emails: this.fb.array([]),
    });
  }

  get emails() {
    return this.form.get('emails') as FormArray;
  }

  addEmail() {
    this.emails.push(this.fb.control(''));
  }

  removeEmail(index: number) {
    this.emails.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <div formArrayName="emails">
    <div *ngFor="let email of emails.controls; let i = index">
      <input type="email" [formControlName]="i" />
      <button type="button" (click)="removeEmail(i)">Remove</button>
    </div>
  </div>
  <button type="button" (click)="addEmail()">Add Email</button>
  <button type="submit">Submit</button>
</form>
```

Build Dynamic or Nested Forms using FormArray

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      addresses: this.fb.array([]),
    });
  }

  get addresses() {
    return this.form.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(
      this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: '',
      })
    );
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <div formArrayName="addresses">
    <div *ngFor="let address of addresses.controls; let i = index">
      <div [formGroupName]="i">
        <input type="text" formControlName="street" />
        <input type="text" formControlName="city" />
        <input type="text" formControlName="state" />
        <input type="text" formControlName="zip" />
        <button type="button" (click)="removeAddress(i)">Remove</button>
      </div>
    </div>
  </div>
  <button type="button" (click)="addAddress()">Add Address</button>
  <button type="submit">Submit</button>
</form>
```

SetValue & PatchValue in FormArray

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      addresses: this.fb.array([]),
    });

    this.form.setValue({
      name: 'John',
      addresses: [
        { street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' },
        { street: '456 Elm St', city: 'Othertown', state: 'NY', zip: '67890' },
      ],
    });

    this.form.patchValue({
      name: 'Jane',
    });
  }

  get addresses() {
    return this.form.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(
      this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: '',
      })
    );
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <div formArrayName="addresses">
    <div *ngFor="let address of addresses.controls; let i = index">
      <div [formGroupName]="i">
        <input type="text" formControlName="street" />
        <input type="text" formControlName="city" />
        <input type="text" formControlName="state" />
        <input type="text" formControlName="zip" />
        <button type="button" (click)="removeAddress(i)">Remove</button>
      </div>
    </div>
  </div>
  <button type="button" (click)="addAddress()">Add Address</button>
  <button type="submit">Submit</button>
</form>
```

Select Options Dropdown

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      gender: '',
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <select formControlName="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
  <button type="submit">Submit</button>
</form>
```

Typed Forms in Angular

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group<User>({
      name: '',
      email: '',
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <input type="email" formControlName="email" />
  <button type="submit">Submit</button>
</form>
```

FormRecord in Angular

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <input type="email" formControlName="email" />
  <button type="submit">Submit</button>
</form>
```

## Services

Services are used to encapsulate reusable functionality that can be shared across components. They are used to fetch data from a server, perform calculations, or interact with external services.

```ts
import { Injectable } from '@angular/core';

@Injectable
export class DataService {
  getData() {
    return 'Data from the service';
  }
}
```

```ts
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  data: string;

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}
```

[Back to top⤴️](#table-of-contents)

### Injectable Decorator

The `@Injectable` decorator is used to define a service class that can be injected into other components or services.

```ts
import { Injectable } from '@angular/core';

@Injectable
export class DataService {
  getData() {
    return 'Data from the service';
  }
}
```

[Back to top⤴️](#table-of-contents)

### Dependency Injection

Dependency injection is a design pattern used to create objects and manage their dependencies. It allows you to inject dependencies into a class rather than creating them within the class.

```ts
import { Injectable } from '@angular/core';

@Injectable
export class DataService {
  getData() {
    return 'Data from the service';
  }
}
```

```ts
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  data: string;

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}
```

[Back to top⤴️](#table-of-contents)

### Providers

Providers are used to define dependencies that are injected into components, directives, pipes, and services. They are defined in the `@NgModule` decorator of the root module or feature modules.

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [DataService],
})

export class AppModule {}
```

[Back to top⤴️](#table-of-contents)

## Routing

Routing is used to navigate between different components in an Angular application. It allows users to move between different parts of the application by changing the URL in the browser.

```ts
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '<h1>Home Component</h1>',
})

export class HomeComponent {}
```

```html
<router-outlet></router-outlet>
```

[Back to top⤴️](#table-of-contents)

### Router Outlet

The `router-outlet` directive is used to render the component associated with the current route.

```html
<router-outlet></router-outlet>
```

[Back to top⤴️](#table-of-contents)

### Router Link

The `routerLink` directive is used to navigate to a different route when the element is clicked.

```html
<a [routerLink]="['/home']">Home</a>
```

[Back to top⤴️](#table-of-contents)

### Router Link Active

The `routerLinkActive` directive is used to add a CSS class to an element when the associated route is active.

```html
<a routerLink="/home" routerLinkActive="active">Home</a>
```

[Back to top⤴️](#table-of-contents)

### Router Link Active Options

The `routerLinkActiveOptions` directive is used to configure the behavior of the `routerLinkActive` directive.

```html
<a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
```

[Back to top⤴️](#table-of-contents)

### Router State

The `RouterState` class is used to access the current state of the router.

```ts
import { Router } from '@angular/router';

constructor(private router: Router) {
  const state = this.router.routerState;
  console.log(state);
}
```

[Back to top⤴️](#table-of-contents)

### Router Events

The `RouterEvents` class is used to listen for router events such as navigation start, navigation end, and navigation error.

```ts
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

constructor(private router: Router) {
  router.events.subscribe((event) => {
    if (event instanceof NavigationStart) {
      console.log('Navigation started');
    }
    if (event instanceof NavigationEnd) {
      console.log('Navigation ended');
    }
    if (event instanceof NavigationError) {
      console.log('Navigation error');
    }
  });
}
```

[Back to top⤴️](#table-of-contents)

### Router Guards

Router guards are used to control navigation and access to routes in an Angular application. They can be used to prevent unauthorized access to certain routes, redirect users to a login page, or perform other actions before navigating to a route.

```ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
```

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})

export class AppRoutingModule {}
```

[Back to top⤴️](#table-of-contents)

## HTTP Client

The `HttpClient` service is used to make HTTP requests to a server. It provides methods for making GET, POST, PUT, DELETE, and other types of requests.

```ts
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) {}

getData() {
  return this.http.get('https://api.example.com/data');
}
```

[Back to top⤴️](#table-of-contents)

## Destroy Ref

The DestroyRef provider is a utility that allows Angular components to register cleanup callbacks that are executed when the component is destroyed. This is useful for cleaning up resources, such as subscriptions, timers, or other resources that need to be released when the component is no longer in use.

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DestroyRef } from '@angular/core/testing';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit, OnDestroy {

  constructor(private destroyRef: DestroyRef) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    // Register a destroy callback with the DestroyRef provider.
    this.destroyRef.register(() => {
      // Do any cleanup tasks here.
    });
  }

}
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

Http Interceptors are a powerful feature provided by the `@angular/common/http` module. They allow you to intercept and modify HTTP requests and responses in your Angular application. With interceptors, you can perform various tasks such as authentication, logging, error handling, and more. Interceptors provide a way to add global behavior to your HTTP requests and responses, making it easier to implement common functionalities across your application.

```typescript
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify the request before it is sent
    const modifiedRequest = request.clone({
      setHeaders: {
        'Authorization': 'Bearer my-token'
      }
    });

    // Pass the modified request to the next handler
    return next.handle(modifiedRequest);
  }
}
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

Options—Headers/Params

```typescript
import { HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders({
  'Content-Type': 'application
  'Authorization': 'Bearer my-token'
});

const params = new HttpParams()
  .set('param1', 'value1')
  .set('param2', 'value2');

this.http.get('url', { headers, params });

this.http.post('url', data, { headers, params });

this.http.put('url', data, { headers, params });

this.http.patch('url', data, { headers, params });

this.http.delete(`url/${id}`, { headers, params });
```

Options—Observe/Response Type

```typescript
import { HttpResponse } from '@angular/common/http';

this.http.get('url', { observe: 'response' });
```

## Module

A module is a container for a group of related components, directives, pipes, and services. It is used to organize an Angular application into cohesive blocks of functionality.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule {}
```

[Back to top⤴️](#table-of-contents)

### Lazy loading

Lazy loading is a technique used to load modules only when they are needed. This can help reduce the initial load time of the application by loading only the necessary modules.

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

Certainly! Let's complete the Angular Router guide with examples for the provided sections:

### Router

The Angular Router is a powerful tool that allows you to define navigation paths and routes in your application. It enables you to navigate between different components and views based on the URL path.

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Define your routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Required Route Params

To define a route with a required parameter, you can use a colon (`:`) followed by the parameter name. For example, in `app.module.ts`:

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: 'user/:id', component: UserDetailsComponent },
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Navigating in the App

To navigate to a route with a required parameter, you can use the `Router` service. For example, in a component:

```typescript
// some-component.component.ts
import { Router } from '@angular/router';

export class SomeComponent {

  constructor(private router: Router) {}

  navigateToUserDetails(userId: number): void {
    this.router.navigate(['/user', userId]);
  }
}
```

### Optional Route Params

To define a route with an optional parameter, you can use a question mark (`?`) after the parameter name. For example, in `app.module.ts`:

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: 'user/:id?', component: UserDetailsComponent },
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Params

To access route parameters in a component, you can use the `ActivatedRoute` service. For example, in a component:

```typescript
// user-details.component.ts
import { ActivatedRoute } from '@angular/router';

export class UserDetailsComponent {

  constructor(private route: ActivatedRoute) {
    // Accessing route parameters
    this.route.params.subscribe(params => {
      const userId = params['id'];
      // Do something with the userId...
    });
  }
}
```

## Routing Module

A routing module is a feature module that contains the routes and components related to a specific feature or section of an Angular application. It helps organize the application into smaller, more manageable modules.

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
```

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
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

```html
<!-- app.component.html -->
<nav>
  <a routerLink="/home">Home</a>
  <a routerLink="/about">About</a>
</nav>

<router-outlet></router-outlet>
```

```html
<!-- home.component.html -->
<h1>Home Component</h1>
```

```html
<!-- about.component.html -->
<h1>About Component</h1>
```

## Route Parameters

Route parameters are used to pass data to a route in Angular. They allow you to create dynamic routes that can be customized based on user input or other factors. Route parameters are defined in the route configuration and can be accessed in the component associated with the route.

There are three types of route parameters in Angular:

***Path Parameters***:

Path parameters are used to extract data from the URL path. They are denoted by placing a colon (":") before the parameter name in the route configuration. Path parameters are part of the route path and can be accessed in the component associated with the route. For example:

```typescript
{ path: 'users/:id', component: UserComponent }
```

In this example, the ":id" parameter is a path parameter. The UserComponent can retrieve the value of the ":id" parameter from the URL and use it to fetch user data.

***Query Parameters***:

Query parameters are used to pass data as key-value pairs in the URL query string. They are denoted by placing a question mark ("?") after the route path, followed by the parameter name and value. Query parameters are not part of the route path but can be accessed in the component associated with the route. For example:

```typescript
{ path: 'search', component: SearchComponent }
```

In this example, the SearchComponent can access query parameters like "/search?query=angular" or "/search?query=react" and use them to perform a search operation.

***Optional Parameters***:

Optional parameters are used to define route parameters that are not required. They are denoted by placing a question mark ("?") after the parameter name in the route configuration. Optional parameters can be present or absent in the URL, and the component associated with the route can handle both cases. For example:

```typescript
{ path: 'products/:id/:category?', component: ProductComponent }
```

In this example, the ":category" parameter is optional. The ProductComponent can handle URLs like "/products/123" or "/products/123/electronics" based on the presence of the ":category" parameter.

## Route Guards

Route guards are used to control access to routes in an Angular application. They allow you to implement logic that determines whether a user is allowed to navigate to a particular route or not. Route guards can be used to protect routes based on user authentication, authorization, or other criteria.

There are four types of route guards in Angular:

***CanActivate***:

The CanActivate guard is used to determine whether a route can be activated or not. It is typically used to check if a user is authenticated before allowing access to a route. The guard returns a boolean value or an Observable or Promise that resolves to a boolean value. If the guard returns true, the route is activated; if it returns false, the route is blocked.

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
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is authenticated
    return true; // Allow access
  }
}
```

***CanActivateChild***:

The CanActivateChild guard is similar to CanActivate but is used to protect child routes of a parent route. It is applied to the parent route configuration and is triggered when any child route is activated. The guard returns a boolean value or an Observable or Promise that resolves to a boolean value.

```typescript
import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is authenticated
    return true; // Allow access
  }
}
```

***CanDeactivate***:

The CanDeactivate guard is used to determine whether a route can be deactivated or not. It is typically used to prompt the user for confirmation before leaving a route with unsaved changes. The guard returns a boolean value or an Observable or Promise that resolves to a boolean value. If the guard returns true, the route is deactivated; if it returns false, the route is not deactivated.

```typescript
import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ConfirmDeactivateGuard implements CanDeactivate<any> {
  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user wants to leave the route
    return confirm('Are you sure you want to leave?');
  }
}
```

***CanLoad***:

The CanLoad guard is used to determine whether a lazy-loaded module can be loaded or not. It is applied to the route configuration of a lazy-loaded module and is triggered when the module is about to be loaded. The guard returns a boolean value or an Observable or Promise that resolves to a boolean value. If the guard returns true, the module is loaded; if it returns false, the module is not loaded.

```typescript
import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanLoad {
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is authenticated
    return true; // Allow loading
  }
}
```

[Back to top⤴️](#table-of-contents)

## Observables in Angular

An observable is a class that can be used to handle asynchronous data streams. Observables are used to handle data that can arrive over time, such as data received from a server, user input, or timed events.

### Creating Observables

There are several ways to create observables in Angular:

***Using the Observable Constructor***: You can create an observable using the `Observable` constructor and the `new` keyword. The constructor takes a function as an argument, which is called when the observable is subscribed to.

```typescript
import { Observable } from 'rxjs';

const observable = new Observable((observer) => {
  observer.next('Hello');
  observer.next('World');
  observer.complete();
});
```

***Using the `of` Operator***: You can create an observable from a list of values using the `of` operator. The `of` operator emits each value in the list in sequence.

```typescript
import { of } from 'rxjs';

const observable = of('Hello', 'World');
```

***Using the `from` Operator***: You can create an observable from an array, promise, or iterable using the `from` operator. The `from` operator emits each item in the array, promise, or iterable in sequence.

```typescript
import { from } from 'rxjs';

const observable = from(['Hello', 'World']);
```

### Subscribing to Observables

To receive data from an observable, you need to subscribe to it. The `subscribe` method is used to subscribe to an observable and receive data emitted by the observable.

```typescript
observable.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.error(error),
  complete: () => console.log('Complete')
});
```

### Difference between `observables` and `promises` in Angular

- **Observables**:
  - Observables are lazy, meaning they only execute when subscribed to.
  - Observables can emit multiple values over time.
  - Observables can be canceled using the `unsubscribe` method.
  - Observables can be transformed and combined using operators.
  - Observables are used for handling streams of data, such as user input, server responses, and events.

- **Promises**:
  - Promises are eager, meaning they execute immediately when created.
  - Promises can only emit a single value.
  - Promises cannot be canceled once created.
  - Promises do not have built-in transformation or combination methods.
  - Promises are used for handling asynchronous operations that produce a single result, such as HTTP requests and file reads.

[Back to top⤴️](#table-of-contents)

## Unsubscribe in Angular

In Angular, managing subscriptions is crucial to avoid memory leaks and improve the performance of your application. Here are five ways to unsubscribe in Angular:

1. Using the takeUntil operator:

    - Create a subject to act as a notifier.
    - In your component, create a private property for the subject.
    - Subscribe to observables using the takeUntil operator with the subject as the parameter.
    - Emit a value on the subject when you want to unsubscribe, typically in the ngOnDestroy lifecycle hook.
    - In the ngOnDestroy hook, call complete() on the subject to stop emitting values.

    ```typescript
    import { Component, OnDestroy } from '@angular/core';
    import { Subject } from 'rxjs';
    import { takeUntil } from 'rxjs/operators';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.css']
    })
    export class ExampleComponent implements OnDestroy {
      private unsubscribe$ = new Subject<void>();

      ngOnInit() {
        // Subscribe to an observable
        someObservable.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
          // Handle data
        });
      }

      ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
      }
    }
    ```

2. Using the async pipe:

    - In your template, use the async pipe to subscribe to observables directly.
    - Angular automatically handles the subscription and unsubscription for you.
    - Ensure you don't manually subscribe to the observable in your component.

    ```html
    <div>{{ someObservable$ | async }}</div>
    ```

3. Using the Subscription object:

    - Declare a Subscription property in your component.
    - Assign the subscription to the property when subscribing.
    - In the ngOnDestroy hook, unsubscribe from the subscription.

    ```typescript
    import { Component, OnDestroy } from '@angular/core';
    import { Subscription } from 'rxjs';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.css']
    })
    export class ExampleComponent implements OnDestroy {
      private subscription: Subscription;

      ngOnInit() {
        // Assign the subscription
        this.subscription = someObservable.subscribe((data) => {
          // Handle data
        });
      }

      ngOnDestroy() {
        // Unsubscribe from the subscription
        this.subscription.unsubscribe();
      }
    }
    ```

4. Using the unsubscribe operator:

    - Store the subscription in a variable.
    - Call the unsubscribe method on the subscription in the ngOnDestroy hook.

    ```typescript
    import { Component, OnDestroy } from '@angular/core';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.css']
    })
    export class ExampleComponent implements OnDestroy {
      private subscription;

      ngOnInit() {
        // Assign the subscription
        this.subscription = someObservable.subscribe((data) => {
          // Handle data
        });
      }

      ngOnDestroy() {
        // Unsubscribe from the subscription
        this.subscription.unsubscribe();
      }
    }
    ```

5. Using the ngOnDestroy hook and manual unsubscription:

    - Declare an array to store all the subscriptions.
    - Push the subscription to the array when subscribing.
    - Loop through the array in the ngOnDestroy hook and unsubscribe from each subscription.

    ```typescript
    import { Component, OnDestroy } from '@angular/core';
    import { Subscription } from 'rxjs';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.css']
    })
    export class ExampleComponent implements OnDestroy {
      private subscriptions: Subscription[] = [];

      ngOnInit() {
        // Push the subscription to the array
        this.subscriptions.push(someObservable.subscribe((data) => {
          // Handle data
        }));
      }

      ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
      }
    }
    ```

[Back to top⤴️](#table-of-contents)

## Renderer2

Renderer2 is a utility class that provides methods to manipulate and interact with the DOM (Document Object Model). It is used to perform operations such as creating, modifying, and removing elements, applying styles, and listening to events.

```typescript
import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <button (click)="changeColor()">Change Color</button>
  `
})
export class ExampleComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  changeColor() {
    const button = this.el.nativeElement.querySelector('button');
    this.renderer.setStyle(button, 'background-color', 'red');
  }
}

```

## JIT

**Just-in-Time** (JIT) is a type of compilation that compiles your app in the browser at runtime. This is the default compilation mode for Angular applications.

### Advantages of JIT

- Faster development cycle as changes can be seen immediately.
- No build step required during development.
- More flexible for dynamic template generation.

## AOT

**Ahead-of-Time** (AOT) is a type of compilation that compiles your app at build time. This mode is used to pre-compile your Angular application before deployment.

### Advantages of AOT

- Faster startup times as the browser only needs to execute the compiled code.
- Improved performance due to optimized and pre-compiled templates.
- Better security as the templates are already compiled and validated before deployment.
- Smaller bundle sizes since the templates are not included.

## JIT vs AOT

### Differences between AOT and JIT

| Feature | AOT | JIT |
|---|---|---|
| Compilation time | Build time | Runtime |
| Application size | Smaller | Larger |
| Application load time | Faster | Slower |
| Debugging | More difficult | Easier |
| Development | More difficult | Easier |
| Performance | Better | Worse |

## Deferrable Views

Deferrable views can be used in component template to defer the loading of select dependencies within that template.

```typescript
@defer {
  <large-component />
}
```

## Meta tags

### Title Service

```typescript
import { BrowserModule, Title } from '@angular/platform-browser';
```

```typescript
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
export class TitleComponent implements OnInit {
  constructor(private title:Title) { }
}
```

```typescript
ngOnInit() {
  this.title.setTitle("Learn Angular")
}
```

```typescript
import { Component, OnInit } from '@angular/core';
import { Title, MetaDefinition } from '@angular/platform-browser';
 
@Component({
  template: `<h1>App Component</h1>`
})
export class AppComponent implements OnInit {
  title = 'App Component';
 
  constructor(private title:Title){
  }
 
  ngOnInit() {
    this.title.setTitle("Learn Angular")
  }
 
}
```

### Title Service Example

```typescript
// app.module.ts
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
 
@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Title Service Example';
 
  constructor(private titleService:Title) {
  }
 
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
```

```html
<!-- app.component.html -->
<h1>Title Service Example</h1>
 
<ul>
  <li><a [routerLink]="['/home']">Home</a> </li>
</ul>
 
<router-outlet></router-outlet>
```

```typescript
// home.component.ts
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  template: `<h1>Home Component</h1>`
})
export class HomeComponent implements OnInit {
  title = 'Home Component Title';
 
  constructor(private titleService:Title){
  }
 
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
 
}
```

### Dynamic Title

```typescript
// app.module.ts
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
 
@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

const routes: Routes = [
  {path: '', component:HomeComponent, data : {title:'Title for Home Component'}},
  {path: 'parent', component:ParentComponent, data : {title:'Title for Parent Component'},
    children: [
      { path: 'child', component:ChildComponent, data : {title:'Title for Child Component'}}
    ]
  },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 constructor(
  private router: Router,
  private activatedRoute: ActivatedRoute,
  private titleService: Title
  ) { }
 
  ngOnInit() {
 
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe(() => {
 
        var rt = this.getChild(this.activatedRoute)
 
        rt.data.subscribe(data => {
          console.log(data);
          this.titleService.setTitle(data.title)})
      })
 
  }
 
  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
 
  }
}
```

```html
<!-- app.component.html -->
<h1>Dynamic Title Example</h1>
 
<ul>
  <li><a routerLink="">Home</a> </li>
  <li><a [routerLink]="['/parent']">Parent</a> </li>
  <li><a [routerLink]="['/child']">Child</a> </li>
</ul>
 
<router-outlet></router-outlet>
```

```typescript
// home.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  template: `<h1>Home Component</h1>`
})
export class HomeComponent implements OnInit {
 
  constructor(){
  }
 
  ngOnInit() {
  }
 
}
```

```typescript
// parent.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  template: `<h1>Parent Component</h1>
  <router-outlet></router-outlet>
  `
})
export class ParentComponent implements OnInit {
 
  constructor(){
  }
 
  ngOnInit() {
  }
 
}
```

```typescript
// child.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  template: `<h1>Child Component</h1>`
})
export class ChildComponent implements OnInit {
 
  constructor(){
  }
 
  ngOnInit() {
  }
 
}
```

### Meta Service

```typescript
import { BrowserModule, Meta } from '@angular/platform-browser';
```

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';
 
@Component({
  template: `<h1>App Component</h1>`
})
export class AppComponent implements OnInit {
  title = 'App Component';
 
  constructor(private metaService:Meta){
  }
 
  ngOnInit() {
    this.metaService.addTag( { name:'description',content:"Article Description"});
  }
 
}
```

Adding Tags with addTag() & addTags()

```typescript
this.metaService.addTag( { name:'description',content:"Article Description"});
```

```typescript
this.metaService.addTag( 
  { name: 'description', content: 'Article Description' },
  { name: 'robots', content: 'index,follow' },
  { property: 'og:title', content: 'Content Title for social media' }
);
```

Reading the Tags with getTag()

```typescript
this.metaService.getTag("name='description'")
```

Update the Tag with updateTag()

```typescript
this.metaService.updateTag( { name:'robots', content:'index, nofoloow'},"name='robots'");
```

Removing the Tag with removeTag()

```typescript
this.metaService.removeTag("name='robots'");
```

[Back to top⤴️](#table-of-contents)

## Security

The security of an Angular application is a critical aspect that needs to be considered during development. Here are some best practices to enhance the security of your Angular application:

## Preventing cross-site scripting (XSS)

Cross-site scripting (XSS) is a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. To prevent XSS attacks in Angular applications, you can use the following best practices:

- Use Angular's built-in sanitization mechanisms to sanitize user input and prevent script injection.
- Avoid using unsafe methods like innerHTML and instead use Angular's data binding syntax to render dynamic content.
- Use Angular's built-in security features like Content Security Policy (CSP) to restrict the sources of scripts and other resources that can be loaded by your application.
- Enable strict mode in Angular templates to prevent template expressions from executing arbitrary code.
- Use Angular's HttpClient module to make HTTP requests and automatically sanitize responses to prevent XSS attacks.

## Angular's cross-site scripting security model

Angular provides a built-in security model to prevent cross-site scripting (XSS) attacks in applications. This security model includes the following features:

- Automatic sanitization of user input: Angular automatically sanitizes user input to prevent script injection and other security vulnerabilities.
- Strict mode in templates: Angular templates run in strict mode by default, which prevents template expressions from executing arbitrary code.
- Content Security Policy (CSP): Angular applications can use CSP to restrict the sources of scripts and other resources that can be loaded by the application.
- Trusted Types: Angular supports Trusted Types, a new web platform feature that helps prevent DOM-based XSS attacks by enforcing strict type checking on DOM APIs.

## Sanitization and security contexts

Angular provides a built-in sanitization mechanism to prevent cross-site scripting (XSS) attacks in applications. Sanitization is the process of cleaning user input to remove potentially dangerous content, such as script tags and event handlers. Angular uses security contexts to determine how to sanitize user input based on its intended use.

Angular provides the following security contexts for sanitization:

- HTML: Sanitizes user input for use in HTML contexts, such as rendering dynamic content in templates.
- Style: Sanitizes user input for use in CSS contexts, such as setting inline styles.
- Script: Sanitizes user input for use in script contexts, such as event handlers and script tags.
- URL: Sanitizes user input for use in URL contexts, such as setting href attributes.
- Resource URL: Sanitizes user input for use in resource URL contexts, such as loading external resources.

## Sanitization example

```typescript
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `<div [innerHTML]="safeHtml"></div>`
})
export class AppComponent {
  safeHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    const untrustedHtml = '<img src=x onerror=alert(1)>';
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(untrustedHtml);
  }
}
```

## Direct use of the DOM APIs and explicit sanitization calls

Directly using the DOM APIs to manipulate the DOM can introduce security vulnerabilities in Angular applications. To prevent XSS attacks, avoid using unsafe methods like innerHTML and instead use Angular's built-in sanitization mechanisms to render dynamic content safely.

```typescript
import { Renderer2 } from '@angular/core';

constructor(private renderer: Renderer2, private sanitizer: DomSanitizer) { }

const div = this.renderer.createElement('div');
const unsafeContent = '<script>alert("XSS")</script>';
const sanitizedContent = this.sanitizer.sanitize(SecurityContext.HTML, unsafeContent);
this.renderer.setProperty(div, 'innerHTML', sanitizedContent);
document.body.appendChild(div);
```

## Trusting safe values

Angular provides a mechanism to trust safe values and bypass the built-in sanitization mechanisms when rendering trusted content. To trust a safe value, you can use the bypassSecurityTrustHtml, bypassSecurityTrustStyle, bypassSecurityTrustScript, bypassSecurityTrustUrl, and bypassSecurityTrustResourceUrl methods provided by the DomSanitizer service.

```typescript
const safeHtml = this.sanitizer.bypassSecurityTrustHtml('<b>Safe Content</b>');
```

## Content security policy

Content Security Policy (CSP) is a security feature that helps prevent cross-site scripting (XSS) attacks by restricting the sources of scripts and other resources that can be loaded by a web application. Angular applications can use CSP to define a policy that specifies which content is allowed to be loaded by the application.

To enable CSP in an Angular application, you can add a Content-Security-Policy header to the HTTP response from the server. The CSP header should include directives that restrict the sources of scripts, styles, images, fonts, and other resources that can be loaded by the application.

```typescript
Content-Security-Policy: default-src 'self'; script-src 'self' https://example.com; style-src 'self' https://example.com; img-src 'self' https://example.com; font-src 'self' https://example.com;
```

## Enforcing Trusted Types

Trusted Types is a new web platform feature that helps prevent DOM-based cross-site scripting (XSS) attacks by enforcing strict type checking on DOM APIs. Angular applications can use Trusted Types to ensure that only trusted values are passed to DOM APIs, preventing script injection and other security vulnerabilities.

To enable Trusted Types in an Angular application, you can configure the Trusted Types policy using the TrustedTypesConfig token provided by Angular. The policy can specify which types of values are considered trusted and enforce strict type checking on DOM APIs.

```typescript
import { InjectionToken } from '@angular/core';

export const TRUSTED_TYPES_CONFIG = new InjectionToken('TRUSTED_TYPES_CONFIG');

const trustedTypesConfig = {
  createPolicy: (name, policy) => {
    return policy;
  }
};
```

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TRUSTED_TYPES_CONFIG } from './trusted-types.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: TRUSTED_TYPES_CONFIG, useValue: trustedTypesConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Use the AOT template compiler

The Angular Ahead-of-Time (AOT) template compiler compiles Angular templates at build time, which helps prevent cross-site scripting (XSS) attacks by statically analyzing the templates and generating optimized code. AOT compilation eliminates the need for the browser to compile templates at runtime, reducing the risk of template injection vulnerabilities.

To enable AOT compilation in an Angular application, you can use the ngc command to compile the application ahead of time. AOT compilation is recommended for production builds to improve performance, security, and compatibility with Content Security Policy (CSP) restrictions.

```bash
ng build --aot
```

## Server-side XSS protection

Server-side XSS protection is a security feature that helps prevent cross-site scripting (XSS) attacks by validating and sanitizing user input on the server before rendering it in the browser. To protect against XSS attacks, you can implement server-side input validation and sanitization to ensure that user input is safe and does not contain malicious content.

## HTTP-level vulnerabilities

Angular applications can be vulnerable to various HTTP-level attacks, such as cross-site request forgery (CSRF), cross-site scripting (XSS), and cross-site script inclusion (XSSI). To protect against these vulnerabilities, you can use Angular's built-in security features, such as HttpClient XSRF/CSRF protection, custom cookie/header names, and disabling XSRF protection.

## Cross-site request forgery

Cross-site request forgery (CSRF) is a security vulnerability that allows attackers to execute unauthorized actions on behalf of authenticated users. To prevent CSRF attacks in Angular applications, you can use Angular's built-in XSRF/CSRF protection mechanism to add a token to HTTP requests and validate it on the server.

```typescript
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    })
  ]
})

export class AppModule { }
```

## HttpClient XSRF/CSRF security

Angular's HttpClient module provides built-in support for cross-site request forgery (CSRF) protection using the XSRF/CSRF token mechanism. The HttpClientXsrfModule.withOptions method allows you to configure custom cookie and header names for the XSRF/CSRF token.

```typescript
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    })
  ]
})

export class AppModule { }
```

## Configure custom cookie/header names

Angular's HttpClient module allows you to configure custom cookie and header names for the XSRF/CSRF token using the HttpClientXsrfModule.withOptions method. By specifying custom names for the XSRF/CSRF token, you can enhance the security of your application and prevent CSRF attacks.

```typescript
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    })
  ]
})

export class AppModule { }
```

## Disabling XSRF protection

Angular's HttpClient module provides built-in support for cross-site request forgery (CSRF) protection using the XSRF/CSRF token mechanism. If you want to disable XSRF protection for specific requests, you can use the { withCredentials: true } option in the HttpClient request.

```typescript
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) { }

this.http.get('/api/data', { withCredentials: true });
```

## Cross-site script inclusion (XSSI)

Cross-site script inclusion (XSSI) is a security vulnerability that allows attackers to include external scripts in an application and execute malicious code. To prevent XSSI attacks in Angular applications, you can use Angular's built-in security features, such as HttpClient XSSI protection, to validate and sanitize external script responses.

## Auditing Angular applications

Auditing Angular applications is an essential step to identify and fix security vulnerabilities in the codebase. You can use various tools and techniques to audit Angular applications, such as security scanners, code reviews, penetration testing, and security best practices.

[Back to top⤴️](#table-of-contents)

## Standalone Components

A standalone component is a type of component which is not part of any Angular module. It provides a simplified way to build Angular applications.

## Angular Signals

Angular Signals is a powerful system that provides detailed monitoring of state usage within an application, enabling the framework to efficiently optimize rendering updates.

```typescript
import { Component, OnInit } from '@angular/core';
import { signal, computed } from '@angular/core'; // Import from '@angular/core'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  constructor() {}

  ngOnInit() {
    // Optional logging for debugging displayedCount changes
    // console.log('Displayed count changed to:', this.displayedCount());
  }

  incrementCount() {
    this.count.set(this.count() + 1);
  }

  decrementCount() {
    this.count.update((value) => Math.max(0, value - 1));
  }
}
```

```html
<h1>Angular Signals Example</h1>

<button (click)="incrementCount()" style="margin-right: 10px;">Increment Count</button>
<button (click)="decrementCount()">Decrement Count</button>

<p>Count: {{ count() }}</p>
<p>Double Count: {{ doubleCount() }}</p>
```

[Back to top⤴️](#table-of-contents)

## Deploying an Angular Application

| DEPLOYMENT TO | PACKAGE |
|---|---|
| Firebase hosting | ng add @angular/fire |
| Vercel | vercel init angular |
| Netlify | ng add @netlify-builder/deploy |
| GitHub pages | ng add angular-cli-ghpages |
| NPM | ng add ngx-deploy-npm |
| Amazon Cloud S3 | ng add @jefiozie/ngx-aws-deploy |

[Back to top⤴️](#table-of-contents)

## Angular Animations

Angular's animation system is built on CSS functionality in order to animate any property that the browser considers animatable. These properties includes positions, sizes, transforms, colors, borders etc. The Angular modules for animations are @angular/animations and @angular/platform-browser.

### Installing Angular Animations

```bash
npm install @angular/animations
```

### Importing Angular Animations

To use Angular animations in an Angular application, you need to import the BrowserAnimationsModule module in the app.module.ts file.

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
```

### Animation Example

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class AppComponent {
  show = false;

  toggle() {
    this.show = !this.show;
  }
}
```

```html
<button (click)="toggle()">Toggle</button>
<div *ngIf="show" @fadeInOut>
  <h1>Angular Animation Example</h1>
</div>
```

[Back to top⤴️](#table-of-contents)

## Angular Universal

Angular Universal is a server-side rendering (SSR) solution for Angular applications that allows you to render your application on the server and send the fully rendered HTML to the client. This can improve performance, SEO, and user experience by reducing the time to first contentful paint and enabling search engines to crawl and index your application.

### Creating an Angular Universal application

To create an Angular Universal application, you can use the Angular CLI to generate a new project with the Universal schematic.

```bash
ng new --ssr
```

To add Angular Universal to an existing Angular application, you can use the Angular CLI to add the Universal schematic to the project.

```bash
ng add @angular/ssr
```

[Back to top⤴️](#table-of-contents)

## Bootstrap

Bootstrap is a popular front-end framework for building responsive web applications. It provides a set of CSS and JavaScript components that can be used to create modern and mobile-friendly user interfaces.

### Installing Bootstrap

```bash
npm install bootstrap
```

### Importing Bootstrap

To use Bootstrap in an Angular application, you need to import the Bootstrap CSS file in the styles array of the angular.json file.

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
```

[Back to top⤴️](#table-of-contents)

## Angular Material

Angular Material is a UI component library for Angular applications that provides a set of reusable and customizable components, such as buttons, cards, dialogs, and menus. It is built on top of the Angular CDK (Component Dev Kit) and follows the Material Design guidelines.

### Installing Angular Material

```bash
ng add @angular/material
```

### Importing Angular Material

To use Angular Material in an Angular application, you need to import the required modules in the app.module.ts file.

```typescript
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
```

[Back to top⤴️](#table-of-contents)

## Tailwind CSS

Tailwind CSS is a utility-first CSS framework that provides a set of pre-built utility classes for styling web applications. It allows you to build custom designs by composing utility classes together, rather than writing custom CSS styles.

### Installing Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### Configure your template paths

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Importing Tailwind CSS

```css
/* styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

[Back to top⤴️](#table-of-contents)

## PrimeNG

PrimeNG is a popular UI component library for Angular applications that provides a set of rich and customizable components, such as data tables, calendars, dialogs, and charts. It is built on top of the PrimeFaces library and follows the PrimeNG design guidelines.

### Installing PrimeNG

```bash
npm install primeng
```

### Importing PrimeNG

To use PrimeNG in an Angular application, you need to import the required styles and modules in the angular.json file.

```json
// angular.json
"styles": [
  "node_modules/primeng/resources/themes/saga-blue/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  "src/styles.css"
]
```

```css
/* styles.css */
@import 'primeng/resources/themes/saga-blue/theme.css';
@import 'primeng/resources/primeng.min.css';
```

[Back to top⤴️](#table-of-contents)

## SPA

**SPA** (Single Page Application) is a web application that dynamically rewrites the current page instead of loading entire new pages from the server, providing a fluid and responsive user experience.

### Advantages of SPA

- **Faster Load Times**: Loads the initial page once; subsequent interactions update dynamically.
- **Better User Experience**: No full page reloads, allowing faster navigation and smoother transitions.
- **Reduced Server Load**: Less server load as only necessary data is fetched.
- **Improved SEO**: Optimizable for search engines with server-side rendering and meta tags.
- **Offline Support**: Accessible offline using service workers and caching.
- **Mobile Support**: Optimized for mobile with responsive design and touch gestures.
- **Scalability**: Handles many users and interactions with performance optimizations like lazy loading.

[Back to top⤴️](#table-of-contents)

## PWA

Progressive Web Apps (PWAs) are web applications that provide a native app-like experience to users, including offline support, push notifications, and home screen installation. Angular provides built-in support for creating PWAs using the @angular/pwa package.

### Installing PWA

```bash
ng add @angular/pwa
```

### Configuring PWA

To configure the PWA settings, you can modify the ngsw-config.json file in the src/ directory.

```json
{
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": [
          "/favicon.ico",
          "/index.html",
          "/*.css",
          "/*.js"
        ]
      }
    }
  ]
}
```

### Building PWA

To build the PWA, you can run the ng build --prod command with the --configuration=production flag.

```bash
ng build --prod --configuration=production
```

### Service Worker

The service worker is a script that runs in the background of the browser and handles tasks such as caching assets, intercepting network requests, and providing offline support. Angular's service worker is generated automatically when you create a PWA using the @angular/pwa package.

### Features of PWA

**Offline Support** - The service worker caches assets and intercepts network requests to provide offline support for the application.

**Push Notifications** - The service worker can receive push notifications from the server and display them to the user.

**Background Sync** - The service worker can perform background sync tasks, such as sending data to the server when the network connection is available.

**Home Screen Installation** - The service worker can prompt the user to install the application on the home screen for quick access.

[Back to top⤴️](#table-of-contents)

## CLI Commands

Installing Angular CLI

```bash
npm install -g @angular/cli
```

Help

```bash
ng help
```

Check version

```bash
ng version
```

Create, build, and serve a new, basic Angular project cli command

```bash
ng new my-first-project
cd my-first-project
ng serve
```

Generating new application

```bash
ng new app-name
```

Create new app without installing cli

```bash
npm init @angular app-name
```

Component

```bash
ng g c component-name
ng generate component component-name
```

Adding External libraries

```bash
ng add
```

Build

```bash
ng build
```

Running project

```bash
ng serve
```

Run project on particular port

```bash
ng serve --port=portname
// example
ng serve --port=3000
```

Run project and open the url in default browser

```bash
ng  serve --open
```

Update

```bash
ng update
```

Directive

```bash
ng generate directive component-name
ng g directive component-name
```

Module

```bash
ng generate module module-name
ng g m module-name
```

Service

```bash
ng generate service component-name
ng g service component-name
```

Routing Module

```bash
ng g module module-name --routing
ng g m module-name --routing
```

Component with module, routing module

```bash
ng generate module component-name --route component-name --module app.module
```

Pipe

```bash
ng g pipe pipe-name
```

Enum

```bash
ng g enum some-enum
```

Class

```bash
ng g cl my-class
```

Interface

```bash
ng g interface my-interface
```

Guard

```bash
ng g guard guard-name
```

Multiple Projects in one Angular App

```bash
ng generate application sub-app-name

ng new app-name --create-application=false
```

Generate environments

```bash
ng generate environments
```

## Version compatibility

| Angular            | Node.js                              | TypeScript     | RxJS               |
| ------------------ | ------------------------------------ | -------------- | ------------------ |
| 18.0.x             | ^18.19.1 \|\| ^20.11.1 \|\| ^22.0.0  | >=5.4.0 <5.5.0 | ^6.5.3 \|\| ^7.4.0 |
| 17.3.x             | ^18.13.0 \|\| ^20.9.0                | >=5.2.0 <5.5.0 | ^6.5.3 \|\| ^7.4.0 |
| 17.1.x \|\| 17.2.x | ^18.13.0 \|\| ^20.9.0                | >=5.2.0 <5.4.0 | ^6.5.3 \|\| ^7.4.0 |
| 17.0.x             | ^18.13.0 \|\| ^20.9.0                | >=5.2.0 <5.3.0 | ^6.5.3 \|\| ^7.4.0 |
| 16.1.x \|\| 16.2.x | ^16.14.0 \|\| ^18.10.0               | >=4.9.3 <5.2.0 | ^6.5.3 \|\| ^7.4.0 |
| 16.0.x             | ^16.14.0 \|\| ^18.10.0               | >=4.9.3 <5.1.0 | ^6.5.3 \|\| ^7.4.0 |

## Imports

Angular Core

```typescript
import { Component } from '@angular/core'; // Component decorator
import { NgModule } from '@angular/core'; // NgModule decorator
import { RouterModule, Routes } from '@angular/router'; // Routing module
import { FormsModule } from '@angular/forms'; // Forms module
import { ReactiveFormsModule } from '@angular/forms'; // Reactive forms module
import { HttpClientModule } from '@angular/common/http'; // HTTP client module
import { BrowserModule } from '@angular/platform-browser'; // Browser module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Animations module
import { CommonModule } from '@angular/common'; // Common module
import { NgModel } from '@angular/forms'; // NgModel directive
import { NgForm } from '@angular/forms'; // NgForm directive
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Form group, form control, validators
import { HttpClient } from '@angular/common/http'; // HTTP client
import { ActivatedRoute } from '@angular/router'; // Route parameters
import { Router } from '@angular/router'; // Router service
import { Title } from '@angular/platform-browser'; // Title service
import { Meta } from '@angular/platform-browser'; // Meta service
import { Renderer2 } from '@angular/core'; // Renderer2 service
import { ElementRef } from '@angular/core'; // ElementRef service
import { ViewChild } from '@angular/core'; // ViewChild decorator
import { ViewContainerRef } from '@angular/core'; // ViewContainerRef service
import { ComponentFactoryResolver } from '@angular/core'; // ComponentFactoryResolver service
import { ChangeDetectorRef } from '@angular/core'; // ChangeDetectorRef service
import { Pipe, PipeTransform } from '@angular/core'; // Pipe decorator, PipeTransform interface
import { Injectable } from '@angular/core'; // Injectable decorator
import { EventEmitter } from '@angular/core'; // EventEmitter class
import { Output } from '@angular/core'; // Output decorator
import { Input } from '@angular/core'; // Input decorator
import { HostListener } from '@angular/core'; // HostListener decorator
import { HostBinding } from '@angular/core';  // HostBinding decorator
import { ContentChild } from '@angular/core'; // ContentChild decorator
import { ContentChildren } from '@angular/core';  // ContentChildren decorator
import { QueryList } from '@angular/core';  // QueryList class
import { AfterContentInit } from '@angular/core'; // AfterContentInit interface
import { AfterContentChecked } from '@angular/core';  // AfterContentChecked interface
import { AfterViewInit } from '@angular/core';  // AfterViewInit interface
import { AfterViewChecked } from '@angular/core'; // AfterViewChecked interface
import { OnInit } from '@angular/core'; // OnInit interface
import { OnDestroy } from '@angular/core';  // OnDestroy interface
import { OnChanges } from '@angular/core';  // OnChanges interface
import { SimpleChanges } from '@angular/core';  // SimpleChanges class
import { DoCheck } from '@angular/core';  // DoCheck interface
import { KeyValueDiffers } from '@angular/core';  // KeyValueDiffers service
import { KeyValueDiffer } from '@angular/core'; // KeyValueDiffer interface
import { KeyValueChanges } from '@angular/core';  // KeyValueChanges interface
import { KeyValueChangeRecord } from '@angular/core'; // KeyValueChangeRecord interface 
import { IterableDiffers } from '@angular/core';  // IterableDiffers service
import { IterableDiffer } from '@angular/core'; // IterableDiffer interface
import { IterableChanges } from '@angular/core';  // IterableChanges interface
import { IterableChangeRecord } from '@angular/core'; // IterableChangeRecord interface
import { ChangeDetectionStrategy } from '@angular/core';  // ChangeDetectionStrategy enum
import { ChangeDetectorRef } from '@angular/core';  // ChangeDetectorRef service
import { NgZone } from '@angular/core'; // NgZone service
import { ApplicationRef } from '@angular/core'; // ApplicationRef service
import { ComponentRef } from '@angular/core'; // ComponentRef class
import { ComponentFactory } from '@angular/core'; // ComponentFactory class
import { ComponentFactoryResolver } from '@angular/core'; // ComponentFactoryResolver service
import { ViewContainerRef } from '@angular/core'; // ViewContainerRef service
import { TemplateRef } from '@angular/core';  // TemplateRef class
import { EmbeddedViewRef } from '@angular/core';  // EmbeddedViewRef class
```

Angular Material

```typescript
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
```

RxJS

```typescript
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Subscription } from 'rxjs/Subscription';
import { from } from 'rxjs';
import { fromEvent } from 'rxjs';
import { interval } from 'rxjs';
import { timer } from 'rxjs';
import { merge } from 'rxjs';
import { zip } from 'rxjs';
import { combineLatest } from 'rxjs';
import { concat } from 'rxjs';
import { forkJoin } from 'rxjs';
import { race } from 'rxjs';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { reduce } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { scan } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { exhaustMap } from 'rxjs/operators';
import { concatMap } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { share } from 'rxjs/operators';
import { shareReplay } from 'rxjs/operators';
import { buffer } from 'rxjs/operators';
import { bufferCount } from 'rxjs/operators';
import { bufferTime } from 'rxjs/operators';
import { bufferToggle } from 'rxjs/operators';
import { bufferWhen } from 'rxjs/operators';
import { combineAll } from 'rxjs/operators';
import { concatAll } from 'rxjs/operators';
import { count } from 'rxjs/operators';
import { endWith } from 'rxjs/operators';
import { every } from 'rxjs/operators';
import { exhaust } from 'rxjs/operators';
import { first } from 'rxjs/operators';
import { groupBy } from 'rxjs/operators';
import { ignoreElements } from 'rxjs/operators';
import { isEmpty } from 'rxjs/operators';
import { last } from 'rxjs/operators';
import { max } from 'rxjs/operators';
import { mergeAll } from 'rxjs/operators';
import { min } from 'rxjs/operators';
import { pairwise } from 'rxjs/operators';
import { partition } from 'rxjs/operators';
import { pluck } from 'rxjs/operators';
```

Firebase

```typescript
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { AngularFireRemoteConfigModule } from '@angular/fire/remote-config';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
```

## MVVM

**MVVM** stands for Model-View-ViewModel. It is a design pattern that separates the user interface (View) from the business logic (Model) using a ViewModel. The ViewModel acts as an intermediary between the View and the Model, providing data binding and event handling.

## MVC

**MVC** stands for Model-View-Controller. It is a design pattern that separates the user interface (View) from the business logic (Model) using a Controller. The Controller acts as an intermediary between the View and the Model, handling user input and updating the Model.

## TypeScript

**TypeScript** is JavaScript with syntax for types. TypeScript is a superset of JavaScript that compiles to plain JavaScript. It is developed and maintained by Microsoft.

## Rxjs

**Reactive Extensions Library for JavaScript** - RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.

## NgRx

**NgRx** is a Reactive libraries for Angular. It provides state management, side effects, and route handling. It is inspired by Redux. It is a set of Angular libraries to help manage state at scale in Angular applications.

## NgXS

**NgXS** is a state management pattern + library for Angular. It acts as a single source of truth for your application's state, providing simple rules for predictable state mutations.

[Back to top⤴️](#table-of-contents)

## Learn more from GitHub Repositories

- [Awesomw Angular](https://github.com/PatrickJS/awesome-angular)
- [Angular JumpStart](https://github.com/DanWahlin/Angular-JumpStart)
- [Angular Interview Questions by Sudheerj](https://github.com/sudheerj/angular-interview-questions)
- [Angular Learning Resources](https://github.com/avatsaev/angular-learning-resources)
- [CodAffection](https://github.com/CodAffection)
- [Bezkoder](https://github.com/bezkoder)
- [Angular Interview Questions by Yonet](https://github.com/Yonet/Angular-Interview-Questions)
- [Angular Basics ( v14.x )](https://github.com/learning-zone/angular-basics)

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
- [Learning Angular: A no-nonsense guide to building web applications with Angular 15, 4th Edition](https://a.co/d/epVsJMG)

## Learn from YouTube Channels

- [Freecodecamp](https://www.youtube.com/@freecodecamp)
- [Programming With Mosh](https://www.youtube.com/@programmingwithmosh)
- [Angular University](https://www.youtube.com/@AngularUniversity)
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
- [CodAffection](https://www.youtube.com/@CodAffection)
- [Techsith](https://www.youtube.com/@techsithtube)

## Learn More From Blogs Sites

- [Freecodecamp](https://www.freecodecamp.org/news)
- [Medium](https://medium.com/)
- [Dev.to](https://dev.to/)
- [Hashnode](https://hashnode.com/)
- [Angular Blog](https://blog.angular.io/)
- [Angular In Depth](https://angularindepth.com/)
- [Angular University](https://blog.angular-university.io/)

## List of Online Editors/Compiler for Angular

- [Stackblitz](https://stackblitz.com/)
- [CodeSandbox](https://codesandbox.io/)
- [Plunker](https://plnkr.co/)

## List of Twitter Users to Follow

- [Mosh](https://twitter.com/moshhamedani)
- [Minko Gechev](https://twitter.com/mgechev)
- [Todd Motto](https://twitter.com/toddmotto)
- [Deborah Kurata](https://twitter.com/DeborahKurata)
- [John Papa](https://twitter.com/John_Papa)
- [Dan Wahlin](https://twitter.com/DanWahlin)
- [Maximilian Schwarzmüller](https://twitter.com/maxedapps)
- [Wes Bos](https://twitter.com/wesbos)
- [Tracy Lee | ladyleet](https://twitter.com/ladyleet)
- [Shai Reznik](https://twitter.com/shai_reznik)
- [Victor Savkin](https://twitter.com/victorsavkin)
- [Stephen Fluin](https://twitter.com/stephenfluin)
- [Juri Strumpflohner](https://twitter.com/juristr)

## List of LinkedIn Users to Follow

- [Kevin Kreuzer](https://www.linkedin.com/in/kevin-kreuzer-a63b39121/)
- [Aristeidis Bampakos](https://www.linkedin.com/in/aristeidisbampakos/)
- [Dmytro Mezhenskyi](https://www.linkedin.com/in/dmezhenskyi/)
- [Santosh Yadav](https://www.linkedin.com/in/santoshyadavdev/)
- [Tomas Trajan](https://www.linkedin.com/in/tomastrajan/)
- [Marko Stanimirović](https://www.linkedin.com/in/markostanimirovic/)
- [Teja Gandhamu](https://www.linkedin.com/in/tejagandhamu/)
- [Santosh Yadav](https://www.linkedin.com/in/santoshyadavdev/)
- [Juri Strumpflohner](https://www.linkedin.com/in/juristr/)
- [Minko Gechev](https://www.linkedin.com/in/mgechev/)
- [Todd Motto](https://www.linkedin.com/in/toddmotto/)
- [Deborah Kurata](https://www.linkedin.com/in/deborah-kurata-7b7b5a1/)

## List of Discord Servers to Join

- [Angular](https://discord.com/invite/angular)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Angular](https://angular.io/)
- [Stackblitz](https://stackblitz.com/)

## Connect with me

- [Twitter](https://twitter.com/manthan_ank)
- [LinkedIn](https://www.linkedin.com/in/manthanank)
- [Facebook](https://www.facebook.com/manthanank/)
- [Instagram](https://www.instagram.com/manthan_ank/)
- [YouTube](https://www.youtube.com/@manthanank)
- [GitHub](https://github.com/manthanank)

## Support

If you like this learning repository and find it useful, consider buying me a coffee or sponsoring me through the GitHub Sponsor. Your support will help me to continue and bring more exciting projects. Thank you!

[![Buy Me A Coffee](/public/bmc-button.svg)](https://www.buymeacoffee.com/manthanank)

[![Sponsor Me](https://img.shields.io/badge/Sponsor-GitHub-green)]([https://](https://github.com/sponsors/manthanank))

---

Show your support by 🌟 the repository.
