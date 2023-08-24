import React, { useEffect } from 'react';
import HeaderCompo from './../CommonCompo/HeaderCompo.jsx';
import FooterCompo from './../CommonCompo/FooterCompo.jsx';
// import FormCompo from './../Componenet/FormCompo.jsx';
import { retierveUsers } from './../Action/users.jsx';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
console.log("called home page");
const HomePage = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        console.log("called useEffect from home page");
        getUsers()
    })
    async function getUsers() {
        console.log("called getuser");
        let abc = await dispatch(retierveUsers())
        console.log(abc);
    }
    return (
        <>
        <HeaderCompo/>
        <Link to="/admin/allusers">Admin</Link>
        {/* <FormCompo/> */}
        <FooterCompo/>
        </>
    );
};

export default HomePage;