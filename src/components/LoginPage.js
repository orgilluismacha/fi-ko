import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';



export const LoginPage = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className='box-layout__box'>
        <h1 className='box-layour__title'>fi-ko</h1>
        <button className='button' onClick={startLogin}>Login with google</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);