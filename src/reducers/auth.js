import { AUTH } from '../type';

const initialState = {

};

const Auth = (state = initialState, action = {}) => {
    switch(action.type){
        case AUTH:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        default:
            return state

    }
}


export default Auth;