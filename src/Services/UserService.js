import axios from 'axios';

const URL = "http://localhost:8080/api/v1/User/create";
const getURL = "http://localhost:8080/api/v1/User";

class UserService {
    // User registration
    CreateUser(userData) {
        return axios.post(URL, userData);
    }

    // User login
    getUser() {
        return axios.get(getURL);
    
    

    }
}

export default new UserService();

