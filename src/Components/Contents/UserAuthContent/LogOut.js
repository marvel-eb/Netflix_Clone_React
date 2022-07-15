import React from "react";

// // using ES6 modules
import { Link } from "react-router-dom";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";

import { auth } from "../../../firebase/utils";

const LogOut = (props) => {
    return (
        <div>
            <span>
                <Link to="/DashboardScreen">

                    <FaUserAlt className="s-icons" size="2em" />


                </Link>
            </span>

            <span className="ml-3" onClick={() => auth.signOut()}>
                <FaSignOutAlt className="s-icons" size="2em" />

            </span>

        </div>
    );
};

export default LogOut;
