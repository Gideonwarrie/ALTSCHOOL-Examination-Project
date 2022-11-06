import React from "react";
import { Link } from "react-router-dom";

function User() {
    return (
      <div>
        <Link to="/">Go back</Link>
        <h1>User's List</h1>
        <Link to="Login">Login</Link>
        
      </div>
    );
  }

  export default User 