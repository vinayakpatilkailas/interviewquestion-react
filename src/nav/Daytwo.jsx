import React from "react";

const Daytwo = () => {
  return (
    <div className="day-2">
      <div className="inner-box-day-2">
        <div className="day-2-qus-1">
          <br />
          <h2>
          Qus 1 What is the Difference between react and react native? Which one is
            library or framework?
          </h2>
          <br />
          <h3>ReactJS</h3>
          <ul>
            <li>
              A JavaScript library, widely used for developing the user
              interface.
            </li>
            <li>
              Since it is majorly used for web browsers, it can be easily
              executed on all platforms.
            </li>
            <li>
              ReactJS renders HTML tags in its user interface. React components
              can include simple HTML tags.
            </li>
            <li>ReactJS uses Cascading Style Sheets (CSS).</li>
            <li>
              ReactJS uses VirtualDOM, a tool that allows for easy interaction
              with DOM elements.
            </li>
            <li>
              ReactJS uses the React router to allow users to visit different
              web pages.
            </li>
            <li>
              ReactJS supports third-party packages but lacks native library
              support.
            </li>
            <li> Ex-Facebook, Netflix, Medium, Udemy</li>
          </ul>
          <br />
          <h3>React Native</h3>
          <ul>
            <li>
              A cross-platform mobile framework used for developing native
              mobile applications.
            </li>
            <li>
              Since it is used for native applications, it takes a sufficient
              amount of developer effort to be customized and executed on all
              platforms.
            </li>
            <li>
              React Native renders JSX in its user interface. React Native
              supports specific JSX tags which are used.
            </li>
            <li>React Native uses a Stylesheet object (javascript object).</li>
            <li>React Native widely uses native APIs.</li>
            <li>
              React Native uses its built-in Navigator library to allow users to
              visit different screens.
            </li>
            <li>
              React Native lacks both native libraries and third-party packages
              support.
            </li>
            <li>It is used to develop true native mobile applications.</li>
            <li>Ex-Uber Eats, Tesla</li>
          </ul>
        </div>
        <br />
        <div className="day-2-qus-2">
          <h2> Qus 2 What is the package name you are using for routing</h2>
          <br />
          <p>react-router-dom are using for Routing.</p>
          <p>
            React Router is a fully-featured client and server-side routing
            library for React, a JavaScript library for building user
            interfaces. React Router runs anywhere React runs; on the web, on
            the server with node.js, and on React Native.
          </p>
        </div>
        <br />
        <div className="day-2-qus-3">
          <h2> Qus 3 How do you pass data from parent to child?</h2>
          <br />
          <p>
            React.js allows us to use props (short form of property) to pass
            data from parent component to child component. We have to set props
            value inside the child component, while we embed it to the parent
            component.
          </p>
        </div>
        <br/>
        <div className="day-2-qus-4">
          <h2> Qus 4 What is lazy loading in react ?</h2>
          <br/>
          <p>
            Lazy loading is a design pattern for optimizing web and mobile apps.
            The concept of lazy loading is simple: initialize objects that are
            critical to the user interface first and quietly render noncritical
            items later.
          </p>
          <p>
            React has two features that make it very easy to apply
            code-splitting and lazy loading to React components: React.lazy()
            and React.Suspense.
          </p>
          <p>
            React.lazy() is a function that enables you to render a dynamic
            import as a regular component. Dynamic imports are a way of
            code-splitting, which is central to lazy loading. A core feature as
            of React 16.6, React.lazy() eliminates the need to use a third-party
            library such as react-loadable.
          </p>
          <p>
            React.Suspense enables you to specify the loading indicator in the
            event that the components in the tree below it are not yet ready to
            render.
          </p>
        </div>
        <br/>
        <div className="day-2-qus-6">
        <br/>
          <h2> Qus 5 Difference b/w Stateful and stateless Component</h2>
          <br/>
          <h3>Stateful Components</h3>
          <ul>
            <li>
              Stateful components are those components which have a state. The
              state gets initialized in the constructor. It stores information
              about the component’s state change in memory. It may get changed
              depending upon the action of the component or child components.
            </li>
          </ul>
          <br/>
          <h3>Stateless Components</h3>
          <ul>
            <li>
              Stateless components are those components which don’t have any
              state at all, which means you can’t use this.setState inside these
              components. It is like a normal function with no render method. It
              has no lifecycle, so it is not possible to use lifecycle methods
              such as componentDidMount and other hooks.
            </li>
          </ul>
          <br/><br/>
        </div>
      </div>
    </div>
  );
};

export default Daytwo;