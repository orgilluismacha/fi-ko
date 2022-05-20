import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';



export const LoginPage = ({startLogin}) => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   console.log('dsadsadasdas');
  //   console.log("buh"+location.pathname);

  //   const auth = getAuth();

  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       if(location.pathname === '/'){
  //         navigate('/dashboard');

  //       }
  //     } else {
  //       navigate('/');
  //       console.log('f l a c c i d');
  //     }
  //   });

  // }, [navigate]);

  return (
    <div>
      <button onClick={startLogin}>Login</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);