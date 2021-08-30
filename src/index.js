import React from 'react';
import ReactDOM from 'react-dom';
// const name = 'React';
// const element = React.createElement('h1', null, 'Hello React');
// const element = <h1>Hello {name}</h1>;

// function getGrettings(user) {
//     if (user) {
//         return <h1>Hello, {user}!</h1>;
//     }
//     return <h1>Hello, Stranger!</h1>;
// }
// console.log(getGrettings('Noman'));

// setInterval(() => {
//     const element = (
//         <div className="name">
//             <span className="span">Hello {new Date().toLocaleTimeString()}</span>
//             <img src="" alt="" />
//         </div>
//     );
//     reactDom.render(element, document.getElementById('root'));
// }, 1000);
// console.log(element);

// react component
// functional component
// here Clock function is a component, locale is props & clock funtion's retun value is an element
// function Clock({ locale }) {
//     return (
//         <div className="name">
//             <span className="span">Hello {new Date().toLocaleTimeString(locale)}</span>
//             <img src="" alt="" />
//         </div>
//     );
// }

// ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));

// example of a class component

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

ReactDOM.render(<Welcome name="Noman" />, document.getElementById('root'));
