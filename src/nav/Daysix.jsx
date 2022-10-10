import React from "react";

const Daysix = () => {
  return (
    <div className="day-3">
      <div className="innerbox-day-3">
        <div className="day-6-qus-1">
        <br />
          <h2>Qus 1 What is an event in react?</h2>
          <br />
          <ul>
            <li>
              An event is an action that could be triggered as a result of the
              user action or system generated event. For example, a mouse click,
              loading of a web page, pressing a key, window resizes, and other
              interactions are called events.
            </li>
            <li>
              React has its own event handling system which is very similar to
              handling events on DOM elements. The react event handling system
              is known as Synthetic Events. The synthetic event is a
              cross-browser wrapper of the browser's native event.
            </li>
            <li>
              With JSX, a function is passed as the event handler instead of a
              string.
            </li>
            <li>React events are named as camelCase instead of lowercase.</li>
          </ul>
        </div>
        <br />
        <div className="day6-qus-2">
          <h2> Qus 2 What is memory leak and how to overcome?</h2>
          <br />
          <ul>
            <li>
              Memory leak occurs when programmers create a memory in heap and
              forget to delete it.{" "}
            </li>
            <li>
              The consequences of memory leak is that it reduces the performance
              of the computer by reducing the amount of available memory.
              Eventually, in the worst case, too much of the available memory
              may become allocated and all or part of the system or device stops
              working correctly, the application fails, or the system slows down
              vastly .
            </li>
            <li>
              Memory leaks are particularly serious issues for programs like
              daemons and servers which by definition never terminate.
            </li>
          </ul>
        </div>
        <br />
        <div className="day-6-qus-3">
          <h2>Qus 3 Do you prefer function-based or class component and why ?</h2>
          <br />

          <h3> Functional Components </h3>
          <ul>
            <li>
              A functional component is just a plain JavaScript pure function
              that accepts props as an argument and returns a React
              element(JSX).
            </li>
            <li>There is no render method used in functional components.</li>
            <li>
              Functional component run from top to bottom and once the function
              is returned it cant be kept alive.
            </li>
            <li>
              Also known as Stateless components as they simply accept data and
              display them in some form, that they are mainly responsible for
              rendering UI.
            </li>
            <li>
              React lifecycle methods (for example, componentDidMount) cannot be
              used in functional components.
            </li>
            <li>
              Hooks can be easily used in functional components to make them
              Stateful.
            </li>
            <li>example: const [name,SetName]= React.useState(‘ ‘)</li>
            <li>Constructors are not used.</li>
          </ul>
          <br />
          <h3>Class Components </h3>
          <ul>
            <li>
              A class component requires you to extend from React. Component and
              create a render function which returns a React element.
            </li>
            <li>
              It must have the render() method returning JSX (which is
              syntactically similar to HTML)
            </li>
            <li>
              Class component is instantiated and different life cycle method is
              kept alive and being run and invoked depending on phase of class
              component.
            </li>
            <li>
              Also known as Stateful components because they implement logic and
              state.
            </li>
            <li>
              React lifecycle methods can be used inside class components (for
              example, componentDidMount).
            </li>
            <li>
              It requires different syntax inside a class component to implement
              hooks.
            </li>
            <li>Constructor are used as it needs to store state. </li>
          </ul>
        </div>
        <br />
        <div className="day-6-qus-4">
          <h2>Qus 4 What is the use of middleware Redux thunk ?</h2>
          <br />
          <ul>
            <li>
              Redux is a state management tool, which is used to store the state
              of different variables in our react application. It makes complex
              react applications easier by centralizing the application state.
              You can learn more about redux here. Redux supports middleware,
              and middleware functions run between dispatching an action and the
              moment it reaches the reducer. Redux middlewares can be used for
              logging, routing, asynchronous actions, etc.
            </li>
            <li>
              For the scope of this tutorial, we will focus on a redux
              middleware called thunk. It allows us to return functions instead
              of objects from redux actions. Plain redux doesn’t allow complex
              logic inside action functions, you can only perform simple
              synchronous updates by dispatching actions
            </li>
            <li>
              This middleware extends its ability and lets you write complex
              logic that interacts with the store. Thunk doesn’t interfere with
              the action until it returns a function. Thunk allows us to
              dispatch actions manually, which gives us the power to incorporate
              some logic or run some asynchronous code before dispatching an
              action. The function returned from action is called a thunk
              function which is called with two arguments :{" "}
            </li>
            <li>
              1. dispatch: It is a method used to dispatch actions, that can be
              received by reducers.{" "}
            </li>
            <li>
              2. getState: It gives access to store inside the thunk function.
            </li>
            <li>
              A thunk function may contain any arbitrary logic, sync, or async,
              and can call dispatch or getState at any time. Before moving any
              further let’s understand the difference between the flow of redux
              with and without thunk.
            </li>
          </ul>
        </div>
        <br />
        <div className="day-6-qus-5">
          <h2>Qus 5 What do you know about NPM?</h2>
          <br />
          <ul>
            <li>
              npm is the world's largest software registry. Open source
              developers from every continent use npm to share and borrow
              packages, and many organizations use npm to manage private
              development as well.
            </li>
            <li>
              npm consists of three distinct components: 1. the website ,2.the Command
              Line Interface (CLI) ,3.the registry
            </li>
            <li>Adapt packages of code for your apps, or incorporate packages as they are.</li>
            <li>Download standalone tools you can use right away.</li>
            <li>Run packages without downloading using npx.</li>
            <li>Share code with any npm user, anywhere.</li>
            <li>Restrict code to specific developers.</li>
            <li>Create organizations to coordinate package maintenance, coding, and developers.</li>
            <li>Form virtual teams by using organizations.</li>
          </ul>
          <br /><br />
        </div>
      </div>
    </div>
  );
};

export default Daysix;