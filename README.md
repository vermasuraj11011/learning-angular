# Learning Angular

## What is Angular?

Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.

## How to create a new Angular project?

````shell
ng new <project-name>
````

## run the application

````shell
ng serve
````

## Important Terminologies

- **Component**: A component controls a patch of the screen called a view. You define a component's application logic—what it does to support the view—inside a class. The class interacts with the view through an API of properties and methods. Angular provides a consistent set of lifecycle hooks that give you control as the component is created, updated, and destroyed.
- **Directive**: A directive is a class with a @Directive decorator. Angular provides built-in directives such as NgIf, NgFor, and NgSwitch that are used to manipulate the DOM. You can also define custom directives to implement application-specific behavior.
- **Service**: A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well. The Angular injector uses services to make application-wide data and logic available throughout your application.
- **Module**: An NgModule is a class marked by the @NgModule decorator. @NgModule takes a metadata object that tells Angular how to compile and launch the application. It identifies the module's own components, directives, and pipes, making some of them public, through the exports property, so that external components can use them. @NgModule can also add service providers to the application dependency injectors.
- **Pipe**: A pipe is a class with the @Pipe decorator. A pipe takes in data as input and transforms it to a desired output. Angular comes with several built-in pipes and you can also define your own pipes.
- **Routing**: Routing is a mechanism that allows you to move between different parts of your application. You can define routes to display different components based on the URL. Angular Router is a powerful JavaScript router built and maintained by the Angular core team that can be installed from the @angular/router package.
- **Dependency Injection**: Dependency injection (DI) is a design pattern that allows you to remove hard-coded dependencies and make your application more flexible. Angular's DI framework provides dependencies to a class upon instantiation. You can use DI to increase flexibility and modularity in your applications.
- **Forms**: Angular provides two approaches to handling user input through forms: reactive and template-driven. Both capture user input events from the view, validate the user input, create a form model, and offer a way to track changes.
- **HTTP Client**: Angular provides a simplified client HTTP API for Angular applications that rests on the XMLHttpRequest interface exposed by browsers. Additional benefits of the HTTP client include testability features, typed request and response objects, request and response interception, Observable APIs, and streamlined error handling.
- **Authentication**: Angular provides a library for handling user authentication. The library is called Angular Authentication and it provides a service for authenticating users and a guard to prevent unauthenticated users from accessing restricted routes.
- **Testing**: Angular provides tools for testing your application and guaranteeing that it behaves as expected. Angular applications can be tested using different types of tests: unit tests, integration tests, and end-to-end tests.
- **Performance**: Angular provides tools to help you optimize your application's performance. You can use Angular's built-in performance tools to analyze your application's performance and make improvements.
- **Internationalization**: Angular provides tools to help you internationalize your application. You can use Angular's built-in internationalization tools to translate your application into different languages and locales.

## Create components 
````shell
ng generate component <component name>

ng g c <component name>
````

## NgModules

An NgModule is a class marked by the @NgModule decorator. @NgModule takes a metadata object that tells Angular how to compile and launch the application. It identifies the module's own components, directives, and pipes, making some of them public, through the exports property, so that external components can use them. @NgModule can also add service providers to the application dependency injectors.

## Data Binding

Data binding is a core concept in Angular and allows you to define communication between a component and the DOM. There are four forms of data binding in Angular:

## Types of Data Binding

- **Interpolation**: {{ value }} - Interpolation is a one-way data binding from the component to the view. It is used to output data from the component to the view.
- **Property binding**: [property] = "value" - Property binding is a one-way data binding from the component to the view. It is used to set a property of a view element.
- **Event binding**: (event) = "handler" - Event binding is a one-way data binding from the view to the component. It is used to listen to events raised by the view.
- **Two-way data binding**: [(ngModel)] = "value" - Two-way data binding is a combination of property binding and event binding. It allows data to flow in both directions.

- **Template reference variables**: #var - Template reference variables are used to get a reference to a DOM element or directive in the template.
- **NgModel**: NgModel is a directive that implements two-way data binding. It binds the value of an input element to a variable defined in the component.
- **NgClass**: NgClass is a directive that allows you to add or remove CSS classes dynamically based on the value of an expression.
- **NgStyle**: NgStyle is a directive that allows you to add or remove CSS styles dynamically based on the value of an expression.
- **NgFor**: NgFor is a directive that allows you to loop over a collection of data and render a template for each item in the collection.
- **NgIf**: NgIf is a directive that allows you to conditionally render a template based on the value of an expression.
- **NgSwitch**: NgSwitch is a directive that allows you to conditionally render a template based on the value of an expression.
- **NgTemplateOutlet**: NgTemplateOutlet is a directive that allows you to render a template dynamically.
- **NgContent**: NgContent is a directive that allows you to project content into a component.
- **ViewChild**: ViewChild is a decorator that allows you to get a reference to a child component or directive in the parent component.
- **ContentChild**: ContentChild is a decorator that allows you to get a reference to a child component or directive in the parent component's template.
- **ElementRef**: ElementRef is a class that allows you to get a reference to a DOM element in the component.
- **Renderer2**: Renderer2 is a class that allows you to manipulate the DOM in a way that is safe and compatible with server-side rendering.
- **HostListener**: HostListener is a decorator that allows you to listen to events raised by the host element.
- **HostBinding**: HostBinding is a decorator that allows you to bind a property of the host element to a variable defined in the component.
