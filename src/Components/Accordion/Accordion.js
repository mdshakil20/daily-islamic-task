import React from 'react';
import './Accordion.css'

const Accordion = () => {
    return (
        <div className='mt-12'>
            <details>
                <summary>How does react work?</summary>
                ReactJS divides the UI into isolated reusable pieces of code known as components.
                React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.
                It's possible to have as many components as necessary without cluttering your code.
            </details>
            <details>
                <summary>What is the difference between props and state in React component?</summary>
                Simply put, State is the local state of the component which cannot be accessed and modified outside
                of the component. It's equivalent to local variables in a function. Props, on the other hand, make
                components reusable by giving components the ability to receive data from their parent component in
                the form of props.
            </details>

            <details>
                <summary>Apart from loading data, what else does it do useEffect() hook do in React?</summary>
                The useEffect Hook allows you to perform side effects in your components.
                Some examples of side effects are: fetching data,
                directly updating the DOM, and timers. useEffect accepts two arguments.
                The second argument is optional.
            </details>

        </div>
    );
};

export default Accordion;