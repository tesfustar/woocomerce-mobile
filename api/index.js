import axios from "axios";

const BASE_URL='http://192.168.0.109:5000/api'


export const fetchCategories = () => axios.get(`${BASE_URL}/category`);