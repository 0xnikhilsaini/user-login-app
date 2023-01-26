import axios from 'axios';
import apiEndpoint from "./apiConfig"

const login = ({ email, password }) => {
    let data = {
        email, password
    }

    let config = {
        method: 'post',
        url: apiEndpoint.login,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    return axios(config);
}

const signup = ({ email, password }) => {
    let data = {
        email, password
    }

    let config = {
        method: 'post',
        url: apiEndpoint.signup,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    return axios(config);
}
const getUser = ( accessToken ) => {
    let config = {
        method: 'get',
        url: apiEndpoint.getUser,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
    };
    return axios(config);
}
const updatProfile = (accessToken, { firstName, lastName }) => {
    let data = { firstName, lastName }

    let config = {
        method: 'put',
        url: apiEndpoint.updateProfile,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        data: data
    };
    return axios(config);
}
const deleteProfile = (accessToken) => {
    let config = {
        method: 'delete',
        url: apiEndpoint.deleteProfile,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
    };
    return axios(config);
}


export { login, signup, getUser, updatProfile, deleteProfile };
