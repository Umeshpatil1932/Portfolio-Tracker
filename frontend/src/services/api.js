import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const fetchStocks = async () => {
    try {
        const response = await axios.get(`${API_URL}/stocks`);
        return response.data;
    } catch (error) {
        console.error('Error fetching stocks:', error);
        throw error;
    }
};

export const addStock = async (stock) => {
    try {
        const response = await axios.post(`${API_URL}/stocks`, stock);
        return response.data;
    } catch (error) {
        console.error('Error adding stock:', error);
        throw error;
    }
};

export const updateStock = async (id, stock) => {
    try {
        const response = await axios.put(`${API_URL}/stocks/${id}`, stock);
        return response.data;
    } catch (error) {
        console.error('Error updating stock:', error);
        throw error;
    }
};

export const deleteStock = async (id) => {
    try {
        await axios.delete(`${API_URL}/stocks/${id}`);
    } catch (error) {
        console.error('Error deleting stock:', error);
        throw error;
    }
};

export const fetchPortfolioValue = async () => {
    try {
        const response = await axios.get(`${API_URL}/portfolio-value`);
        return response.data;
    } catch (error) {
        console.error('Error fetching portfolio value:', error);
        throw error;
    }
};