import axios from 'axios';
const api = axios.create({
    baseURL : 'https://apiagendamento.herokuapp.com'
})
export default api;