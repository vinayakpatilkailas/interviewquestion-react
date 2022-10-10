import React from 'react'

const Dayfive = () => {
  return (
    <div className='day-3'>
      <div className="innerbox-day-3">
        <div className='day-5-qus-1'>
        <br />
          <h2>Qus 1 High Order Component in react js ?</h2>
          <br />
          <ul>
            <li>Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.</li>
            <li>Easy to handle</li>
            
            </ul>

        </div>
        <br />
        <div className='day-5-qus-2'>
          <h2>Qus 2 Do you know about SEO ? </h2>
          <br />
          <ul>
            <li>Search engine optimisation (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic (known as “natural” or “organic” results) rather than direct traffic or paid traffic.</li>
            <li>SEO stands for “search engine optimization.” In simple terms, it means the process of improving your site to increase its visibility when people search for products or services related to your business in Google, Bing, and other search engines. The better visibility your pages have in search results, the more likely you are to garner attention and attract prospective and existing customers to your business.</li>
            
          </ul>
        </div>
        <br />
        <div className='day-5-qus-3'>
          <h2>Qus 3 clean up in useEffect?</h2>
          <br />
          <ul>
            <li>React’s useEffect cleanup function saves applications from unwanted behaviors like memory leaks by cleaning up effects. In doing so, we can optimize our application’s performance.</li>
            <li>cleanup is a function in the useEffect Hook that allows us to tidy up our code before our component unmounts. When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.</li>
            <li>The useEffect Hook is built in a way that we can return a function inside it and this return function is where the cleanup happens. The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.</li>
          </ul>
        </div>
        <br />
        <div className='day-5-qus-4'>

          <h2>Qus 4 Why do we need keys in react list?</h2>
          <br />
          <ul>
            <li>A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are used to give an identity to the elements in the lists.</li>
            <li>The next thing that comes to mind is that what should be good to be chosen as key for the items in lists. It is recommended to use a string as a key that uniquely identifies the items in the list.</li>
          </ul>

        </div>
        <br />

        <div className='day-5-qus-4'>
          <h2>Qus 5 Do you know about redux?</h2>
          <br />
          <ul>
            <li>Redux is a state management tool for JavaScript applications. It is more commonly used with ReactJS but is also compatible with many other frameworks such as Angular, Vue, Preact, as well as vanilla JavaScript. It is important to note that even though React and Redux are frequently used together, they are independent of each other!</li>
            <li> Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test.</li>
            <li>That said, it is most useful when combined with a declarative view implementation that can infer the UI updates from the state changes, such as React or one of the similar libraries available.</li>
          </ul>
          <br /><br />

      </div>

      </div>


    </div>
  )
}

export default Dayfive