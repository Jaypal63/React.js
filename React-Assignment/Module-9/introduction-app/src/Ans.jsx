import React from 'react'

export default function Ans() {
    return (
        <>
            <div className='container'>
                <h1 className='text-center'><u>JSX</u></h1>
                <h1 className='text-danger '>Question 1: What is JSX in React.js? Why is it used? </h1>
                <h2 className='text-success'>ans</h2>
                <li>JSX (JavaScript XML) is a syntax extension for JavaScript, commonly used with React. It allows you to write HTML-like
                    code within your JavaScript, making it easier to define the structure of UI components. JSX makes React code more readable
                    and expressive, as it combines HTML and JavaScript in a single file.</li><br /><br />
                <h3>Why is JSX used in React.js?</h3>
                <li>Readability: It provides a more intuitive and declarative way to define UI components compared to using plain JavaScript functions.</li>
                <li>Component Structure: JSX allows React developers to structure their components in a way that closely resembles HTML, simplifying the process of creating complex UIs.</li>
                <li>Prevents Errors: Since JSX is parsed into JavaScript, it allows the React compiler to catch syntax errors, making debugging easier.</li>
                <li>React’s Efficiency: JSX is compiled to React.createElement() calls, which are optimized for rendering components efficiently</li>
                <br /><br />
                <h1 className='text-danger'>Question 3: Discuss the importance of using curly braces { } in JSX expressions.</h1>
                <h2 className='text-success'>Ans</h2>
                <li>In JSX, curly braces { } are used to embed JavaScript expressions inside HTML-like syntax.</li>
                <li>This makes JSX dynamic, allowing you to insert variables, perform calculations, call functions, and use conditional rendering inside JSX.</li>
                <ol>
                    <li>Embedding JavaScript Expressions</li>
                    <li> Performing Calculations and Operations</li>
                    <li> Conditional Rendering using { }</li>
                    <li>Using Functions Inside JSX</li>
                    <li>Rendering Lists Dynamically</li>
                </ol>
            </div><hr className='text-danger' />
            <div className='container'>
                <h1 className='text-center '><u>props and State</u></h1>
                <h1 className='text-danger'>Question 1: What are props in React.js? How are props different from state?</h1>
                <h2 className='text-success'>ans</h2>
                <h3>props:-</h3>
                <li>Passed from parent to child: Props are used to pass data from a parent component to a child component.</li>
                <li>Read-only: Props are immutable inside the child component, meaning they cannot be changed by the child component.</li>

                <li>Used for communication: They allow components to communicate with each other by passing information.</li>
                <h3>state</h3>
                <li>Managed within the component: State is used to manage data that changes over time within a component.</li>
                <li>Mutable: State can be changed using the setState method (or the useState hook in functional components).</li>
                <li>Triggers re-render: When state changes, the component re-renders to reflect the updated data.</li>

                <h1 className='text-danger'>Question 2: Explain the concept of state in React and how it is used to manage component data. </h1>
                <h2 className='text-success'>ans:-</h2>
                <li>In React, state is an object used to manage a component's dynamic data.</li>
                <li>It plays a key role in controlling how the component behaves and renders over time.</li>
                <h3>How to Use State:</h3>
                <li>State is managed differently in functional components and class components.</li>
                <h4>State in Functional Components:</h4>
                <li>In functional components, you use the useState hook to manage state.</li>
                <h4>State in Class Components:</h4>
                <li>In class components, state is managed using this.state and updated using this.setState.</li>
                <h3>Key Points About State Management:</h3>
                <li>Immutable Nature</li>
                <li>Asynchronous Updates</li>
                <li>Single Source of Truth</li>
                <h1 className='text-danger'>Question 3: Why is this.setState() used in class components, and how does it work? </h1>
                <h2 className='text-success'>ans:-</h2>
                <li>In React class components, this.setState() is used to update the state of the component.</li>
                <li> It is the only way to modify the state object and trigger a re-render of the component</li>
                <li> Directly modifying this.state (e.g., this.state.count = 1) does not work and will not trigger React's re-rendering mechanism.</li>
                <h3>How Does this.setState() Work?</h3>
                <li>Merges New State with Existing State</li>
                <li>Triggers a Re-Render</li>
                <li>Asynchronous Nature</li>
                <br />
            </div>
        </>
    )
}
