# React/JSX Standard

Based on/stolen from the great work of other React coding standards and style guides:

* [AirBNB's React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
* [Ryan Zec's React Coding Standards](https://github.com/ryanzec/coding-standards/blob/master/reactjs.md)
* [David Chang's React Style Guide](https://reactjsnews.com/react-style-guide-patterns-i-like)
* [Khan's React Style Guide](https://github.com/Khan/style-guides/blob/master/style/react.md)

## Basics

Most of the basics of the [Javascript standard](Javascript-standard.md) apply here too. It *is* Javascript after all.

* Always use JSX syntax.
* Do not use `React.createElement` unless you're initialising from a file that is not JSX.
* Imports should be in the correct order:
    - React libraries
    - Third party libraries and components
    - Your components
* Include a trailing slash in components that do not contain children:
    ```javascript
    // Good
    render(<App />, appElem);

    // Bad
    render(<App></App>, appElem);

    // Good
    <Thing>
        <ChildThing />
        <ChildThing />
    </Thing>
    ```
* Enclose multi-line return statements in parentheses:
    ```javascript
    // Bad
    return <div>
        // Some stuff
    </div>;

    // Good
    return (
        <div>
            // Some stuff
        </div>
    );
    ```
* Align and sort HTML properties. Put classNames and keys first, then everything else in alphabetical order. The closing angle brace should be on a line of its own, indented the same as the opening angle brace:
    ```javascript
    <Thing
        className="pn-thing"
        firstName="Trevor"
        thatThing="goodbye"
        thisThing="hello"
    />

    <Thing
        className="pn-thing"
        firstName="Trevor"
        thatThing="goodbye"
        thisThing="hello"
    >
        <ChildElem />
    </Thing>
    ```
* In general, prefer `prop`s to `state`.
* Filenames for React components should be PascalCase
* Component names should be PascalCase, but instances of them should be camelCase
    ```javascript
    // Bad
    import reservationCard from './ReservationCard';

    // Good
    import ReservationCard from './ReservationCard';

    // Bad
    const ReservationItem = <ReservationCard />;

    // Good
    const reservationItem = <ReservationCard />;
    ```
* When `import`ing specific functions/components, always include spaces inside the curly braces
    ```javascript
    import { badgers } from './fields/Animals.js';
    ```
* When importing multiple items, place each on a new line
    ```javascript
    import {
        badgers,
        cows,
        sheep
    } from './fields/Animals.js';
    ```
* Avoid using DOM component prop names for different purposes. E.g., `style` or `className`
* Do not use displayName for naming components. Instead, name the component by reference.
    ```javascript
    // Bad
    export default React.createClass({
        displayName: 'ReservationCard',
        // Stuff goes here
    });

    // Good
    export default class ReservationCard extends React.Component {
        // Stuff goes here
    }

    // Better
    import React, { Component } from 'react';

    export default class ReservationCard extends Component {
        // Stuff goes here
    }
    ```
* Always use double quotes (`"`) for JSX attributes, but single quotes (`'`) for all other JS.
    ```javascript
    // Bad
    <Foo bar='bar' />

    // Good
    <Foo bar="bar" />

    // Bad
    <Foo style={{ left: "20px" }} />

    // Good
    <Foo style={{ left: '20px' }} />
    ```
* Always include a single space in your self-closing tag, unless it's multiline
    ```javascript
    // Bad
    <Foo/>

    // Very bad
    <Foo                 />

    // Still bad
    <Foo
     />

    // Good
    <Foo />

    // Good, because more than one line
    <Foo
        bar="bar"
    />
    ```
* Do not pad JSX curly braces with spaces.
    ```javascript
    // Bad
    <Foo bar={ baz } />

    // Good
    <Foo bar={baz} />
    ```
* Always use camelCase for prop names.
    ```javascript
    // Bad
    <Foo
        UserName="hello"
        phone_number={12345678}
    />

    // Good
    <Foo
        userName="hello"
        phoneNumber={12345678}
    />
    ```
* Omit the value of the prop when it is explicitly true
    ```javascript
    // Bad
    <Foo
      hidden={true}
    />

    // Good
    <Foo
      hidden
    />

    // Good
    <Foo hidden />
    ```
* Avoid using an array index as key prop, prefer a stable ID.
    ```javascript
    // Bad
    {todos.map((todo, index) =>
        <Todo
            {...todo}
            key={index}
        />
    )}

    // Good
    {todos.map(todo => (
        <Todo
            {...todo}
            key={todo.id}
        />
    ))}
    ```
* Always define explicit defaultProps for all non-required props.
* Use spread props sparingly.
* Always use ref callbacks
    ```javascript
    // Bad
    <Foo
        ref="myRef"
    />

    // Good
    <Foo
        ref={(ref) => { this.myRef = ref; }}
    />
    ```
* Wrap JSX tags in parentheses when they span more than one line.
    ```javascript
    // Bad
    render() {
      return <MyComponent variant="long body" foo="bar">
                <MyChild />
            </MyComponent>;
    }

    // Good
    render() {
        return (
            <MyComponent variant="long body" foo="bar">
                <MyChild />
            </MyComponent>
        );
    }

    // Good, when single line
    render() {
        const body = <div>hello</div>;

        return <MyComponent>{body}</MyComponent>;
    }
    ```
* Bind event handlers for the render method in the constructor. Why? A bind call in the render path creates a brand new function on every single render.
    ```javascript
    // Bad
    class extends React.Component {
        onClickDiv() {
            // Do stuff
        }

        render() {
            return <div onClick={this.onClickDiv.bind(this)} />;
        }
    }

    // Good
    class extends React.Component {
        constructor(props) {
            super(props);

            this.onClickDiv = this.onClickDiv.bind(this);
        }

        onClickDiv() {
            // Do stuff
        }

        render() {
            return <div onClick={this.onClickDiv} />;
        }
    }
    ```
* Do not use underscore prefix for internal methods of a React component.
* Be sure to return a value in your `render` methods
* Ordering for class extends React.Component:
    - optional static methods
    - `constructor`
    - `getChildContext`
    - `componentWillMount`
    - `componentDidMount`
    - `componentWillReceiveProps`
    - `shouldComponentUpdate`
    - `componentWillUpdate`
    - `componentDidUpdate`
    - `componentWillUnmount`
    - clickHandlers or eventHandlers
    - Other custom methods
    - `render`
* Unless the component is only rendering 1 thing, the main render method should only contain JSX (and the allowable logic JSX can have), it should not contain pure JS code.
* Event methods must start with on to indicate it is attached to an event.
* If you want to render something simple conditionally, you can use the same conditions or ternaries as you typically would in JavaScript:
    ```javascript
    {this.state.show && 'This is Shown'}
    {this.state.on ? 'On' : 'Off'}
    ```
* Always include `propTypes`, and where possible `defaultProps`.
* Ensure code is well documented, using docblocks where it makes sense to do so.
