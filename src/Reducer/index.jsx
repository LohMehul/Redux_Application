// console.log("reducer index file called");

import users from "./users.jsx"

import { combineReducers } from 'redux'
console.log("index reducer");
export default combineReducers({
    users
})