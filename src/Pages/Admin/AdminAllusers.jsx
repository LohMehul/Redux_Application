import { useCallback, useState } from "react";

export default function MyComponent() {

    const [state, setState] = useState(false);
    const [OtherData, setOtherData] = useState(false);
    // poor usage of useCallback()
    // const clickHandler = useCallback(() => {
    //     // handle the click event
    //     // setState(!state)
    //     clickHandlerFucntion()
    //     console.log("btn clicked callback");
    // }, []);
    // const clickHandlerFucntion = () => {
    //     console.log("clickHandlerFucntion");
    //     setState(!state)
    // };
    const clickHandler = () => {
            console.log("clickHandler");
        setState(!state)
    };

    console.log("Called");
    return <>
        <div className="container" style={{ marginLeft: "300px" }}>
            <button onClick={() => { setOtherData(!OtherData) }}>Click</button>
            {JSON.stringify(state)}
            <ButtonWrapper onClickEvent={clickHandler} />
        </div>
    </>
    // return <button onClick={clickHandler}>Child Component...</button>;
}
const ButtonWrapper = ({ onClickEvent }) => {
    console.log("ButtonWrapper btn clicked");
    return <button onClick={onClickEvent}>Child Component...</button>;
    console.log("called inside btn");
};


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { selectUser } from "./../../Reducer/users";
// import { useSelector } from 'react-redux';

// const AdminAllusers = () => {
//     const users = useSelector(selectUser);

//     // const dispatch = useDispatch()
//     // const navigate = useNavigate();
//     const [errorMsg, setErrorMsg] = useState(false);
//     // const [loader, setLoader] = useState(false);
//     // const [allUsers, setAllUsers] = useState(false);
//     const [userdelete, setUserDeleteStatus] = useState(false);

//     useEffect(() => {
//         console.log("users",users.data);
//         // getAllUsersData()
//     }, [userdelete])
//     // let allUsersDataList = ""
//     let deleteuser = async (e) => {
//         // console.log(e.target.getAttribute("data-id"));
//         let userid = e.target.getAttribute("data-id");
//         const response = await axios.delete(`http://localhost:5000/users/${userid}`)
//             .then((response) => { console.log(response); })
//         setUserDeleteStatus(true)
//     }
//     // let getAllUsersData = async () => {
//     //     // try {

//     //         // const response = await axios.get(`http://localhost/api/users`)
//     //         // const response = await axios.get(`https://jayramin.000webhostapp.com/allusers`)
//     //         //     const response = await axios.get(`http://localhost:5000/users`)
//     //         //         .then((response) => {
//     //         //             console.log(response);
//     //         //             if (response.status == 200) {
//     //         //                 console.log("server connected", response.data);
//     //         //                 let allUsersDataList=""
//     //         //                 allUsersDataList =Object.entries(response.data).map(([key,value],i)=>{
//     //         //                     return <tr key={i}>
//     //         //                         <td>{value.username}</td>
//     //         //                         <td>{value.password}</td>
//     //         //                         <td>{value.email}</td>
//     //         //                         <td><Link to={`/admin/edituserdata/${value.id}`} className='text-light btn btn-primary'>edit</Link></td>
//     //         //                         {/* <td><Link to="/admin/edituserdata/"+{value.id} className='text-light btn btn-primary'>edit</Link></td> */}
//     //         //                         <td><button className='btn btn-danger' data-id={value.id} onClick={deleteuser}>delete</button></td>
//     //         //                     </tr>
//     //         //                 })
//     //         //                 setAllUsers(allUsersDataList)
//     //         //                 setLoader(true)
//     //         //             } else {
//     //         //                 console.log("error while connecting to the server");
//     //         //             }
//     //         //         }).catch((error) => {
//     //         //             console.log("inside catch", error);
//     //         //             setErrorMsg(true)
//     //         //             if (error.response) {
//     //         //                 console.log(error.response);
//     //         //                 console.log("server responded");
//     //         //             } else if (error.request) {
//     //         //                 console.log("network error");
//     //         //             } else {
//     //         //                 console.log(error);
//     //         //             }
//     //         //         });
//     //         // } catch (error) {
//     //         //     console.log(error);
//     //         // }
//     //     }
//     return (
//             <>
//                 <div className="proj-admin-card">
//                     all users data
//                     <table className='table table-bordered'>
//                         <thead className='bg-dark text-light'>
//                             <tr>
//                                 <th className='text-light' >User Name</th>
//                                 <th className='text-light' >Password</th>
//                                 <th className='text-light' >Email</th>
//                                 <th colSpan={2} className='text-light text-center' >Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {/* {JSON.stringify(allUsers)} */}
//                             {/* {loader ? allUsers : <tr> <td colSpan={5}>No Record Found...</td> </tr>} */}

//                         </tbody>
//                     </table>
//                 </div>
//             </>
//         );
//     };

//     export default AdminAllusers;