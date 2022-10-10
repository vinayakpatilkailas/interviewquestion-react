import React from 'react'

const Dayfour = () => {
  return (
    <div className='day-2'>

      <div className="innerbox-day-3">
        <div className="day-4-qus-1">
        <br /><br />
          <h2>Qus 1 What is UseRef Hook ?(Implementation)</h2>
          <br />
          <ul>
            <li>The useRef Hook allows you to persist values between renders.</li>
            <li>It can be used to store a mutable value that does not cause a re-render when updated.</li>
            <li>It can be used to access a DOM element directly.</li>
            <li>useRef() only returns one item. It returns an Object called current.

When we initialize useRef we set the initial value: useRef(0).</li>
          </ul>
        </div>
        <br />
        <div className="day-4-qus-2">
          <h2>Qus 2 What is Context api</h2>
          <br />
          <ul>
            <li>Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</li>
            <li>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</li>
            <li>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</li>
            <li>Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</li>
          </ul>
        </div>
        <br />
        <div className="day-4-qus-3">
          <h2>Qus 3 what is useCallback Hook ?</h2>
          <br />
         <ul>
          <li>The useCallback hook is used when you have a component in which the child is rerendering again and again without need.</li>
          <li>Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. </li>
          <li>This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</li>
          <li>The React useCallback Hook returns a memoized callback function.</li>
         </ul>
        </div>
        <br />
        <div className="day-4-qus-4">
          <h2>Qus 4 What is Props Drilling Concept ?What is State Uplifting ?</h2>
          <br />
          <h3>Props Drilling </h3>
          <ul>
            <li>Prop drilling is the unofficial term for passing data through several nested children components, in a bid to deliver this data to a deeply-nested component. The problem with this approach is that most of the components through which this data is passed have no actual need for this data.</li>
            <li>They are simply used as mediums for transporting this data to its destination component.</li>
            <li>Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level. Here is a diagram to demonstrate it better. Data needed to be sent from Parent to ChildC. In this article different ways to do that are discussed.</li>
          </ul>
          <br />
          <h3>What is State Uplifting ?</h3>
          <ul>
            <li>Lifting up the State: As we know, every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.</li>
            <li>Time to use Lift up the State: If the data in “parent and children components” or in “cousin components” is Not in Sync.</li>
            <li>Example 1: If we have 2 components in our App. A  B where, A is parent of B. keeping the same data in both Component A and B might cause inconsistency of data. </li>
          </ul>
        </div>
        <br />
        <div className="day-4-qus-5">
          <h2>Qus 5 What are React Life cycles Explain each one with Example</h2>
          <br />
          <ul>
            <li>We have seen so far that React web apps are actually a collection of independent components that run according to the interactions made with them. Every React Component has a lifecycle of its own, lifecycle of a component can be defined as the series of methods that are invoked in different stages of the component’s existence. The definition is pretty straightforward but what do we mean by different stages? A React Component can go through four stages of its life as follows. </li>
            <li>Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.</li>
            <li>Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.</li>
            <li>Updating: Updating is the stage when the state of a component is updated and the application is repainted.</li>
            <li>Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.</li>
          </ul>
          <br /><br />

        </div>
      </div>

    </div>
  )
}

export default Dayfour