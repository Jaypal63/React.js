import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-center'><u>Introduction to React.js</u> </h1>
      <div className='container'>
        <h1 className='text-danger'>  Question:- 1   What is React.js? How is it different from other JavaScript frameworks and
          libraries?</h1>
        <h2 className='text-success'>ans:-</h2>
        <h3>What is React.js?</h3>
        <ul>
          <li> React is a popular JavaScript library used for building user interfaces</li>
          <li>it follows a component-based architecture and is primarily used to create web applications and single-page applications</li>
          <li> Developed by Facebook in 2013</li>
        </ul>
        <h3>How is it different from other JavaScript frameworks and
          libraries?</h3>
        <li>React.js stands out from other JavaScript frameworks and libraries due to its focus, design philosophy, and flexibility</li>
      </div>
      <div className='container'>
                <h1 className='text-danger'>Question 2: Explain the core principles of React such as the virtual DOM and componentbased architecture.</h1>
                <h2 className='text-success'>ans:-</h2>
                <p> :- React.js is built around several core principles that make it powerful, flexible, and efficient for building user interfaces.</p>

                <h3>1. Virtual DOM</h3>

                <li>The virtual DOM is a lightweight in-memory representation of the actual DOM </li>
                <li>Instead of directly manipulating the real DOM, React creates a virtual copy and uses it to determine the minimal updates required to efficiently update the real DOM.</li><br />

                <h3>2. Component-Based Architecture</h3>

                <li>React applications are built using components, which are reusable, self-contained pieces of the UI.</li>
                <li> Each component encapsulates its structure (HTML/JSX), logic (JavaScript), and styles (CSS).</li><br />
                <p className='fw-bold'>Types of Components</p>
                <ol>
                    <li>Functional Components</li>
                    <ul>
                        <li>Simple JavaScript functions that take props as input and return UI (via JSX). Commonly used with React Hooks for managing state and side effects</li>
                    </ul>
                    <li>Class Components</li>
                    <ul>
                        <li>Older way to define components using ES6 classes, with state and lifecycle methods.</li>
                    </ul>
                </ol><br />
                <h3>3. Declarative UI</h3>
                <li>React uses a declarative programming approach, where you describe what the UI should look like for a given state, and React takes care of the underlying DOM updates to match it.</li>
                <li>React handles DOM manipulation and efficiently re-renders when data changes.</li><br />
                <h3>4. One-Way Data Flow</h3>
                <li>In React, data flows in a unidirectional manner, from parent components to child components via props</li>
                <li> This ensures predictable data handling and makes debugging easier.</li><br />
                <h3>5. JSX (JavaScript XML)</h3>
                <li>JSX is a syntax extension that allows you to write HTML-like code directly within JavaScript</li>
                <li> It makes the code more readable and intuitive by combining the UI layout with logic.</li><br />
                <h3>6. State and Lifecycle</h3>
                <li>State is a special object in React used to store data that can change over time. Changes to the state trigger a re-render of the component.</li>
                <li>React components have a lifecycle with methods like    <u>componentDidMount, componentDidUpdate, componentWillUnmount</u>
                    in class components. For functional components, React Hooks like useEffect handle similar lifecycle events.</li>
            </div>
            <div className='container'>
                <h1 className='text-danger'>Question 3: What are the advantages of using React.js in web development?
                </h1>
                <h2 className='text-success'>ans:-</h2>
                <h3>Advantages of using React.js</h3>
                <li>Component-Based Architecture</li>
                <li>Virtual DOM for High Performance</li>
                <li>Reusable Components</li>
                <li> Strong Community Support</li>
                <li>Rich Ecosystem</li>
                <li>Unidirectional Data Flow</li>
                <li> Cross-Platform Development </li>
                <li>SEO-Friendly</li>
                <li>Continuous Updates and Backing by Meta</li>
                <li>Easy to Learn and Use</li>
            </div>
            <hr className='text-danger' />
    </>
  )
}

export default App
