import React from "react";

import LogIn from "./LogIn";
import LogOut from "./LogOut";

const UserAuth = ({ children, ...otherProps }) => {
    const { currentUser } = otherProps;
    return (
        <div>
            {!currentUser && (

                <LogIn />

            )}
            {currentUser && (

                <LogOut />

            )}
        </div>
    );
};

UserAuth.propTypes = {};

export default UserAuth;
