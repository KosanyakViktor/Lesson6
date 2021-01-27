import React from "react";
import Auth from './Auth';
import Login from './Login';
import Spinner from './Spinner';
import Logout from './Logout';

const App = () => {
  return <div>
          <Auth />
          <Login />
          <Logout />
          <Spinner size={50} />
         </div>;
};

export default App;
