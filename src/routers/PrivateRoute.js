import React from 'react';
import {connect} from 'react-redux';
import {Route,Navigate} from 'react-router-dom';

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) =>{
  <Route {...rest} component={()=>(
    isAuthenticated?(
      <Component {...prorps}/>
    ):(
      <Navigate to ="/"/>
    )
  )}/>
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);
