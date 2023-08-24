import UserService from "./../services/UserService.jsx"
import {RETRIVE_USER_LOGIN} from "./../Action/types.jsx"

console.log("action file ");
export const retierveUsers = ()=> async(dispatch)=> {
    console.log("retierveUsers function called ");
    const ResData = await UserService.getAll();
        return dispatch({type:"RETRIVE_ALL_USERS",payload:ResData})
    // try {
        
    // } catch (error) {
        
    // }
}
export const loginUserData = (userid)=> async(dispatch)=> {
    const ResData = await UserService.getUserLoginData(userid);
    try {
        // console.log("loginUserData",ResData.data[0]);
        return dispatch({type:RETRIVE_USER_LOGIN,payload:ResData.data}) 
    } catch (error) {
        console.log("Error",error); 
        return dispatch({type:RETRIVE_USER_LOGIN,payload:{"ResData":"Error"}}) 
    }
}