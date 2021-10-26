import React from "react";

// // using ES6 modules
// import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

import { auth } from "../../../firebase/utils";

const LogOut = (props) => {
  return (
    <div className="user__callAction-wrapper">
      {/* <div className="user__account">
        <Link to="/DashboardScreen">
          <span>
            <FaUserAlt className="s-icons" size="2em" />
            <br />
            My Account
          </span>
        </Link>
      </div> */}

      <div className="user__signOut">
        <span onClick={() => auth.signOut()}>
          <FaSignOutAlt className="s-icons" size="2em" />
          <br />
          {/* Log Out */}
        </span>
      </div>
    </div>
  );
};

export default LogOut;
