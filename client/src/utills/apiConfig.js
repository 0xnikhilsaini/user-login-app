const BASE_URL = "http://localhost:3001/v1";
const apiEndpoint = {
    login: `${BASE_URL}/auth/login`,
    signup: `${BASE_URL}/auth/signup`,
    deleteProfile: `${BASE_URL}/userProfile`,
    updateProfile: `${BASE_URL}/userProfile`,
    getUser: `${BASE_URL}/userProfile/user`,
}

export default apiEndpoint;