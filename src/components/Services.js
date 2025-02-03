import axios from 'axios';
const API_URL = 'http://localhost:3001/api';

export const registerUser = async (id) => {
    try {
        const response = await axios.post(`${API_URL}/product-manager/${id}`);
        return response.status === 200;
    } catch (error) {
        console.error('Error deleting request:', error);
        throw error;
    }
};