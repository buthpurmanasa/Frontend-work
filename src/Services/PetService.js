import axios from 'axios';

  const ADOPTER_API_BASE_URL = "http://localhost:8080/api/v1/Adopters";
//  const STUDENT_API_BASE_URL = "http://localhost:3000/Students";


class PetService {
    // CRUD operation


    getAdopter(){
        return axios.get(ADOPTER_API_BASE_URL);
    }

    getAdopterById(adopterId){
        return axios.get(ADOPTER_API_BASE_URL + '/' + adopterId);
    }

    createAdopter(data){
        console.log(data)
        return axios.post(ADOPTER_API_BASE_URL, data);
    }

    editAdopter(adopterId,adopter){
        console.log(adopter);
        return axios.put(ADOPTER_API_BASE_URL + '/' + adopterId,adopter);
    }

   
   

    deleteAdopter(adopterId){
        
        return axios.delete(ADOPTER_API_BASE_URL + '/' + adopterId);
    }
}

export default new PetService();