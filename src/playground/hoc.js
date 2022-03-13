import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1> Info </h1>
    <p>This is some info: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is a private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Pls log in first</p>}
      
    </div>
  )
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Yaas kween yaas"/>, document.getElementById('app'));