import { Link } from "react-router-dom";

function NotFound() {
    return (
      <div>
        <h1>404 </h1>
        <h1 className="notFoundTitle">Oops! That page can’t be found.</h1>
        <p className="notFoundDesc">
          It looks like nothing was found at this location. Maybe try one of the
          links in the menu or press back to go to the previous page.
        </p>
        <Link to="/">Go to Home page</Link>
      </div>
    );
  }

  export default NotFound