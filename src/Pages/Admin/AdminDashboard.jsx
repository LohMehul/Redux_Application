import React from 'react';
import { useCookies } from 'react-cookie';
import { loginUserData } from '../../Action/users';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const AdminDashboard = () => {
  const [cookies, setCookie] = useCookies([]);
  const dispatch = useDispatch()
  console.log("cookies",cookies.userid);
  let Res = dispatch(loginUserData(cookies.userid))
      // console.log("Login res",Res);
  return (
    <>
      Dashboard
      <div className="container" style={{marginLeft:"300px"}}>
      <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default AdminDashboard;