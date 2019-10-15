import { AUTH, USER_LOGGED_OUT } from '../type';
import axios from 'axios';
import setAuthorizationHeaders from '../utils/setAuthorizationHeaders'

export const loggedIn = data => ({
    type: AUTH,
    payload: data
});


export const login = data => dispatch => {
    axios.post("/app/authenticate", data).then(res => {
        dispatch(loggedIn(res.data));
        window.localStorage.JWT = res.data.authToken;
        setAuthorizationHeaders(res.data.authToken);
        // window.location.href = "/dashboard";
    })
}

export const logout = () => dispatch => {
    window.localStorage.JWT = "";
    setAuthorizationHeaders(null);
    dispatch({
        type: USER_LOGGED_OUT,
        payload: {}
    });
}

