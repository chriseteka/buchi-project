import { AUTH } from '../type';
import axios from 'axios';

export const loggedIn = data => ({
    type: AUTH,
    payload: data
});


export const login = data => dispatch => {

    axios.post("/login", data).then(res => {
        dispatch(loggedIn(res.data))
    })
}

