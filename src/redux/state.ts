import AudreyHorn from "./../images/firends/AudreyHorn.png";
import MartyMcFly from './../images/firends/MartyMcFly1.jpg'
import Neo from './../images/firends/Neo1.jpg'
import {rerenderEntireTree} from "../render";

export let state = {
    dialogsPage: {
        messagesData: [
            {message: 'Hi', id: 1},
            {message: 'Hello, How are you', id: 2},
            {message: 'Yo', id: 3},
            {message: 'Just do it', id: 4},
        ],
        newMessage: '',
        dialogsData: [
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
    },

    profilePage: {
        postsData: [
            {
                id: 1,
                text: 'Hello, my name is Audrey Horne, and I\'m glad to see you',
                author: 'Audrey Horne',
                likesCount: 10
            },
            {id: 2, text: 'How are you?', author: 'Audrey Horne', likesCount: 12},
            {id: 3, text: 'The weather is good today, isn\'t is?', author: 'Audrey Horne', likesCount: 5},
        ],
        newPostText: 'it-kamasutra'
    },
    friends: [
        {
            name: 'Audrey',
            surname: 'Horne',
            avatar: AudreyHorn
        },
        {
            name: 'Marty',
            surname: 'McFly',
            avatar: MartyMcFly
        },
        {
            name: 'Thomas',
            surname: 'Anderson',
            avatar: Neo
        },
    ]
}


export const addPost = () => {
    const newPost = {
        id: state.profilePage.postsData.length + 1,
        text: state.profilePage.newPostText,
        author: 'Audrey Horne', likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (inputText: string) => {
    state.profilePage.newPostText = inputText
    rerenderEntireTree(state)
}


export const addMessage = () => {
    state.dialogsPage.messagesData.push({message: state.dialogsPage.newMessage, id: state.dialogsPage.messagesData.length+1})
    state.dialogsPage.newMessage = ''
    rerenderEntireTree(state)
}

export const updateMessage = (inputText: string) => {
    state.dialogsPage.newMessage = inputText
    rerenderEntireTree(state)
}