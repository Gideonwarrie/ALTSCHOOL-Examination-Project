
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";




function Profile () {
    return(
        <div className="profile">
            <h1 className="userprofile">User Profile</h1>
            <LoginForm/>
            {/* <p><Link to=":id">Sign in</Link></p> */}
        </div>
    )
}
function LoginForm (){
return(
    <div className="loginform">
        <p><input type="text" placeholder="Your fIrst Name"/></p>
    <button  className="signin"><Link to="/Profile/Login">Login</Link></button>
    

    </div>
)  
}

export default Profile