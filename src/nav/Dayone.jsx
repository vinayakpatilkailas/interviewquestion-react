import React from "react";

const Dayone = () => {
  return (
    <div className="day-1">
      <div className="inner-box">

     
      <div className="qus-1-box">
        <br/>
        <h2> Qus1 What is Virtual DOM?</h2>
        <br/>
        <p>
          Virtual DOM: React uses Virtual DOM exists which is like a lightweight
          copy of the actual DOM(a virtual representation of the DOM). So for
          every object that exists in the original DOM, there is an object for
          that in React Virtual DOM. It is exactly the same, but it does not
          have the power to directly change the layout of the document.
          Manipulating DOM is slow, but manipulating Virtual DOM is fast as
          nothing gets drawn on the screen. So each time there is a change in
          the state of our application, the virtual DOM gets updated first
          instead of the real DOM. You may still wonder, “Aren’t we doing the
          same thing again and doubling our work? How can this be faster?” Read
          below to understand how things will be faster using virtual DOM.
        </p>
        <br/>
          <p>
            How Virtual DOM actually make things faster: When anything new is
            added to the application, a virtual DOM is created and it is
            represented as a tree. Each element in the application is a node in
            this tree. So, whenever there is a change in the state of any
            element, a new Virtual DOM tree is created. This new Virtual DOM
            tree is then compared with the previous Virtual DOM tree and make a
            note of the changes. After this, it finds the best possible ways to
            make these changes to the real DOM. Now only the updated elements
            will get rendered on the page again.
          </p>
      </div>
      <br />
      <div className="qus-2-box">
        <h2> Qus 2 What is SPA?</h2>
        <br/>
        <p>
          SPA stands for Single Page Application. It is a very common way of
          programming websites these days. The idea is that the website loads
          all the HTML/JS the first time you visit. When you then navigate, the
          browser will only rerender the content without refreshing the website.
        </p>
        <br />
        <p>
          This is used to make the user experience feel a lot smoother. You can
          tell when it’s a SPA or multi-page application when navigating between
          menus often because a multi-page application will reload, making the
          whole UI blink fast depending on the content. This is due to it
          refreshing the website. A SPA will instead feel smooth in the
          transaction as it simply shows other content without refreshing.
        </p>
      </div>
      <br />
      <div className="qus-3-box">
        <h2>
          {" "}
          Qus 3 What is difference between class and functional component?
        </h2>
        <br/>
        <div className="qus-3-table-box">
          <div className="table-box-1">
            <h3>Functional Component</h3>
            <ul>
              <li>
                A functional component is just a plain JavaScript pure function
                that accepts props as an argument and returns a React
                element(JSX).
              </li>
              <li>There is no render method used in functional components.</li>
              <li>
                Functional component run from top to bottom and once the
                function is returned it cant be kept alive.
              </li>
              <li>
                Also known as Stateless components as they simply accept data
                and display them in some form, that they are mainly responsible
                for rendering UI.
              </li>
              <li>
                Hooks can be easily used in functional components to make them
                Stateful.
              </li>
              <li>Constructors are not used.</li>
            </ul>
          </div>
          <br/>
          <div className="table-box-2">
            <h3>Class Component</h3>
            <ul>
              <li>
                A class component requires you to extend from React. Component
                and create a render function which returns a React element.
              </li>
              <li>
                It must have the render() method returning JSX (which is
                syntactically similar to HTML)
              </li>
              <li>
                Class component is instantiated and different life cycle method
                is kept alive and being run and invoked depending on phase of
                class component.
              </li>
              <li>
                Also known as Stateful components because they implement logic
                and state.
              </li>
              <li>
                React lifecycle methods can be used inside class components (for
                example, componentDidMount).
              </li>
              <li>
                It requires different syntax inside a class component to
                implement hooks.
              </li>
              <li>Constructor are used as it needs to store state. </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="qus-4-box">
        <h2>Qus 4 What does mean by state and its use in react?</h2>
        <br/>
        <p>
          The state is a built-in React object that is used to contain data or
          information about the component. A component’s state can change over
          time; whenever it changes, the component re-renders. The change in
          state can happen as a response to user action or system-generated
          events and these changes determine the behavior of the component and
          how it will render.{" "}
        </p>
        <ul>
          <li>
            A state can be modified based on user action or network changes
          </li>
          <li>
            Every time the state of an object changes, React re-renders the
            component to the browser
          </li>
          <li>The state object is initialized in the constructor</li>
          <li>The state object can store multiple properties</li>
          <li>
            this.setState() is used to change the value of the state object
          </li>
          <li>
            setState() function performs a shallow merge between the new and the
            previous state
          </li>
        </ul>
      </div>
      <br />
      <div className="qus-5-box">
        <h2> Qus 5 What is JSX and why do we use it instead of js?</h2>
        <br/>
        <p>
          <ul>
            <li>
              JSX allows us to write HTML elements in JavaScript and place them
              in the DOM without any createElement() and/or appendChild()
              methods.
            </li>
            <li>JSX converts HTML tags into react elements.</li>
            <li>
              You are not required to use JSX, but JSX makes it easier to write
              React applications.
            </li>
          </ul>
        </p>
      </div>
      <br/>
      <div className="qus-6-box">
        <h2>Qus 6 What is package.json?</h2>
        <br/>
        <p>
          The package.json file is the heart of any Node project. It records
          important metadata about a project which is required before publishing
          to NPM, and also defines functional attributes of a project that npm
          uses to install dependencies, run scripts, and identify the entry
          point to our package.
        </p>
      </div>
      <br/><br/>
      </div>
    </div>
  );
};

export default Dayone;