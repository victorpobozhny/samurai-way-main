import AudreyHorn from "./../images/firends/AudreyHorn.png";
import MartyMcFly from './../images/firends/MartyMcFly1.jpg'
import Neo from './../images/firends/Neo1.jpg'
import {AppStateType} from "../App";
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'

export type ActionType = {
    type: string
    inputText?: string
}

let store = {
    _state: {
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
    },
    _callSubscriber(s: AppStateType) { //функция существует как заглушка, ее просто переназначают через subscribe

    },
    getState() {
        return this._state
    },
    // на строке ниже подписывается наблюдатель типа (state: AppStateType)=> void и назначается в метод _callSubscriber
    subscribe(observer: (state: AppStateType) => void) {
        this._callSubscriber = observer
    },
    // общий метод dispatch в котором инкапсулированы методы по изменению state. они выполнены через
    // reducers которые принимают нужную часть state и action и возвращают state
    dispatch(action: ActionType) {  //type
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(store._state)
    }
}
//ActionCreators- функции, который возвращают объект action хранятся в файлах редьюсеров

export default store;
console.log(store)