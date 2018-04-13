import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';



ReactDOM.hydrate(
    <App initialData={window.initialData}/>,
        document.querySelector('#root')
    );
    
setTimeout(function () {
    ReactDOM.hydrate(
        <h1>Clear!!</h1>,
            document.querySelector('#root')
        ); 
}, 5000);