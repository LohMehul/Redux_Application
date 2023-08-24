import {RETRIVE_ALL_USERS,RETRIVE_USER_LOGIN} from "../Action/types.jsx"

const intialState  = {}
console.log("user reducer");
const usersReducer=(users=intialState,action)=>{
    const {type, payload} = action
    switch (type) {
        case RETRIVE_ALL_USERS:
            return {...payload}
        case RETRIVE_USER_LOGIN:
            console.log(payload);
            return {...payload}
        default:
        return users
    }
}
export const selectUser = (state)=>state.users
export default usersReducer
// username
// Username
// UserName
// userName
// user name