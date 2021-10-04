import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {message: 'firs dialog', likesCount: 12},
    {message: 'second dialog', likesCount: 10},
    {message: '3 dialog', likesCount: 12}
]

let dialogs = [
    {id: 1, name: 'Yevgeniy'},
    {id: 2, name: 'Diana'},
    {id: 3, name: 'Nazar'},
    {id: 4, name: 'Sergey'},
    {id: 5, name: 'Vickotoria'}
]

let messages = [
    {id: 1, message: 'Hey, how are you?'},
    {id: 2, message: 'Ok'},
    {id: 3, message: 'Good'}

]

ReactDOM.render(

  <React.StrictMode>
    <App dialogsData={dialogsData} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
