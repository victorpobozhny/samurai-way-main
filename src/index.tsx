import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const messagesData = [
    {message: 'Hi', id: 1},
    {message: 'Hello, How are you', id: 2},
    {message: 'Yo', id: 3},
    {message: 'Just do id', id: 4},
]

const dialogsData = [
    {
        name: 'Victor',
        id: 1
    },
    {
        name: 'Andrew',
        id: 2
    },
    {
        name: 'Nickolas',
        id: 3
    },
    {
        name: 'Amanda',
        id: 4
    },
    {
        name: 'Anastasia',
        id: 5
    },
]

const postsData = [
    {id: 1, text: 'Hello, my name is Audrey Horne, and I\'m glad to see you', author: 'Audrey Horne', likesCount: 10},
    {id: 2, text: 'How are you?', author: 'Audrey Horne', likesCount: 12},
    {id: 3, text: 'The weather is good today, isn\'t is?', author: 'Audrey Horne', likesCount: 5},
]

ReactDOM.render(
    <App messagesData={messagesData} dialogsData={dialogsData} postsData={postsData}/>,
    document.getElementById('root')
);