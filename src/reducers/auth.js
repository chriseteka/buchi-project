import { AUTH, USER_LOGGED_OUT } from '../type';

const initialState = {
    isAuthenticated: false,
    user:{}
};

const Auth = (state = initialState, action = {}) => {
    switch(action.type){
        case AUTH:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case USER_LOGGED_OUT:
            return{
                ...state,
                isAuthenticated: false,
                user: action.payload
            }; 
        default:
            return state

    }
}


export default Auth;