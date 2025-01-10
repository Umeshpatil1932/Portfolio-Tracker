import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const StockList = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetchStocks();
    }, []);

    const fetchStocks = async () => {
        try {
            const response = await axios.get('/api/stocks');
            setStocks(response.data);
        } catch (error) {
            console.error('Error fetching stocks:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/stocks/${id}`);
            fetchStocks();
        } catch (error) {
            console.error('Error deleting stock:', error);
        }
    };

    return (
        <List>
            {stocks.map((stock) => (
                <ListItem key={stock.id}>
                    <ListItemText primary={`${stock.name} (${stock.ticker})`} secondary={`Quantity: ${stock.quantity}, Buy Price: $${stock.buyPrice}`} />
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(stock.id)}>Delete</Button>
                </ListItem>
            ))}
        </List>
    );
};

export default StockList;