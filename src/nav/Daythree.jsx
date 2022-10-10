import React from 'react'

const Daythree = () => {
  return (
    <div className='day-3'>
      <div className="innerbox-day-3">
        <div className="day-3-qus-1">
        <br />
        <br />
          <h2>Qus 1 Difference between Axios and fetch?</h2>
          <br />
          <h3>Axios</h3>
          <ul>
            <li>Axios has url in request object.</li>
            <li>Axios is a stand-alone third party package that can be easily installed.</li>
            <li>Axios enjoys built-in XSRF protection.</li>
            <li>Axios uses the data property.</li>
            <li>Axios’ data contains the object.</li>
            <li>Axios request is ok when status is 200 and statusText is ‘OK’.</li>
            <li>Axios performs automatic transforms of JSON data.</li>
            <li>Axios allows cancelling request and request timeout.</li>
            <li>Axios has the ability to intercept HTTP requests.</li>
            <li>Axios has built-in support for download progress.</li>
            <li>Axios has wide browser support.</li>
            <li>Axios “GET” call can have body Content</li>
          </ul>
          <br />
          <h3>	Fetch</h3>
          <ul>
            <li>Fetch has no url in request object.</li>
            <li>Fetch is built into most modern browsers; no installation is required as such.</li>
            <li>Fetch uses the body property.</li>
            <li>Fetch’s body has to be stringified.</li>
            <li>Fetch request is ok when response object contains the ok property.</li>
            <li>Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.</li>
            <li>Fetch, by default, doesn’t provide a way to intercept requests.</li>
            <li>Fetch does not support upload progress.</li>
            <li>Fetch only supports Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+ (This is known as Backward Compatibility).</li>
            <li>Fetch “GET” call cannot have body Content.</li>
          </ul>
        </div>
        <br />
        <div className="day-3-qus-2">
           <h2>Qus 2 What is UseState Hook ?</h2> 
           <br />
           <ul>
          <li>The React useState Hook allows us to track state in a function component.</li>
            
          <li>State generally refers to data or properties that need to be tracking in an application.</li>
          <li>The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.</li>
           </ul>
         
        </div>
        <br />
        <div className="day-3-qus-3">
          <h2>Qus 3 What is useEffect Hook ?</h2>
          <br />
          <ul>
            <li>The useEffect Hook allows you to perform side effects in your components.</li>
            <li>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</li>
            <li>useEffect accepts two arguments. The second argument is optional.</li>
            <li>useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.</li>
            <li>This is not what we want. There are several ways to control when side effects run.</li>
            <li>We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.</li>
          </ul>

        </div>
        <br />
        <div className="day-3-qus-4">
          <h2>Qus 4 What is UseReducer Hook ?</h2>
          <br />
          <ul>
            <li>The useReducer Hook is the better alternative to the useState hook and is generally more preferred over the useState hook when you have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized.</li>
            <li>The useReducer hook takes three arguments including reducer, initial state, and the function to load the initial state lazily.</li>
            <li>useReducer is one of the additional Hooks that shipped with React v16.8. An alternative to the useState Hook, useReducer helps you manage complex state logic in React applications. When combined with other Hooks like useContext, useReducer can be a good alternative to Redux, Recoil or MobX. In certain cases, it is an outright better option.</li>
          </ul>
        </div>
        <br />
        <div className="day-3-qus-5">
        <br />
          <h2>Qus 5 What is UseMemo Hook ?</h2>
          <ul>
            <li>The React useMemo Hook returns a memoized value.</li>
            <li>Think of memoization as caching a value so that it does not need to be recalculated.</li>
            <li>The useMemo Hook only runs when one of its dependencies update.</li>
            <li>This can improve performance.</li>
            <li>The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.</li>

          </ul>
          <br /> <br />
        </div>


      </div>
    </div>
  )
}

export default Daythree