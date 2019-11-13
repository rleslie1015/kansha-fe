export const USER_LOGIN = "USER_LOGIN"
export const login = (userProfile) => dispatch => {
    dispatch({ type: USER_LOGIN, payload: userProfile })   
}