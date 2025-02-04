import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export const register  = async (name, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`,{ name, email, password });
        return response.status === 200;
    } catch (error) {
        console.error('Error deleting request:', error);
        throw error;
    }
};

export const createEmail  = async (emailData) => {
    try {
        const response = await axios.post(`${API_URL}/emails/create`,{emailData});
        return response.status === 200;
    } catch (error) {
        console.error('Error deleting request:', error);
        throw error;
    }
};

export const fetchEmails   = async (status) => {
    try {
        const response = await axios.get(`${API_URL}/emails`,{status});
        return response.status === 200;
    } catch (error) {
        console.error('Error deleting request:', error);
        throw error;
    }
};

export const updateDraft   = async (emailId, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/emails/draft`,{emailId,updatedData} );
        return response.status === 200;
    } catch (error) {
        console.error('Error deleting request:', error);
        throw error;
    }
};

//login תבדקי אם זה טוב אם את צריכה עוד פונקציה בסוף אני לשירותך

export const login = async (email, password) => {
    console.log('Entering login function');

    try {
        const response = await axios.post(`${API_URL}/auth/login`, { email, password });
        console.log('Request body being sent:', { email, password });
        console.log('Response from server:', response.data);
        return response.data.token;
    } catch (error) {
        if (error.response && error.response.data) {
            console.error('Error response from server:', error.response.data);
            return error.response.data;
        }
        console.error('Error checking email:', error.message);
        throw error;
    }
};

