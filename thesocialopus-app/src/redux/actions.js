//auth

export const authTypes = {
    LOGGED_IN: "logged_in",
    LOGGED_OUT: "logged_out"
}

export const authSuccess = status =>({
    type: authTypes.LOGGED_IN,
    payload: status
})


//currentUser

export const userTypes = {
    SET_CURRENT_USER: "set_current_user",
    SET_USER_ROLE: "set_user_role",
    // GET_USER_ID = "get_user_id",
    // GET_USER_ROLE = "get_user_role"
}

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
  });

export const setUserRole = role => ({
    type: userTypes.SET_USER_ROLE,
    payload: role
  });

//cart


