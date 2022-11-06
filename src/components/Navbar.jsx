import { Link } from "react-router-dom";

const Navbar= () =>{
    return (
    <div>
      <ul>
       <button><Link to="/">Home</Link></button>
      </ul>
     
      <ul>
      <button><Link to="/Profile">Profile</Link> </button>
      </ul>
     
    </div>
    );
  }
  export default Navbar;