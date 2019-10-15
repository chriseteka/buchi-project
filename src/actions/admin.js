import { ADD_ERROR, ADD_NEW_ADMIN, ADD_NEW_HOSPITAL_ATTENDANT, GET_ALL_HOSPITAL_ATTENDANT,
    GET_ALL_STUDENT, GET_ALL_ADMIN, GET_LEFT_THUMB, GET_RIGHT_THUMB, ADD_NEW_STUDENT, VERIFY_STUDENT } from '../type';
import axios from 'axios';

export const adminCreated = data => ({
    type: ADD_NEW_ADMIN,
    payload: data
});

export const hAttendantCreated = data => ({
    type: ADD_NEW_HOSPITAL_ATTENDANT,
    payload: data
});

export const errors = (data) => {
    return {
        type: ADD_ERROR,
        payload: data
    }
}

export const createAdmin = data => dispatch => {
    
    axios.post("/admin/create/admin", data).then(res => {
        console.log(res.data);
        dispatch(adminCreated(res.data));
    }).catch(err => {
        console.log(err.response)
        if(err.response.status === 400){
            dispatch(errors(err.response.data))
        }
    })
}

export const createHosAttendant = data => dispatch => {
    
    axios.post("/admin/create/hospital/attendant", data).then(res => {
        console.log(res.data);
        dispatch(hAttendantCreated(res.data));
    }).catch(err => {
        console.log(err.response)
        if(err.response.status === 400){
            dispatch(errors(err.response.data))
        }
    })
}

export const createStudent = data => dispatch => {
    axios.post("/hospital/attendant/create/student", data).then(res => {
        console.log(res.data);
        dispatch({
            payload: res.data,
            type: ADD_NEW_STUDENT
        });
    }).catch(err => {
        console.log(err.response)
        if(err.response.status === 400){
            dispatch(errors(err.response.data))
        }
    })
}

export const getAllHosAttendant  = () => dispatch => {
    axios.get("/admin/all/hospital/attendant").then(res => {
        dispatch({
            payload: res.data,
            type: GET_ALL_HOSPITAL_ATTENDANT
        })
    })
}

export const getAllStudent = () => dispatch => {
    axios.get("/hospital/attendant/all/students").then(res => {
        dispatch({
            payload: res.data,
            type: GET_ALL_STUDENT
        })
    })
}

export const getAllAdmin = () => dispatch => {
    axios.get("/admin/all/admin").then(res => {
        dispatch({
            payload: res.data,
            type: GET_ALL_ADMIN
        })
    })
}

export const leftThumb = () => dispatch => {
    axios.get("/fingerprint/scan/left").then(res => {
        dispatch({
            payload: res.data,
            type: GET_LEFT_THUMB
        })
    })
}

export const rightThumb = () => dispatch => {
    axios.get("/fingerprint/scan/right").then(res => {
        dispatch({
            payload: res.data,
            type: GET_RIGHT_THUMB
        })
    })
}

export const verifyStudent = () => dispatch => {
    axios.get("/hospital/attendant/verify/student").then(res => {
        console.log(res.data)
        if(typeof res.data === "string"){
                dispatch(errors("Verification failed"))
        }else {

            dispatch({
                payload: res.data,
                type: VERIFY_STUDENT
            })
        }
    })
}
