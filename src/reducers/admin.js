import { ADD_ERROR, ADD_NEW_ADMIN, ADD_NEW_HOSPITAL_ATTENDANT, GET_ALL_HOSPITAL_ATTENDANT,
         GET_ALL_STUDENT, GET_ALL_ADMIN, GET_LEFT_THUMB, GET_RIGHT_THUMB, ADD_NEW_STUDENT,
          VERIFY_STUDENT } from '../type';

const initialState = {
    adminAdded: "",
    hAttendantAdded: "",
    studentAdded:"",
    verifiedStudent: {},
    error: "",
    allHospitalAttendant: [],
    allStudent: [],
    allAdmin: [],
    leftThumb: "",
    rightThumb: "",
};

const Admin = (state = initialState, action = {}) => {
    switch(action.type){
        case ADD_NEW_ADMIN:
            return {
                ...state,
                adminAdded: action.payload,
                error: ""
            };
        case ADD_NEW_HOSPITAL_ATTENDANT:
            return{
                ...state,
                hAttendantAdded: action.payload,
                error: ""
            }
        case ADD_ERROR:
            return {
                ...state,
                error: action.payload,
                adminAdded: ""
            }
        case GET_ALL_HOSPITAL_ATTENDANT:
            return {
                ...state,
                allHospitalAttendant: action.payload
            }
        case GET_ALL_STUDENT:
            return{
                ...state,
                allStudent: action.payload
            }
        case GET_ALL_ADMIN:
            return{
                ...state,
                allAdmin: action.payload
            }
        case GET_LEFT_THUMB:
            return{
                ...state,
                leftThumb: action.payload
            }
        case GET_RIGHT_THUMB:
            return{
                ...state,
                rightThumb: action.payload
            }
        case ADD_NEW_STUDENT:
            return{
                ...state,
                studentAdded: action.payload,
                error:"",
                leftThumb: "",
                rightThumb: "",
            }
        case VERIFY_STUDENT:
            return{
                ...state,
                verifiedStudent: action.payload,
                error:"",
            }  
        default:
            return state

    }
}


export default Admin;