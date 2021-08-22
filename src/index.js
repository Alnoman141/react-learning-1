import React from 'react';
import reactDom from 'react-dom';
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

setInterval(() => {
    const element = (
        <div className="name">
            <span className="span">Hello {new Date().toLocaleTimeString()}</span>
            <img src="" alt="" />
        </div>
    );
    reactDom.render(element, document.getElementById('root'));
}, 1000);
// console.log(element);
